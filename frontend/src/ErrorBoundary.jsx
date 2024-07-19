import React, { Component } from 'react';

class ErrorBoundary extends Component {
    constructor(props) {
        super(props);
        this.state = { hasError: false };
    }

    static getDerivedStateFromError(error) {
        // Update state to show fallback UI
        return { hasError: true };
    }

    componentDidCatch(error, errorInfo) {
        // You can also log the error to an error reporting service
        console.error('Error caught by ErrorBoundary:', error, errorInfo);
    }

    render() {
        if (this.state.hasError) {
            // Fallback UI when there's an error
            return (
                <div>
                    <h2>Something went wrong.</h2>
                    <p>Please refresh the page or try again later.</p>
                </div>
            );
        }

        // Render children normally if no error
        return this.props.children;
    }
}

export default ErrorBoundary;
