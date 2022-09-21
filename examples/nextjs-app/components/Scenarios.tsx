import {
  HttpBadGateway,
  HttpForbidden,
  serializeHttpException,
  unserializeHttpException,
} from '@belgattitude/http-exception';
import type { FC } from 'react';
import superjson from 'superjson';

const SimpleSerialize: FC = () => {
  const cause = new HttpForbidden();
  const err = new HttpBadGateway({
    url: 'http://localhost:3000',
    cause,
  });
  const converted = unserializeHttpException(serializeHttpException(err));
  return (
    <div>
      <div>SimpleSerialize</div>
      <div>{JSON.stringify(converted)}</div>
    </div>
  );
};

export const SuperJsonSerialize: FC = () => {
  const cause = new HttpForbidden();
  const err = new HttpBadGateway({
    url: 'http://localhost:3000',
    cause,
  });
  const stringified = superjson.stringify(err);
  const converted = superjson.parse(stringified);

  return (
    <div className={'rounded-xl p-8 border-2'}>
      <div>Superjson</div>
      <div>{JSON.stringify(converted)}</div>
    </div>
  );
};

export const Scenarios = () => {
  return (
    <div>
      <SimpleSerialize />
      <SuperJsonSerialize />
    </div>
  );
};
