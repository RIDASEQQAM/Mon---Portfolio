import { lazy } from 'react';

export const LazyHero = lazy(() => import('./hero').then(module => ({ default: module.Hero })));
export const LazyAbout = lazy(() => import('./about').then(module => ({ default: module.About })));
export const LazyExperience = lazy(() => import('./experience').then(module => ({ default: module.Experience })));
export const LazyWorks = lazy(() => import('./works').then(module => ({ default: module.Works })));
export const LazyFeedbacks = lazy(() => import('./feedbacks').then(module => ({ default: module.Feedbacks })));
export const LazyContact = lazy(() => import('./contact').then(module => ({ default: module.Contact })));
