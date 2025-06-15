import { defineBackend } from '@aws-amplify/backend';
import { auth } from './auth/resource.js';
import { data } from './data/resource.js';
import { sentenceCompletion } from './functions/sentenceCompletion/resource.js';

defineBackend({
  auth,
  data,
  sentenceCompletion
});
