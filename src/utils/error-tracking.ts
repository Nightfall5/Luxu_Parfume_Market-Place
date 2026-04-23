import { v4 as uuidv4 } from 'uuid';

interface ErrorEvent {
  id: string;
  timestamp: number;
  error: Error;
  componentStack?: string;
  userId?: string;
  metadata?: Record<string, any>;
}

class ErrorTracker {
  private static instance: ErrorTracker;
  private errors: ErrorEvent[] = [];
  private readonly maxErrors = 100;

  private constructor() {
    window.addEventListener('unhandledrejection', this.handleUnhandledRejection);
  }

  static getInstance(): ErrorTracker {
    if (!ErrorTracker.instance) {
      ErrorTracker.instance = new ErrorTracker();
    }
    return ErrorTracker.instance;
  }

  captureError(error: Error, componentStack?: string, metadata?: Record<string, any>) {
    const errorEvent: ErrorEvent = {
      id: uuidv4(),
      timestamp: Date.now(),
      error,
      componentStack,
      userId: this.getCurrentUserId(),
      metadata
    };

    this.errors.push(errorEvent);
    if (this.errors.length > this.maxErrors) {
      this.errors.shift();
    }

    this.reportError(errorEvent);
  }

  private handleUnhandledRejection = (event: PromiseRejectionEvent) => {
    this.captureError(
      new Error(`Unhandled Promise Rejection: ${event.reason}`),
      undefined,
      { type: 'unhandledrejection' }
    );
  };

  private getCurrentUserId(): string | undefined {
    // Implementation would get the current user ID from your auth context
    return undefined;
  }

  private reportError(errorEvent: ErrorEvent) {
    // Implementation would send error to your error reporting service
    console.error('Error captured:', errorEvent);
  }

  getErrors(): ErrorEvent[] {
    return [...this.errors];
  }
}

export const errorTracker = ErrorTracker.getInstance();