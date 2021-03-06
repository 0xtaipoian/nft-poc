/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
// @ts-nocheck
import { Result } from '@ethersproject/abi';
import { Event, EventFilter } from 'ethers';

export interface TypedEventFilter<_EventArgsArray, _EventArgsObject> extends EventFilter {}

export interface TypedEvent<EventArgs extends Result> extends Event {
  args: EventArgs;
}

export type TypedListener<EventArgsArray extends Array<any>, EventArgsObject> = (
  ...listenerArg: [...EventArgsArray, TypedEvent<EventArgsArray & EventArgsObject>]
) => void;
