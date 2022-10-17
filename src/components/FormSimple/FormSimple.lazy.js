import React, { lazy, Suspense } from 'react';

const LazyFormSimple = lazy(() => import('./FormSimple'));

const FormSimple = props => (
  <Suspense fallback={null}>
    <LazyFormSimple {...props} />
  </Suspense>
);

export default FormSimple;
