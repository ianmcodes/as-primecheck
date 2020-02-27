import { abort } from 'env';
import { now } from 'Date';
import { setTempRet0 } from 'env';
import { getTempRet0 } from 'env';


  var scratchBuffer = new ArrayBuffer(8);
  var i32ScratchView = new Int32Array(scratchBuffer);
  var f32ScratchView = new Float32Array(scratchBuffer);
  var f64ScratchView = new Float64Array(scratchBuffer);
  
  function wasm2js_scratch_store_i32(index, value) {
    i32ScratchView[index] = value;
  }
      
  function wasm2js_scratch_load_f64() {
    return f64ScratchView[0];
  }
      
  function legalimport$wasm2js_scratch_load_i64() {
    if (typeof setTempRet0 === 'function') setTempRet0(i32ScratchView[1]);
    return i32ScratchView[0];
  }
      
  function legalimport$wasm2js_scratch_store_i64(low, high) {
    i32ScratchView[0] = low;
    i32ScratchView[1] = high;
  }
      
function asmFunc(global, env, buffer) {
 var HEAP8 = new global.Int8Array(buffer);
 var HEAP16 = new global.Int16Array(buffer);
 var HEAP32 = new global.Int32Array(buffer);
 var HEAPU8 = new global.Uint8Array(buffer);
 var HEAPU16 = new global.Uint16Array(buffer);
 var HEAPU32 = new global.Uint32Array(buffer);
 var HEAPF32 = new global.Float32Array(buffer);
 var HEAPF64 = new global.Float64Array(buffer);
 var Math_imul = global.Math.imul;
 var Math_fround = global.Math.fround;
 var Math_abs = global.Math.abs;
 var Math_clz32 = global.Math.clz32;
 var Math_min = global.Math.min;
 var Math_max = global.Math.max;
 var Math_floor = global.Math.floor;
 var Math_ceil = global.Math.ceil;
 var Math_sqrt = global.Math.sqrt;
 var abort = env.abort;
 var nan = global.NaN;
 var infinity = global.Infinity;
 var $lib_builtins_abort = env.abort;
 var $lib_bindings_Date_now = env.now;
 var setTempRet0 = env.setTempRet0;
 var getTempRet0 = env.getTempRet0;
 var $lib_rt_tlsf_ROOT = 0;
 var $lib_rt_tlsf_collectLock = 0;
 var $lib_math_random_seeded = 0;
 var $lib_math_random_state0_64 = 0;
 var $lib_math_random_state1_64 = 0;
 var $lib_math_random_state0_32 = 0;
 var $lib_math_random_state1_32 = 0;
 var $lib_rt___rtti_base = 288;
 var $lib_math_random_state0_64$hi = 0;
 var $lib_math_random_state1_64$hi = 0;
 var i64toi32_i32$HIGH_BITS = 0;
 function $lib_rt_tlsf_removeBlock($0, $1) {
  var $2 = 0, $3 = 0, $4 = 0, $5 = 0;
  $2 = HEAP32[$1 >> 2];
  if (!($2 & 1 | 0)) {
   $lib_builtins_abort(0 | 0, 32 | 0, 277 | 0, 13 | 0);
   abort();
  }
  $2 = $2 & -4 | 0;
  if ($2 >>> 0 >= 16 >>> 0) {
   $3 = $2 >>> 0 < 1073741808 >>> 0
  } else {
   $3 = 0
  }
  if (!$3) {
   $lib_builtins_abort(0 | 0, 32 | 0, 279 | 0, 13 | 0);
   abort();
  }
  if ($2 >>> 0 < 256 >>> 0) {
   $4 = $2 >>> 4 | 0;
   $2 = 0;
  } else {
   $3 = $2;
   $2 = 31 - Math_clz32($2) | 0;
   $4 = ($3 >>> ($2 - 4 | 0) | 0) ^ 16 | 0;
   $2 = $2 - 7 | 0;
  }
  if ($2 >>> 0 < 23 >>> 0) {
   $3 = $4 >>> 0 < 16 >>> 0
  } else {
   $3 = 0
  }
  if (!$3) {
   $lib_builtins_abort(0 | 0, 32 | 0, 292 | 0, 13 | 0);
   abort();
  }
  $3 = HEAP32[($1 + 20 | 0) >> 2];
  $5 = HEAP32[($1 + 16 | 0) >> 2];
  if ($5) {
   HEAP32[($5 + 20 | 0) >> 2] = $3
  }
  if ($3) {
   HEAP32[($3 + 16 | 0) >> 2] = $5
  }
  if ((HEAP32[((((($2 << 4 | 0) + $4 | 0) << 2 | 0) + $0 | 0) + 96 | 0) >> 2] | 0) == ($1 | 0)) {
   HEAP32[((((($2 << 4 | 0) + $4 | 0) << 2 | 0) + $0 | 0) + 96 | 0) >> 2] = $3;
   if (!$3) {
    $3 = ($2 << 2 | 0) + $0 | 0;
    $1 = HEAP32[($3 + 4 | 0) >> 2] & ((1 << $4 | 0) ^ -1 | 0) | 0;
    HEAP32[($3 + 4 | 0) >> 2] = $1;
    if (!$1) {
     HEAP32[$0 >> 2] = HEAP32[$0 >> 2] & ((1 << $2 | 0) ^ -1 | 0) | 0
    }
   }
  }
 }
 
 function $lib_rt_tlsf_insertBlock($0, $1) {
  var $2 = 0, $3 = 0, $4 = 0, $5 = 0, $6 = 0, $7 = 0;
  if (!$1) {
   $lib_builtins_abort(0 | 0, 32 | 0, 205 | 0, 13 | 0);
   abort();
  }
  $3 = HEAP32[$1 >> 2];
  if (!($3 & 1 | 0)) {
   $lib_builtins_abort(0 | 0, 32 | 0, 207 | 0, 13 | 0);
   abort();
  }
  $4 = ($1 + 16 | 0) + (HEAP32[$1 >> 2] & -4 | 0) | 0;
  $5 = HEAP32[$4 >> 2];
  if ($5 & 1 | 0) {
   $2 = (($3 & -4 | 0) + 16 | 0) + ($5 & -4 | 0) | 0;
   if ($2 >>> 0 < 1073741808 >>> 0) {
    $lib_rt_tlsf_removeBlock($0, $4);
    $3 = $2 | ($3 & 3 | 0) | 0;
    HEAP32[$1 >> 2] = $3;
    $4 = ($1 + 16 | 0) + (HEAP32[$1 >> 2] & -4 | 0) | 0;
    $5 = HEAP32[$4 >> 2];
   }
  }
  if ($3 & 2 | 0) {
   $2 = HEAP32[($1 - 4 | 0) >> 2];
   $6 = HEAP32[$2 >> 2];
   if (!($6 & 1 | 0)) {
    $lib_builtins_abort(0 | 0, 32 | 0, 228 | 0, 15 | 0);
    abort();
   }
   $7 = (($6 & -4 | 0) + 16 | 0) + ($3 & -4 | 0) | 0;
   if ($7 >>> 0 < 1073741808 >>> 0) {
    $lib_rt_tlsf_removeBlock($0, $2);
    $3 = $6 & 3 | 0 | $7 | 0;
    HEAP32[$2 >> 2] = $3;
    $1 = $2;
   }
  }
  HEAP32[$4 >> 2] = $5 | 2 | 0;
  $2 = $3 & -4 | 0;
  if ($2 >>> 0 >= 16 >>> 0) {
   $3 = $2 >>> 0 < 1073741808 >>> 0
  } else {
   $3 = 0
  }
  if (!$3) {
   $lib_builtins_abort(0 | 0, 32 | 0, 243 | 0, 13 | 0);
   abort();
  }
  if (($2 + ($1 + 16 | 0) | 0 | 0) != ($4 | 0)) {
   $lib_builtins_abort(0 | 0, 32 | 0, 244 | 0, 13 | 0);
   abort();
  }
  HEAP32[($4 - 4 | 0) >> 2] = $1;
  if ($2 >>> 0 < 256 >>> 0) {
   $4 = $2 >>> 4 | 0;
   $2 = 0;
  } else {
   $3 = $2;
   $2 = 31 - Math_clz32($2) | 0;
   $4 = ($3 >>> ($2 - 4 | 0) | 0) ^ 16 | 0;
   $2 = $2 - 7 | 0;
  }
  if ($2 >>> 0 < 23 >>> 0) {
   $3 = $4 >>> 0 < 16 >>> 0
  } else {
   $3 = 0
  }
  if (!$3) {
   $lib_builtins_abort(0 | 0, 32 | 0, 260 | 0, 13 | 0);
   abort();
  }
  $3 = HEAP32[((((($2 << 4 | 0) + $4 | 0) << 2 | 0) + $0 | 0) + 96 | 0) >> 2];
  HEAP32[($1 + 16 | 0) >> 2] = 0;
  HEAP32[($1 + 20 | 0) >> 2] = $3;
  if ($3) {
   HEAP32[($3 + 16 | 0) >> 2] = $1
  }
  HEAP32[((((($2 << 4 | 0) + $4 | 0) << 2 | 0) + $0 | 0) + 96 | 0) >> 2] = $1;
  HEAP32[$0 >> 2] = HEAP32[$0 >> 2] | (1 << $2 | 0) | 0;
  $0 = ($2 << 2 | 0) + $0 | 0;
  $1 = HEAP32[($0 + 4 | 0) >> 2] | (1 << $4 | 0) | 0;
  HEAP32[($0 + 4 | 0) >> 2] = $1;
 }
 
 function $lib_rt_tlsf_addMemory($0, $1, $2) {
  var $3 = 0, $4 = 0;
  if (!(($1 >>> 0 <= $2 >>> 0 ? !($1 & 15 | 0) : 0) ? !($2 & 15 | 0) : 0)) {
   $lib_builtins_abort(0 | 0, 32 | 0, 386 | 0, 4 | 0);
   abort();
  }
  $3 = HEAP32[($0 + 1568 | 0) >> 2];
  if ($3) {
   if ($1 >>> 0 < ($3 + 16 | 0) >>> 0) {
    $lib_builtins_abort(0 | 0, 32 | 0, 396 | 0, 15 | 0);
    abort();
   }
   if (($1 - 16 | 0 | 0) == ($3 | 0)) {
    $4 = HEAP32[$3 >> 2];
    $1 = $1 - 16 | 0;
   }
  } else {
   if ($1 >>> 0 < ($0 + 1572 | 0) >>> 0) {
    $lib_builtins_abort(0 | 0, 32 | 0, 408 | 0, 4 | 0);
    abort();
   }
  }
  $2 = $2 - $1 | 0;
  if ($2 >>> 0 < 48 >>> 0) {
   return
  }
  HEAP32[$1 >> 2] = $4 & 2 | 0 | ($2 - 32 | 0 | 1 | 0) | 0;
  HEAP32[($1 + 16 | 0) >> 2] = 0;
  HEAP32[($1 + 20 | 0) >> 2] = 0;
  $2 = ($1 + $2 | 0) - 16 | 0;
  HEAP32[$2 >> 2] = 2;
  HEAP32[($0 + 1568 | 0) >> 2] = $2;
  $lib_rt_tlsf_insertBlock($0, $1);
 }
 
 function $lib_rt_tlsf_maybeInitialize() {
  var $0 = 0, $1 = 0, $2 = 0;
  $2 = $lib_rt_tlsf_ROOT;
  if (!$2) {
   $0 = __wasm_memory_size();
   if ((1 | 0) > ($0 | 0)) {
    $0 = (__wasm_memory_grow(1 - $0 | 0 | 0) | 0) < (0 | 0)
   } else {
    $0 = 0
   }
   if ($0) {
    abort()
   }
   $2 = 320;
   HEAP32[320 >> 2] = 0;
   HEAP32[1888 >> 2] = 0;
   for_loop_0 : while (1) {
    if ($1 >>> 0 < 23 >>> 0) {
     HEAP32[((($1 << 2 | 0) + 320 | 0) + 4 | 0) >> 2] = 0;
     $0 = 0;
     for_loop_1 : while (1) {
      if ($0 >>> 0 < 16 >>> 0) {
       HEAP32[((((($1 << 4 | 0) + $0 | 0) << 2 | 0) + 320 | 0) + 96 | 0) >> 2] = 0;
       $0 = $0 + 1 | 0;
       continue for_loop_1;
      }
      break for_loop_1;
     };
     $1 = $1 + 1 | 0;
     continue for_loop_0;
    }
    break for_loop_0;
   };
   $lib_rt_tlsf_addMemory(320, 1904, __wasm_memory_size() << 16 | 0);
   $lib_rt_tlsf_ROOT = 320;
  }
  return $2;
 }
 
 function $lib_rt_tlsf_prepareSize($0) {
  if ($0 >>> 0 >= 1073741808 >>> 0) {
   $lib_builtins_abort(80 | 0, 32 | 0, 457 | 0, 29 | 0);
   abort();
  }
  $0 = ($0 + 15 | 0) & -16 | 0;
  return $0 >>> 0 > 16 >>> 0 ? $0 : 16;
 }
 
 function $lib_rt_tlsf_searchBlock($0, $1) {
  var $2 = 0, $3 = 0;
  if ($1 >>> 0 < 256 >>> 0) {
   $1 = $1 >>> 4 | 0
  } else {
   $3 = $1 >>> 0 < 536870904 >>> 0 ? ((1 << (27 - Math_clz32($1) | 0) | 0) + $1 | 0) - 1 | 0 : $1;
   $2 = 31 - Math_clz32($3) | 0;
   $1 = $2 - 4 | 0;
   $2 = $2 - 7 | 0;
   $1 = ($3 >>> $1 | 0) ^ 16 | 0;
  }
  if (!($2 >>> 0 < 23 >>> 0 ? $1 >>> 0 < 16 >>> 0 : 0)) {
   $lib_builtins_abort(0 | 0, 32 | 0, 338 | 0, 13 | 0);
   abort();
  }
  $1 = HEAP32[((($2 << 2 | 0) + $0 | 0) + 4 | 0) >> 2] & (-1 << $1 | 0) | 0;
  if ($1) {
   $0 = HEAP32[((((__wasm_ctz_i32($1) + ($2 << 4 | 0) | 0) << 2 | 0) + $0 | 0) + 96 | 0) >> 2]
  } else {
   $1 = HEAP32[$0 >> 2] & (-1 << ($2 + 1 | 0) | 0) | 0;
   if ($1) {
    $2 = __wasm_ctz_i32($1);
    $1 = HEAP32[((($2 << 2 | 0) + $0 | 0) + 4 | 0) >> 2];
    if (!$1) {
     $lib_builtins_abort(0 | 0, 32 | 0, 351 | 0, 17 | 0);
     abort();
    }
    $0 = HEAP32[((((__wasm_ctz_i32($1) + ($2 << 4 | 0) | 0) << 2 | 0) + $0 | 0) + 96 | 0) >> 2];
   } else {
    $0 = 0
   }
  }
  return $0;
 }
 
 function $lib_rt_tlsf_growMemory($0, $1) {
  var $2 = 0, $3 = 0;
  $2 = __wasm_memory_size();
  $3 = $2 << 16 | 0;
  $1 = ((((16 << ((HEAP32[($0 + 1568 | 0) >> 2] | 0) != ($3 - 16 | 0 | 0)) | 0) + ($1 >>> 0 < 536870904 >>> 0 ? ((1 << (27 - Math_clz32($1) | 0) | 0) - 1 | 0) + $1 | 0 : $1) | 0) + 65535 | 0) & -65536 | 0) >>> 16 | 0;
  $3 = ($2 | 0) > ($1 | 0);
  if ((__wasm_memory_grow(($3 ? $2 : $1) | 0) | 0) < (0 | 0)) {
   if ((__wasm_memory_grow($1 | 0) | 0) < (0 | 0)) {
    abort()
   }
  }
  $lib_rt_tlsf_addMemory($0, $2 << 16 | 0, __wasm_memory_size() << 16 | 0);
 }
 
 function $lib_rt_tlsf_prepareBlock($0, $1, $2) {
  var $3 = 0, $4 = 0;
  $3 = HEAP32[$1 >> 2];
  if ($2 & 15 | 0) {
   $lib_builtins_abort(0 | 0, 32 | 0, 365 | 0, 13 | 0);
   abort();
  }
  $4 = ($3 & -4 | 0) - $2 | 0;
  if ($4 >>> 0 >= 32 >>> 0) {
   HEAP32[$1 >> 2] = $3 & 2 | 0 | $2 | 0;
   $1 = ($1 + 16 | 0) + $2 | 0;
   HEAP32[$1 >> 2] = $4 - 16 | 0 | 1 | 0;
   $lib_rt_tlsf_insertBlock($0, $1);
  } else {
   HEAP32[$1 >> 2] = $3 & -2 | 0;
   $0 = $1 + 16 | 0;
   $2 = HEAP32[($0 + (HEAP32[$1 >> 2] & -4 | 0) | 0) >> 2];
   HEAP32[($0 + (HEAP32[$1 >> 2] & -4 | 0) | 0) >> 2] = $2 & -3 | 0;
  }
 }
 
 function $lib_rt_tlsf_allocateBlock($0, $1, $2) {
  var $3 = 0, $4 = 0;
  if ($lib_rt_tlsf_collectLock) {
   $lib_builtins_abort(0 | 0, 32 | 0, 490 | 0, 13 | 0);
   abort();
  }
  $4 = $lib_rt_tlsf_prepareSize($1);
  $3 = $lib_rt_tlsf_searchBlock($0, $4);
  if (!$3) {
   $lib_rt_tlsf_collectLock = 1;
   $lib_rt_tlsf_collectLock = 0;
   $3 = $lib_rt_tlsf_searchBlock($0, $4);
   if (!$3) {
    $lib_rt_tlsf_growMemory($0, $4);
    $3 = $lib_rt_tlsf_searchBlock($0, $4);
    if (!$3) {
     $lib_builtins_abort(0 | 0, 32 | 0, 502 | 0, 19 | 0);
     abort();
    }
   }
  }
  if ((HEAP32[$3 >> 2] & -4 | 0) >>> 0 < $4 >>> 0) {
   $lib_builtins_abort(0 | 0, 32 | 0, 510 | 0, 13 | 0);
   abort();
  }
  HEAP32[($3 + 4 | 0) >> 2] = 0;
  HEAP32[($3 + 8 | 0) >> 2] = $2;
  HEAP32[($3 + 12 | 0) >> 2] = $1;
  $lib_rt_tlsf_removeBlock($0, $3);
  $lib_rt_tlsf_prepareBlock($0, $3, $4);
  return $3;
 }
 
 function $lib_rt_tlsf___alloc($0, $1) {
  $0 = $0 | 0;
  $1 = $1 | 0;
  return $lib_rt_tlsf_allocateBlock($lib_rt_tlsf_maybeInitialize(), $0, $1) + 16 | 0 | 0;
 }
 
 function $lib_rt_pure_increment($0) {
  var $1 = 0;
  $1 = HEAP32[($0 + 4 | 0) >> 2];
  if (($1 & -268435456 | 0 | 0) != (($1 + 1 | 0) & -268435456 | 0 | 0)) {
   $lib_builtins_abort(0 | 0, 144 | 0, 109 | 0, 2 | 0);
   abort();
  }
  HEAP32[($0 + 4 | 0) >> 2] = $1 + 1 | 0;
  if (HEAP32[$0 >> 2] & 1 | 0) {
   $lib_builtins_abort(0 | 0, 144 | 0, 112 | 0, 13 | 0);
   abort();
  }
 }
 
 function $lib_rt_pure___retain($0) {
  $0 = $0 | 0;
  if ($0 >>> 0 > 316 >>> 0) {
   $lib_rt_pure_increment($0 - 16 | 0)
  }
  return $0 | 0;
 }
 
 function $lib_rt_pure___release($0) {
  $0 = $0 | 0;
  if ($0 >>> 0 > 316 >>> 0) {
   $lib_rt_pure_decrement($0 - 16 | 0)
  }
 }
 
 function assembly_index_add($0, $1) {
  $0 = $0 | 0;
  $1 = $1 | 0;
  return $0 + $1 | 0 | 0;
 }
 
 function assembly_index_modpow($0, $1, $2, $3, $4, $5) {
  $0 = $0 | 0;
  $1 = $1 | 0;
  $2 = $2 | 0;
  $3 = $3 | 0;
  $4 = $4 | 0;
  $5 = $5 | 0;
  var $6 = 0, $7 = 0;
  if (!$5 & ($4 | 0) == (1 | 0) | 0) {
   i64toi32_i32$HIGH_BITS = 0;
   return 0 | 0;
  }
  $6 = 1;
  $0 = __wasm_i64_urem($0, $1, $4, $5);
  $1 = i64toi32_i32$HIGH_BITS;
  while_continue_0 : while (1) {
   if (!$3 & $2 >>> 0 > 0 >>> 0 | 0 | $3 >>> 0 > 0 >>> 0 | 0) {
    if ((__wasm_i64_urem($2, $3, 2, 0) | 0) == (1 | 0) & !i64toi32_i32$HIGH_BITS | 0) {
     $6 = __wasm_i64_urem(__wasm_i64_mul($0, $1, $6, $7), i64toi32_i32$HIGH_BITS, $4, $5);
     $7 = i64toi32_i32$HIGH_BITS;
    }
    $2 = ($3 & 1 | 0) << 31 | 0 | ($2 >>> 1 | 0) | 0;
    $3 = $3 >>> 1 | 0;
    $0 = __wasm_i64_urem(__wasm_i64_mul($0, $1, $0, $1), i64toi32_i32$HIGH_BITS, $4, $5);
    $1 = i64toi32_i32$HIGH_BITS;
    continue while_continue_0;
   }
   break while_continue_0;
  };
  i64toi32_i32$HIGH_BITS = $7;
  return $6 | 0;
 }
 
 function $lib_math_murmurHash3($0, $1) {
  var $2 = 0;
  $2 = $1;
  $1 = __wasm_i64_mul(($2 >>> 1 | 0) ^ $0 | 0, $2, -313160499, -11423785);
  $2 = i64toi32_i32$HIGH_BITS;
  $1 = __wasm_i64_mul(($2 >>> 1 | 0) ^ $1 | 0, $2, 444984403, -993084930);
  $2 = i64toi32_i32$HIGH_BITS;
  i64toi32_i32$HIGH_BITS = $2;
  return ($2 >>> 1 | 0) ^ $1 | 0;
 }
 
 function $lib_math_splitMix32($0) {
  $0 = $0 + 1831565813 | 0;
  $0 = Math_imul(($0 >>> 15 | 0) ^ $0 | 0, $0 | 1 | 0);
  $0 = $0 ^ ($0 + Math_imul($0 | 61 | 0, $0 ^ ($0 >>> 7 | 0) | 0) | 0) | 0;
  return ($0 >>> 14 | 0) ^ $0 | 0;
 }
 
 function $lib_math_NativeMath_seedRandom($0, $1) {
  $lib_math_random_seeded = 1;
  $lib_math_random_state0_64 = $lib_math_murmurHash3($0, $1);
  $lib_math_random_state0_64$hi = i64toi32_i32$HIGH_BITS;
  $lib_math_random_state1_64 = $lib_math_murmurHash3($lib_math_random_state0_64 ^ -1 | 0, $lib_math_random_state0_64$hi ^ -1 | 0);
  $lib_math_random_state1_64$hi = i64toi32_i32$HIGH_BITS;
  $lib_math_random_state0_32 = $lib_math_splitMix32($0);
  $lib_math_random_state1_32 = $lib_math_splitMix32($lib_math_random_state0_32);
  if (!((($lib_math_random_state0_64 | $lib_math_random_state0_64$hi | 0 ? $lib_math_random_state1_64 | $lib_math_random_state1_64$hi | 0 : 0) ? $lib_math_random_state0_32 : 0) ? ($lib_math_random_state1_32 | 0) != (0 | 0) : 0)) {
   $lib_builtins_abort(0 | 0, 192 | 0, 1406 | 0, 4 | 0);
   abort();
  }
 }
 
 function $lib_math_NativeMath_random() {
  var $0 = 0, $1 = 0, $2 = 0, $3 = 0, $4 = 0, $5 = 0;
  if (!$lib_math_random_seeded) {
   $lib_builtins_abort(240 | 0, 192 | 0, 1413 | 0, 24 | 0);
   abort();
  }
  $0 = $lib_math_random_state0_64;
  $1 = $lib_math_random_state0_64$hi;
  $3 = $lib_math_random_state1_64;
  $lib_math_random_state0_64 = $3;
  $2 = $lib_math_random_state1_64$hi;
  $lib_math_random_state0_64$hi = $2;
  $4 = $1;
  $5 = $1 << 23 | 0 | ($0 >>> 9 | 0) | 0;
  $1 = ($0 << 23 | 0) ^ $0 | 0;
  $0 = $4 ^ $5 | 0;
  $1 = ((($0 & 131071 | 0) << 15 | 0 | ($1 >>> 17 | 0) | 0) ^ $1 | 0) ^ $3 | 0;
  $0 = (($0 >>> 17 | 0) ^ $0 | 0) ^ $2 | 0;
  $lib_math_random_state1_64 = (($2 & 67108863 | 0) << 6 | 0 | ($3 >>> 26 | 0) | 0) ^ $1 | 0;
  $lib_math_random_state1_64$hi = ($2 >>> 26 | 0) ^ $0 | 0;
  $1 = $2 >>> 12 | 0;
  wasm2js_scratch_store_i32(0 | 0, ($2 & 4095 | 0) << 20 | 0 | ($3 >>> 12 | 0) | 0 | 0);
  wasm2js_scratch_store_i32(1 | 0, $1 | 1072693248 | 0 | 0);
  return +wasm2js_scratch_load_f64() - 1.0;
 }
 
 function assembly_index_rng_gen_range($0, $1, $2, $3) {
  $0 = $0 | 0;
  $1 = $1 | 0;
  $2 = $2 | 0;
  $3 = $3 | 0;
  var $4 = 0.0, $5 = 0;
  $4 = +$lib_bindings_Date_now();
  if (Math_abs($4) >= 1.0) {
   $5 = $4 > 0.0 ? ~~Math_min(Math_floor($4 / 4294967296.0), 4294967295.0) >>> 0 : ~~Math_ceil(($4 - +(~~$4 >>> 0 >>> 0)) / 4294967296.0) >>> 0
  } else {
   $5 = 0
  }
  $lib_math_NativeMath_seedRandom(~~$4 >>> 0, $5);
  $4 = Math_floor($lib_math_NativeMath_random() * (+(($2 - $0 | 0) >>> 0) + 4294967296.0 * +(($3 - (($2 >>> 0 < $0 >>> 0) + $1 | 0) | 0) >>> 0)));
  if (Math_abs($4) >= 1.0) {
   $2 = $4 > 0.0 ? ~~Math_min(Math_floor($4 / 4294967296.0), 4294967295.0) >>> 0 : ~~Math_ceil(($4 - +(~~$4 >>> 0 >>> 0)) / 4294967296.0) >>> 0
  } else {
   $2 = 0
  }
  $2 = $2 + $1 | 0;
  $1 = ~~$4 >>> 0;
  $0 = $1 + $0 | 0;
  if ($0 >>> 0 < $1 >>> 0) {
   $2 = $2 + 1 | 0
  }
  i64toi32_i32$HIGH_BITS = $2;
  return $0 | 0;
 }
 
 function assembly_index_primeCheck($0, $1, $2) {
  $0 = $0 | 0;
  $1 = $1 | 0;
  $2 = $2 | 0;
  var $3 = 0;
  $3 = !$1;
  if (($0 | 0) == (1 | 0) & $3 | 0 ? 1 : $3 & ($0 | 0) == (3 | 0) | 0) {
   return 1 | 0
  } else {
   if (!(__wasm_i64_urem($0, $1, 2, 0) | i64toi32_i32$HIGH_BITS | 0)) {
    return 0 | 0
   }
  }
  while_continue_0 : while (1) {
   if (($2 | 0) > (0 | 0)) {
    if ((assembly_index_modpow(assembly_index_rng_gen_range(2, 0, $0 - 2 | 0, $1 - ($0 >>> 0 < 2 >>> 0) | 0), i64toi32_i32$HIGH_BITS, $0 - 1 | 0, $1 - ($0 >>> 0 < 1 >>> 0) | 0, $0, $1) | 0) != (1 | 0) | i64toi32_i32$HIGH_BITS | 0) {
     return 0 | 0
    }
    $2 = $2 - 1 | 0;
    continue while_continue_0;
   }
   break while_continue_0;
  };
  return 1 | 0;
 }
 
 function $lib_rt_pure___collect() {
  
 }
 
 function $lib_rt_pure_decrement($0) {
  var $1 = 0, $2 = 0;
  $1 = HEAP32[($0 + 4 | 0) >> 2];
  $2 = $1 & 268435455 | 0;
  if (HEAP32[$0 >> 2] & 1 | 0) {
   $lib_builtins_abort(0 | 0, 144 | 0, 122 | 0, 13 | 0);
   abort();
  }
  if (($2 | 0) == (1 | 0)) {
   $lib_rt___visit_members($0 + 16 | 0);
   if ($1 & -2147483648 | 0) {
    $lib_builtins_abort(0 | 0, 144 | 0, 126 | 0, 17 | 0);
    abort();
   }
   HEAP32[$0 >> 2] = HEAP32[$0 >> 2] | 1 | 0;
   $lib_rt_tlsf_insertBlock($lib_rt_tlsf_ROOT, $0);
  } else {
   if ($2 >>> 0 <= 0 >>> 0) {
    $lib_builtins_abort(0 | 0, 144 | 0, 136 | 0, 15 | 0);
    abort();
   }
   HEAP32[($0 + 4 | 0) >> 2] = $2 - 1 | 0 | ($1 & -268435456 | 0) | 0;
  }
 }
 
 function $lib_rt___visit_members($0) {
  switch$1$default : {
   switch (HEAP32[($0 - 8 | 0) >> 2] | 0) {
   case 0:
   case 1:
    return;
   case 2:
    $0 = HEAP32[$0 >> 2];
    if ($0) {
     if ($0 >>> 0 >= 316 >>> 0) {
      $lib_rt_pure_decrement($0 - 16 | 0)
     }
    }
    return;
   default:
    break switch$1$default;
   };
  }
  abort();
 }
 
 function legalstub$assembly_index_modpow($0, $1, $2, $3, $4, $5) {
  $0 = assembly_index_modpow($0, $1, $2, $3, $4, $5);
  setTempRet0(i64toi32_i32$HIGH_BITS | 0);
  return $0;
 }
 
 function legalstub$assembly_index_rng_gen_range($0, $1, $2, $3) {
  $0 = assembly_index_rng_gen_range($0, $1, $2, $3);
  setTempRet0(i64toi32_i32$HIGH_BITS | 0);
  return $0;
 }
 
 function legalstub$assembly_index_primeCheck($0, $1, $2) {
  return assembly_index_primeCheck($0, $1, $2);
 }
 
 function legalfunc$wasm2js_scratch_store_i64($0, $1) {
  legalimport$wasm2js_scratch_store_i64($0 | 0, $1 | 0);
 }
 
 function _ZN17compiler_builtins3int3mul3Mul3mul17h070e9a1c69faec5bE($0, $1, $2, $3) {
  var $4 = 0, $5 = 0;
  $4 = $2 >>> 16 | 0;
  $5 = $0 >>> 16 | 0;
  $3 = (Math_imul($4, $5) + Math_imul($1, $2) | 0) + Math_imul($0, $3) | 0;
  $1 = $2 & 65535 | 0;
  $0 = $0 & 65535 | 0;
  $2 = Math_imul($1, $0);
  $1 = ($2 >>> 16 | 0) + Math_imul($1, $5) | 0;
  $3 = $3 + ($1 >>> 16 | 0) | 0;
  $1 = Math_imul($0, $4) + ($1 & 65535 | 0) | 0;
  i64toi32_i32$HIGH_BITS = $3 + ($1 >>> 16 | 0) | 0;
  return $2 & 65535 | 0 | ($1 << 16 | 0) | 0;
 }
 
 function _ZN17compiler_builtins3int4udiv10divmod_u6417h6026910b5ed08e40E($0, $1, $2, $3) {
  var $4 = 0, $5 = 0, $6 = 0, $7 = 0, $8 = 0, $9 = 0, $10 = 0, $11 = 0, $12 = 0;
  label$1 : {
   label$2 : {
    label$3 : {
     label$4 : {
      label$5 : {
       label$6 : {
        label$7 : {
         label$8 : {
          label$9 : {
           label$11 : {
            if ($1) {
             if (!$2) {
              break label$11
             }
             if (!$3) {
              break label$9
             }
             $4 = Math_clz32($3) - Math_clz32($1) | 0;
             if ($4 >>> 0 <= 31 >>> 0) {
              break label$8
             }
             break label$2;
            }
            if (($3 | 0) == (1 | 0) & $2 >>> 0 >= 0 >>> 0 | 0 | $3 >>> 0 > 1 >>> 0 | 0) {
             break label$2
            }
            legalfunc$wasm2js_scratch_store_i64($0 - Math_imul(($0 >>> 0) / ($2 >>> 0) | 0, $2) | 0, 0);
            i64toi32_i32$HIGH_BITS = 0;
            return;
           }
           if (!$0) {
            break label$7
           }
           if (!$3) {
            break label$6
           }
           $4 = $3 + -1 | 0;
           if ($4 & $3 | 0) {
            break label$6
           }
           legalfunc$wasm2js_scratch_store_i64($0, $1 & $4 | 0);
           __wasm_ctz_i32($3);
           i64toi32_i32$HIGH_BITS = 0;
           return;
          }
          $4 = $2 + -1 | 0;
          if (!($4 & $2 | 0)) {
           break label$5
          }
          $7 = (Math_clz32($2) + 33 | 0) - Math_clz32($1) | 0;
          $5 = 0 - $7 | 0;
          break label$3;
         }
         $7 = $4 + 1 | 0;
         $5 = 63 - $4 | 0;
         break label$3;
        }
        legalfunc$wasm2js_scratch_store_i64(0, $1 - Math_imul(($1 >>> 0) / ($3 >>> 0) | 0, $3) | 0);
        i64toi32_i32$HIGH_BITS = 0;
        return;
       }
       $4 = Math_clz32($3) - Math_clz32($1) | 0;
       if ($4 >>> 0 < 31 >>> 0) {
        break label$4
       }
       break label$2;
      }
      legalfunc$wasm2js_scratch_store_i64($0 & $4 | 0, 0);
      if (($2 | 0) == (1 | 0)) {
       break label$1
      }
      $3 = __wasm_ctz_i32($2);
      $2 = $3 & 31 | 0;
      i64toi32_i32$HIGH_BITS = 32 >>> 0 <= ($3 & 63 | 0) >>> 0 ? 0 : $1 >>> $2 | 0;
      return;
     }
     $7 = $4 + 1 | 0;
     $5 = 63 - $4 | 0;
    }
    $6 = $7 & 63 | 0;
    $4 = $6 & 31 | 0;
    if (32 >>> 0 <= ($6 & 63 | 0) >>> 0) {
     $6 = 0;
     $4 = $1 >>> $4 | 0;
    } else {
     $6 = $1 >>> $4 | 0;
     $4 = (((1 << $4 | 0) - 1 | 0) & $1 | 0) << (32 - $4 | 0) | 0 | ($0 >>> $4 | 0) | 0;
    }
    $8 = $5 & 63 | 0;
    $5 = $8 & 31 | 0;
    if (32 >>> 0 <= ($8 & 63 | 0) >>> 0) {
     $1 = $0 << $5 | 0;
     $0 = 0;
    } else {
     $1 = ((1 << $5 | 0) - 1 | 0) & ($0 >>> (32 - $5 | 0) | 0) | 0 | ($1 << $5 | 0) | 0;
     $0 = $0 << $5 | 0;
    }
    if ($7) {
     $8 = $3 + -1 | 0;
     $5 = $2 + -1 | 0;
     if ($5 >>> 0 < -1 >>> 0) {
      $8 = $8 + 1 | 0
     }
     label$15 : while (1) {
      $10 = $6 << 1 | 0 | ($4 >>> 31 | 0) | 0;
      $6 = $4 << 1 | 0 | ($1 >>> 31 | 0) | 0;
      $9 = ($8 - ($10 + ($5 >>> 0 < $6 >>> 0) | 0) | 0) >> 31 | 0;
      $11 = $9 & $2 | 0;
      $4 = $6 - $11 | 0;
      $6 = $10 - (($3 & $9 | 0) + ($6 >>> 0 < $11 >>> 0) | 0) | 0;
      $1 = $1 << 1 | 0 | ($0 >>> 31 | 0) | 0;
      $0 = $0 << 1 | 0 | $12 | 0;
      $12 = $9 & 1 | 0;
      $7 = $7 + -1 | 0;
      if ($7) {
       continue label$15
      }
      break label$15;
     };
    }
    legalfunc$wasm2js_scratch_store_i64($4, $6);
    i64toi32_i32$HIGH_BITS = $1 << 1 | 0 | ($0 >>> 31 | 0) | 0;
    return;
   }
   legalfunc$wasm2js_scratch_store_i64($0, $1);
   $1 = 0;
  }
  i64toi32_i32$HIGH_BITS = $1;
 }
 
 function __wasm_ctz_i32($0) {
  if ($0) {
   return 31 - Math_clz32(($0 + -1 | 0) ^ $0 | 0) | 0
  }
  return 32;
 }
 
 function __wasm_i64_mul($0, $1, $2, $3) {
  $0 = _ZN17compiler_builtins3int3mul3Mul3mul17h070e9a1c69faec5bE($0, $1, $2, $3);
  return $0;
 }
 
 function __wasm_i64_urem($0, $1, $2, $3) {
  _ZN17compiler_builtins3int4udiv10divmod_u6417h6026910b5ed08e40E($0, $1, $2, $3);
  $0 = legalimport$wasm2js_scratch_load_i64() | 0;
  i64toi32_i32$HIGH_BITS = getTempRet0() | 0;
  return $0;
 }
 
 var FUNCTION_TABLE = [];
 function __wasm_memory_size() {
  return buffer.byteLength / 65536 | 0;
 }
 
 function __wasm_memory_grow(pagesToAdd) {
  pagesToAdd = pagesToAdd | 0;
  var oldPages = __wasm_memory_size() | 0;
  var newPages = oldPages + pagesToAdd | 0;
  if ((oldPages < newPages) && (newPages < 65536)) {
   var newBuffer = new ArrayBuffer(Math_imul(newPages, 65536));
   var newHEAP8 = new global.Int8Array(newBuffer);
   newHEAP8.set(HEAP8);
   HEAP8 = newHEAP8;
   HEAP8 = new global.Int8Array(newBuffer);
   HEAP16 = new global.Int16Array(newBuffer);
   HEAP32 = new global.Int32Array(newBuffer);
   HEAPU8 = new global.Uint8Array(newBuffer);
   HEAPU16 = new global.Uint16Array(newBuffer);
   HEAPU32 = new global.Uint32Array(newBuffer);
   HEAPF32 = new global.Float32Array(newBuffer);
   HEAPF64 = new global.Float64Array(newBuffer);
   buffer = newBuffer;
  }
  return oldPages;
 }
 
 return {
  "memory": Object.create(Object.prototype, {
   "grow": {
    "value": __wasm_memory_grow
   }, 
   "buffer": {
    "get": function () {
     return buffer;
    }
    
   }
  }), 
  "__alloc": $lib_rt_tlsf___alloc, 
  "__retain": $lib_rt_pure___retain, 
  "__release": $lib_rt_pure___release, 
  "__collect": $lib_rt_pure___collect, 
  "add": assembly_index_add, 
  "modpow": legalstub$assembly_index_modpow, 
  "rng_gen_range": legalstub$assembly_index_rng_gen_range, 
  "primeCheck": legalstub$assembly_index_primeCheck
 };
}

