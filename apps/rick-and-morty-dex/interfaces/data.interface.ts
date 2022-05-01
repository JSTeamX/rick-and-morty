interface ApoloData<E> {
  results: Array<E>;
}

export interface Results<U> {
  [key: string]: ApoloData<U>;
}
