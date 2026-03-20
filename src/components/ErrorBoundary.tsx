import { Component, ErrorInfo, ReactNode } from "react";
import { Gamepad2 } from "lucide-react";

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
  error: Error | null;
}

export class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error("ErrorBoundary:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen aurora-bg flex flex-col items-center justify-center px-4">
          <Gamepad2 className="w-12 h-12 text-primary mb-4" />
          <h2 className="text-2xl font-bold text-white mb-2">Something went wrong</h2>
          <p className="text-muted mb-6 text-center max-w-md">
            {this.state.error?.message || "An unexpected error occurred."}
          </p>
          <button
            onClick={() => window.location.reload()}
            className="btn-primary"
          >
            Reload Page
          </button>
        </div>
      );
    }
    return this.props.children;
  }
}