var memasmFunc = new ArrayBuffer(65536);
for (var base64ReverseLookup = new Uint8Array(123/*'z'+1*/), i = 25; i >= 0; --i) {
    base64ReverseLookup[48+i] = 52+i; // '0-9'
    base64ReverseLookup[65+i] = i; // 'A-Z'
    base64ReverseLookup[97+i] = 26+i; // 'a-z'
  }
  base64ReverseLookup[43] = 62; // '+'
  base64ReverseLookup[47] = 63; // '/'
  /** @noinline Inlining this function would mean expanding the base64 string 4x times in the source code, which Closure seems to be happy to do. */
  function base64DecodeToExistingUint8Array(uint8Array, offset, b64) {
    var b1, b2, i = 0, j = offset, bLength = b64.length, end = offset + (bLength*3>>2);
    if (b64[bLength-2] == '=') --end;
    if (b64[bLength-1] == '=') --end;
    for (; i < bLength; i += 4, j += 3) {
      b1 = base64ReverseLookup[b64.charCodeAt(i+1)];
      b2 = base64ReverseLookup[b64.charCodeAt(i+2)];
      uint8Array[j] = base64ReverseLookup[b64.charCodeAt(i)] << 2 | b1 >> 4;
      if (j+1 < end) uint8Array[j+1] = b1 << 4 | b2 >> 2;
      if (j+2 < end) uint8Array[j+2] = b2 << 6 | base64ReverseLookup[b64.charCodeAt(i+3)];
    }
  }
