// ErrorBoundary.jsx
import React, { Component } from 'react';

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    // Hata durumunda state'i günceller
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    // Hata loglarını kaydedebilirsin
    console.log(error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return <h1>Bir şeyler ters gitti!</h1>;
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
