/**
 * Progreso real del estudiante almacenado localmente.
 * Se mantiene separado de la interfaz para poder migrarlo a Supabase después.
 */
class AranduProgressService {
  constructor() {
    this.storageKey = 'arandumath_student_progress_v1';
  }

  emptyProgress() {
    return {
      exercisesCompleted: 0,
      completedExerciseIds: [],
      correctAnswers: 0,
      incorrectAnswers: 0,
      helpRequests: 0,
      currentStreak: 0,
      lastActivityDate: null,
      topics: {}
    };
  }

  getProgress() {
    try {
      const stored = localStorage.getItem(this.storageKey);
      return stored ? { ...this.emptyProgress(), ...JSON.parse(stored) } : this.emptyProgress();
    } catch (error) {
      console.warn('No se pudo leer el progreso:', error);
      return this.emptyProgress();
    }
  }

  saveProgress(progress) {
    localStorage.setItem(this.storageKey, JSON.stringify(progress));
    window.dispatchEvent(new CustomEvent('progressUpdated', { detail: progress }));
    return progress;
  }

  normalizeTopic(exercise) {
    return exercise?.topic || 'general';
  }

  updateStreak(progress) {
    const today = new Date().toISOString().slice(0, 10);
    if (!progress.lastActivityDate) {
      progress.currentStreak = 1;
    } else if (progress.lastActivityDate !== today) {
      const previous = new Date(progress.lastActivityDate + 'T00:00:00');
      const current = new Date(today + 'T00:00:00');
      const days = Math.round((current - previous) / 86400000);
      progress.currentStreak = days === 1 ? progress.currentStreak + 1 : 1;
    }
    progress.lastActivityDate = today;
  }

  recordAttempt(exercise, isCorrect) {
    const progress = this.getProgress();
    const topic = this.normalizeTopic(exercise);
    const current = progress.topics[topic] || {
      attempts: 0,
      correct: 0,
      incorrect: 0,
      helpRequests: 0
    };

    const exerciseId = exercise?.id || `${topic}:${exercise?.question || 'ejercicio'}`;
    current.attempts += 1;
    if (isCorrect) {
      current.correct += 1;
      progress.correctAnswers += 1;
      if (!progress.completedExerciseIds.includes(exerciseId)) {
        progress.completedExerciseIds.push(exerciseId);
        progress.exercisesCompleted += 1;
      }
    } else {
      current.incorrect += 1;
      progress.incorrectAnswers += 1;
    }
    progress.topics[topic] = current;
    this.updateStreak(progress);
    return this.saveProgress(progress);
  }

  recordHelp(exercise, tierLevel) {
    const progress = this.getProgress();
    const topic = this.normalizeTopic(exercise);
    const current = progress.topics[topic] || {
      attempts: 0,
      correct: 0,
      incorrect: 0,
      helpRequests: 0
    };
    current.helpRequests += 1;
    current.lastHelpTier = tierLevel;
    progress.helpRequests += 1;
    progress.topics[topic] = current;
    this.updateStreak(progress);
    return this.saveProgress(progress);
  }

  topicMastery(topic) {
    const item = this.getProgress().topics[topic];
    if (!item || item.attempts === 0) return 0;
    const accuracy = item.correct / item.attempts;
    const helpPenalty = Math.min(item.helpRequests * 3, 20);
    return Math.max(0, Math.round(accuracy * 100 - helpPenalty));
  }

  summary() {
    const progress = this.getProgress();
    const attempts = progress.correctAnswers + progress.incorrectAnswers;
    const accuracy = attempts ? Math.round((progress.correctAnswers / attempts) * 100) : 0;
    const topicMastery = {};
    Object.keys(progress.topics).forEach(topic => {
      topicMastery[topic] = this.topicMastery(topic);
    });
    return { ...progress, accuracy, topicMastery };
  }

  reset() {
    return this.saveProgress(this.emptyProgress());
  }
}

window.progressService = new AranduProgressService();
