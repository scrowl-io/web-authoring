import React, { useEffect, useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import '../_overlay.scss';
import { Backdrop, Drawer } from '.';
import { Settings } from '../../../../../models';

export const GlossaryForm = ({ isOpen, onClose, onSubmit, term, ...props }) => {
  const animationSettings = Settings.useAnimation();
  const isAnimated = !animationSettings.reducedAnimations;
  const isNewTerm = term === undefined || term.id === -1;
  const title = isNewTerm ? 'Add' : 'Edit';
  const [termWord, setTermWord] = useState(isNewTerm ? '' : term.word);
  const [termDefinition, setTermDefinition] = useState(
    isNewTerm ? '' : term.description
  );
  const [isDirty, setIsDirty] = useState(false);

  const handleClose = () => {
    onClose();
  };

  const handleSubmit = (ev: React.MouseEvent<Element, MouseEvent>) => {
    ev.preventDefault();

    const hasError = termWord.trim() === '' || termDefinition.trim() === '';

    if (hasError) {
      setIsDirty(true);
      return;
    }

    onSubmit({
      word: termWord,
      definition: termDefinition,
      id: isNewTerm ? -1 : term.id,
    });
  };

  useEffect(() => {
    if (termWord !== term.word) {
      setTermWord(term.word);
      setTermDefinition(term.definition);
    }
  }, [term, isOpen]);

  return (
    <>
      <Drawer isAnimated={isAnimated} isOpen={isOpen}>
        <div className="offcanvas-header">
          <h4 className="offcanvas-title mb-0">{title} Glossary Term</h4>
          <button type="button" className="btn-close" onClick={handleClose} />
        </div>

        <div className="offcanvas-body content-form">
          <form className="owl-offcanvas-form">
            <div className="mb-2">
              <label htmlFor="term-word" className="form-label">
                Term
              </label>
              <input
                id="term-word"
                autoFocus
                type="text"
                className={
                  'form-control ' +
                  (isDirty && termWord.trim() === '' ? 'error' : '')
                }
                placeholder="Enter Term"
                value={termWord}
                onChange={(e) => {
                  setTermWord(e.target.value);
                }}
              />
            </div>

            <div className="mb-2 owl-offcanvas-form__textarea">
              <label htmlFor="termAdd2" className="form-label">
                Definition
              </label>
              <textarea
                className={
                  'form-control ' +
                  (isDirty && termDefinition.trim() === '' ? 'error' : '')
                }
                placeholder="Define the term"
                style={{ resize: 'none' }}
                value={termDefinition}
                onChange={(e) => {
                  setTermDefinition(e.target.value);
                }}
              />
            </div>

            <footer className="d-flex justify-content-end my-3">
              <button
                type="button"
                className="btn btn-link"
                onClick={handleClose}
              >
                Cancel
              </button>
              <button
                type="submit"
                className="btn btn-success"
                onClick={handleSubmit}
              >
                Save
              </button>
            </footer>
          </form>
        </div>
      </Drawer>
      {isOpen ? (
        <Backdrop
          className="glossary-overlay-backdrop"
          isAnimated={isAnimated}
          onClick={onClose}
          {...props}
        />
      ) : (
        <></>
      )}
    </>
  );
};

export const GlossaryOverlay = (props) => {
  return (
    <AnimatePresence>
      <GlossaryForm {...props} />
    </AnimatePresence>
  );
};

export default {
  GlossaryOverlay,
  GlossaryForm,
};
