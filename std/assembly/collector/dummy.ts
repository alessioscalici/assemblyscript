// A dummy GC for looking at generated GC code without actually implementing it.

// @ts-ignore: decorator
@inline
const TRACE = false;

// @ts-ignore: decorator
@global @unsafe
function __ref_register(ref: usize): void {
  if (TRACE) trace("dummy.register", 1, ref);
}

// @ts-ignore: decorator
@global @unsafe
function __ref_collect(): void {
  if (TRACE) trace("dummy.collect");
}

// Tracing

// @ts-ignore: decorator
@global @unsafe
function __ref_link(ref: usize, parentRef: usize): void {
  if (TRACE) trace("dummy.link", 2, ref, parentRef);
}

// @ts-ignore: decorator
@global @unsafe
function __ref_unlink(ref: usize, parentRef: usize): void {
  if (TRACE) trace("dummy.unlink", 2, ref, parentRef);
}

// Reference counting

// // @ts-ignore: decorator
// @global @unsafe
// function __ref_retain(ref: usize): void {
//   if (TRACE) trace("dummy.retain", 1, ref);
// }

// // @ts-ignore: decorator
// @global @unsafe
// function __ref_release(ref: usize): void {
//   if (TRACE) trace("dummy.release", 1, ref);
// }
