import { Component } from "react";

import type { ReactNode } from "react";
import type React from "react";

interface ErrorBoundaryProps {
	children: ReactNode;
}

interface ErrorBoundaryState {
	hasError: boolean;
	error: Error | null;
}

export class ErrorBoundary extends Component<
	ErrorBoundaryProps,
	ErrorBoundaryState
> {
	public constructor(props: ErrorBoundaryProps) {
		super(props);
		this.state = { hasError: false, error: null };
	}

	public static getDerivedStateFromError(error: Error) {
		return { hasError: true, error };
	}

	public componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
		console.error("ErrorBoundary caught an error", error, errorInfo);
	}

	public render() {
		if (this.state.hasError) {
			return (
				<div>
					<h1>Something went wrong.</h1>
					<p>{this.state.error?.message}</p>
				</div>
			);
		}

		return this.props.children;
	}
}

export default ErrorBoundary;
