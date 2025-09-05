import { useEffect, useState } from "react";
import { Helper } from "../../Utils/Helper/Helper";
import "./CountdownNumberBox.scss";

interface PropsModel {
  value: string; // Changed to string to handle large numbers
  label: string;
  duration?: number; // total duration in seconds
  startOffset?: number; // how far below the value to start counting (as percentage)
}

const CounterdownNumberBox = ({ 
  value, 
  label, 
  duration = 2, 
  startOffset = 20 // Changed to percentage (20% below target)
}: PropsModel) => {
  const [displayValue, setDisplayValue] = useState<string>("0");

  // Helper function to parse string number safely
  const parseStringNumber = (str: string): number => {
    // Remove any commas and parse
    const cleaned = str.replace(/,/g, '');
    const parsed = parseFloat(cleaned);
    return isNaN(parsed) ? 0 : parsed;
  };
  

  useEffect(() => {
    const targetNumber = parseStringNumber(value);
    if (targetNumber === 0) {
      setDisplayValue("0");
      return;
    }

    const totalSteps = Math.floor(duration * 1000 / 50);
    const fakeSequence = Helper.generateFakeSequence(targetNumber, totalSteps, startOffset);
    
    let currentStep = 0;
    
    const timer = setInterval(() => {
      if (currentStep < fakeSequence.length) {
        const currentNumber = fakeSequence[currentStep];
        
        // For the last few steps, show the final formatted number
        if (currentStep >= fakeSequence.length - 3) {
          setDisplayValue(Helper.formatNumber(targetNumber));
        } else {
          // During counting, show formatted intermediate values
          setDisplayValue(Helper.formatNumber(currentNumber));
        }
        
        currentStep++;
      }
      
      if (currentStep >= fakeSequence.length) {
        clearInterval(timer);
        // Ensure final value is displayed
        setDisplayValue(Helper.formatNumber(targetNumber));
      }
    }, 50);

    return () => clearInterval(timer);
  }, [value, duration, startOffset]);

  return (
    <div className="counter-number-container">
      <div className="counter-number-label">{label}</div>
      <div className="counter-number">{displayValue}</div>
    </div>
  );
};

export default CounterdownNumberBox;