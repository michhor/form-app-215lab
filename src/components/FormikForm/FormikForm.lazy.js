import React, { lazy, Suspense } from 'react';

const LazyFormikForm = lazy(() => import('./FormikForm'));

const FormikForm = props => (
  <Suspense fallback={null}>
    <LazyFormikForm {...props} />
  </Suspense>
);

export default FormikForm;
