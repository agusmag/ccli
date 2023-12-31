import type { Arguments, CommandBuilder } from 'yargs';
import type { BaseOptions } from '../../shared';

export type Options = BaseOptions & {
  from: string | undefined;
  to: string | undefined;
  body: string | undefined;
};

export type Builder = CommandBuilder<Options, Options>;

export type Handler = (argv: Arguments<Options>) => PromiseLike<void>;
