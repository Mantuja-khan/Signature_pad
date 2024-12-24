import React, { useState, useRef, useEffect } from 'react';
import { Download, Eraser } from 'lucide-react';
import ColorPanel from '../ColorPanel/ColorPanel';
import WidthPanel from '../WidthPanel/WidthPanel';
import Button from '../Button/Button';
import Dropdown from '../Dropdown/Dropdown';
import ColorPreview from '../ColorPreview/ColorPreview';
import WidthPreview from '../WidthPreview/WidthPreview';
import styles from './SignaturePad.module.css';
import { useTouchDrawing } from '../../hooks/useTouchDrawing';

const SignaturePad = () => {
  const canvasRef = useRef(null);
  const [currentColor, setCurrentColor] = useState('#000000');
  const [currentWidth, setCurrentWidth] = useState(2);
  const [showColorPanel, setShowColorPanel] = useState(false);
  const [showWidthPanel, setShowWidthPanel] = useState(false);
  
  const { initializeCanvas, clearSignature, downloadSignature } = useTouchDrawing(
    canvasRef,
    currentColor,
    currentWidth
  );

  useEffect(() => {
    initializeCanvas();
  }, [initializeCanvas]);

  const toggleColorPanel = () => {
    setShowColorPanel(!showColorPanel);
    setShowWidthPanel(false);
  };

  const toggleWidthPanel = () => {
    setShowWidthPanel(!showWidthPanel);
    setShowColorPanel(false);
  };

  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <h1 className={styles.title}>Digital Signature Pad</h1>
        
        <div className={styles.padContainer}>
          <div className={styles.controls}>
            <Dropdown
              label="Color"
              preview={<ColorPreview color={currentColor} />}
              isOpen={showColorPanel}
              onToggle={toggleColorPanel}
            >
              <ColorPanel 
                onColorChange={(color) => {
                  setCurrentColor(color);
                  setShowColorPanel(false);
                }}
                currentColor={currentColor}
              />
            </Dropdown>

            <Dropdown
              label="Line Width"
              preview={<WidthPreview width={currentWidth} />}
              isOpen={showWidthPanel}
              onToggle={toggleWidthPanel}
            >
              <WidthPanel 
                onWidthChange={(width) => {
                  setCurrentWidth(width);
                  setShowWidthPanel(false);
                }}
                currentWidth={currentWidth}
              />
            </Dropdown>
          </div>
          
          <div className={styles.canvasWrapper}>
            <canvas
              ref={canvasRef}
              className={styles.canvas}
            />
          </div>
          
          <div className={styles.buttonContainer}>
            <Button
              onClick={clearSignature}
              icon={Eraser}
              label="Clear"
              variant="danger"
              className={styles.actionButton}
            />
            <Button
              onClick={downloadSignature}
              icon={Download}
              label="Download"
              variant="primary"
              className={styles.actionButton}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
export default SignaturePad;