// common
declare function __ref_collect(): void;

// tracing
declare function __ref_register(ref: usize): void;
declare function __ref_link(ref: usize, parentRef: usize): void;
declare function __ref_unlink(ref: usize, parentRef: usize): void;

// reference counting
declare function __ref_retain(ref: usize): void;
declare function __ref_release(ref: usize): void;