var bufferView = new Uint8Array(memasmFunc);
base64DecodeToExistingUint8Array(bufferView, 16, "HgAAAAEAAAABAAAAHgAAAH4AbABpAGIALwByAHQALwB0AGwAcwBmAC4AdABz");
base64DecodeToExistingUint8Array(bufferView, 64, "KAAAAAEAAAABAAAAKAAAAGEAbABsAG8AYwBhAHQAaQBvAG4AIAB0AG8AbwAgAGwAYQByAGcAZQ==");
base64DecodeToExistingUint8Array(bufferView, 128, "HgAAAAEAAAABAAAAHgAAAH4AbABpAGIALwByAHQALwBwAHUAcgBlAC4AdABz");
base64DecodeToExistingUint8Array(bufferView, 176, "GAAAAAEAAAABAAAAGAAAAH4AbABpAGIALwBtAGEAdABoAC4AdABz");
base64DecodeToExistingUint8Array(bufferView, 224, "KAAAAAEAAAABAAAAKAAAAFAAUgBOAEcAIABtAHUAcwB0ACAAYgBlACAAcwBlAGUAZABlAGQALg==");
base64DecodeToExistingUint8Array(bufferView, 288, "AwAAABAAAAAAAAAAEAAAAAAAAAAQ");
var retasmFunc = asmFunc({Math,Int8Array,Uint8Array,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array,NaN,Infinity}, {abort:function() { throw new Error('abort'); },abort,now,setTempRet0,getTempRet0},memasmFunc);
export var memory = retasmFunc.memory;
export var __alloc = retasmFunc.__alloc;
export var __retain = retasmFunc.__retain;
export var __release = retasmFunc.__release;
export var __collect = retasmFunc.__collect;
export var add = retasmFunc.add;
export var modpow = retasmFunc.modpow;
export var rng_gen_range = retasmFunc.rng_gen_range;
export var primeCheck = retasmFunc.primeCheck;
