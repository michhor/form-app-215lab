import React, { lazy, Suspense } from 'react';

const LazyFormRadio = lazy(() => import('./FormRadio'));

const FormRadio = props => (
  <Suspense fallback={null}>
    <LazyFormRadio {...props} />
  </Suspense>
);

export default FormRadio;
