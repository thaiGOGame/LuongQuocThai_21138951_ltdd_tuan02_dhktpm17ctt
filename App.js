import React, { useState, useEffect } from 'react';

function solveQuadratic(a, b, c) {
    const discriminant = b * b - 4 * a * c;
    if (discriminant > 0) {
        const root1 = (-b + Math.sqrt(discriminant)) / (2 * a);
        const root2 = (-b - Math.sqrt(discriminant)) / (2 * a);
        return { root1, root2 };
    } else if (discriminant === 0) {
        const root = -b / (2 * a);
        return { root1: root, root2: root };
    } else {
        return { root1: 'No real roots', root2: 'No real roots' };
    }
}

function App() {
    const [a1, setA1] = useState('');
    const [b1, setB1] = useState('');
    const [c1, setC1] = useState('');
    const [a2, setA2] = useState('');
    const [b2, setB2] = useState('');
    const [c2, setC2] = useState('');
    const [result1, setResult1] = useState({});
    const [result2, setResult2] = useState({});

    const handleSubmit = (event) => {
        event.preventDefault();
        const roots1 = solveQuadratic(Number(a1), Number(b1), Number(c1));
        const roots2 = solveQuadratic(Number(a2), Number(b2), Number(c2));
        setResult1(roots1);
        setResult2(roots2);
    };

    // Add styles dynamically to the document head
    useEffect(() => {
        const styles = `
        .App {
          text-align: center;
          display: flex;
          justify-content: center;
          align-items: center;
          background: linear-gradient(to right, red, blue, yellow);
          min-height: 100vh; /* Ensure full height for better visual */
          overflow-y: auto; /* Allow vertical scrolling */
        }

        .App-header {
          background-color: #282c34;
          padding: 20px;
          border-radius: 10px;
          color: white;
          width: 90%;
          margin: 10px 10px;
          max-width: 600px; /* Adjusted for smaller screens */
        }

        .equation-inputs {
          display: flex;
          flex-direction: column;
          gap: 10px; /* Add space between input groups */
          margin-bottom: 20px;
        }

        .equation-inputs div {
          display: flex;
          flex-direction: column;
          gap: 10px; /* Add space between inputs */
        }

        input {
          margin: 5px;
          padding: 10px;
          border-radius: 5px;
          border: none;
          font-size: 16px; /* Adjusted font size for better mobile display */
        }

        button {
          padding: 10px 20px;
          border: none;
          border-radius: 5px;
          background-color: #61dafb;
          color: black;
          cursor: pointer;
          font-size: 16px; /* Adjusted font size for better mobile display */
        }

        button:hover {
          background-color: #4fa3b3;
        }

        .results {
          margin-top: 20px;
          text-align: left; /* Align results text to the left */
          display: flex;
          justify-content: space-around;
        }

        /* Responsive design */
        @media (max-width: 600px) {
          .equation-inputs {
            flex-direction: column;
          }

          .equation-inputs div {
            align-items: center;
          }

          input {
            width: 80%; /* Make inputs responsive */
          }

          button {
            width: 80%; /* Make button responsive */
          }
        }
        `;

        const styleSheet = document.createElement("style");
        styleSheet.type = "text/css";
        styleSheet.innerText = styles;
        document.head.appendChild(styleSheet);

        return () => {
            document.head.removeChild(styleSheet); // Clean up on unmount
        };
    }, []); // Run once on mount

    return (
        <div className="App">
            <header className="App-header">
                <h1>Quadratic Equation Solver</h1>
                <form onSubmit={handleSubmit}>
                    <div className="equation-inputs">
                        <div>
                            <h2>Equation 1: ax² + bx + c = 0</h2>
                            <input
                                type="number"
                                value={a1}
                                onChange={(e) => setA1(e.target.value)}
                                placeholder="a"
                            />
                            <input
                                type="number"
                                value={b1}
                                onChange={(e) => setB1(e.target.value)}
                                placeholder="b"
                            />
                            <input
                                type="number"
                                value={c1}
                                onChange={(e) => setC1(e.target.value)}
                                placeholder="c"
                            />
                        </div>
                        <div>
                            <h2>Equation 2: ax² + bx + c = 0</h2>
                            <input
                                type="number"
                                value={a2}
                                onChange={(e) => setA2(e.target.value)}
                                placeholder="a"
                            />
                            <input
                                type="number"
                                value={b2}
                                onChange={(e) => setB2(e.target.value)}
                                placeholder="b"
                            />
                            <input
                                type="number"
                                value={c2}
                                onChange={(e) => setC2(e.target.value)}
                                placeholder="c"
                            />
                        </div>
                    </div>
                    <button type="submit">Solve</button>
                </form>
                <h2>Results</h2>
                <div className="results">
                    <div>
                        <h3>Equation 1</h3>
                        <p>Root 1: {result1.root1}</p>
                        <p>Root 2: {result1.root2}</p>
                    </div>
                    <div>
                        <h3>Equation 2</h3>
                        <p>Root 1: {result2.root1}</p>
                        <p>Root 2: {result2.root2}</p>
                    </div>
                </div>
            </header>
        </div>
    );
}

export default App;
