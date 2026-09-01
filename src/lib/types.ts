/**
 * Omit для union-типов: применяет Omit к каждому члену union по отдельности.
 */
export type TDistributiveOmit<GValue, GKeys extends PropertyKey> = GValue extends unknown
    ? Omit<GValue, GKeys>
    : never;
