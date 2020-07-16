import { abort } from 'env';
import { now } from 'Date';
import { seed } from 'env';
import { setTempRet0 } from 'env';
import { getTempRet0 } from 'env';


  var scratchBuffer = new ArrayBuffer(8);
  var i32ScratchView = new Int32Array(scratchBuffer);
  var f32ScratchView = new Float32Array(scratchBuffer);
  var f64ScratchView = new Float64Array(scratchBuffer);
  
  function wasm2js_scratch_load_i32(index) {
    return i32ScratchView[index];
  }
      
  function wasm2js_scratch_store_i32(index, value) {
    i32ScratchView[index] = value;
  }
      
  function wasm2js_scratch_load_f64() {
    return f64ScratchView[0];
  }
      
  function wasm2js_scratch_store_f64(value) {
    f64ScratchView[0] = value;
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
 var $lib_builtins_seed = env.seed;
 var setTempRet0 = env.setTempRet0;
 var getTempRet0 = env.getTempRet0;
 var $lib_rt_tlsf_ROOT = 0;
 var $lib_rt_tlsf_collectLock = 0;
 var $lib_math_random_seeded = 0;
 var $lib_math_random_state0_64 = 0;
 var $lib_math_random_state1_64 = 0;
 var $lib_math_random_state0_32 = 0;
 var $lib_math_random_state1_32 = 0;
 var $lib_rt___rtti_base = 1232;
 var $lib_math_random_state0_64$hi = 0;
 var $lib_math_random_state1_64$hi = 0;
 var i64toi32_i32$HIGH_BITS = 0;
 function $lib_rt_tlsf_removeBlock($0, $1) {
  var $2 = 0, $3 = 0, $4 = 0, $5 = 0;
  $2 = HEAP32[$1 >> 2];
  if (!($2 & 1 | 0)) {
   $lib_builtins_abort(0 | 0, 1040 | 0, 277 | 0, 14 | 0);
   abort();
  }
  $2 = $2 & -4 | 0;
  if ($2 >>> 0 >= 16 >>> 0) {
   $3 = $2 >>> 0 < 1073741808 >>> 0
  } else {
   $3 = 0
  }
  if (!$3) {
   $lib_builtins_abort(0 | 0, 1040 | 0, 279 | 0, 14 | 0);
   abort();
  }
  if ($2 >>> 0 < 256 >>> 0) {
   $2 = $2 >>> 4 | 0
  } else {
   $4 = 31 - Math_clz32($2) | 0;
   $2 = ($2 >>> ($4 - 4 | 0) | 0) ^ 16 | 0;
   $4 = $4 - 7 | 0;
  }
  if (!($4 >>> 0 < 23 >>> 0 ? $2 >>> 0 < 16 >>> 0 : 0)) {
   $lib_builtins_abort(0 | 0, 1040 | 0, 292 | 0, 14 | 0);
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
  if ((HEAP32[((((($4 << 4 | 0) + $2 | 0) << 2 | 0) + $0 | 0) + 96 | 0) >> 2] | 0) == ($1 | 0)) {
   HEAP32[((((($4 << 4 | 0) + $2 | 0) << 2 | 0) + $0 | 0) + 96 | 0) >> 2] = $3;
   if (!$3) {
    $3 = ($4 << 2 | 0) + $0 | 0;
    $1 = HEAP32[($3 + 4 | 0) >> 2] & ((1 << $2 | 0) ^ -1 | 0) | 0;
    HEAP32[($3 + 4 | 0) >> 2] = $1;
    if (!$1) {
     HEAP32[$0 >> 2] = HEAP32[$0 >> 2] & ((1 << $4 | 0) ^ -1 | 0) | 0
    }
   }
  }
 }
 
 function $lib_rt_tlsf_insertBlock($0, $1) {
  var $2 = 0, $3 = 0, $4 = 0, $5 = 0, $6 = 0, $7 = 0, $8 = 0;
  if (!$1) {
   $lib_builtins_abort(0 | 0, 1040 | 0, 205 | 0, 14 | 0);
   abort();
  }
  $3 = HEAP32[$1 >> 2];
  if (!($3 & 1 | 0)) {
   $lib_builtins_abort(0 | 0, 1040 | 0, 207 | 0, 14 | 0);
   abort();
  }
  $4 = ($1 + 16 | 0) + (HEAP32[$1 >> 2] & -4 | 0) | 0;
  $6 = HEAP32[$4 >> 2];
  if ($6 & 1 | 0) {
   $2 = (($3 & -4 | 0) + 16 | 0) + ($6 & -4 | 0) | 0;
   if ($2 >>> 0 < 1073741808 >>> 0) {
    $lib_rt_tlsf_removeBlock($0, $4);
    $3 = $2 | ($3 & 3 | 0) | 0;
    HEAP32[$1 >> 2] = $3;
    $4 = ($1 + 16 | 0) + (HEAP32[$1 >> 2] & -4 | 0) | 0;
    $6 = HEAP32[$4 >> 2];
   }
  }
  if ($3 & 2 | 0) {
   $2 = HEAP32[($1 - 4 | 0) >> 2];
   $7 = HEAP32[$2 >> 2];
   if (!($7 & 1 | 0)) {
    $lib_builtins_abort(0 | 0, 1040 | 0, 228 | 0, 16 | 0);
    abort();
   }
   $8 = (($7 & -4 | 0) + 16 | 0) + ($3 & -4 | 0) | 0;
   if ($8 >>> 0 < 1073741808 >>> 0) {
    $lib_rt_tlsf_removeBlock($0, $2);
    $3 = $7 & 3 | 0 | $8 | 0;
    HEAP32[$2 >> 2] = $3;
    $1 = $2;
   }
  }
  HEAP32[$4 >> 2] = $6 | 2 | 0;
  $2 = $3 & -4 | 0;
  if ($2 >>> 0 >= 16 >>> 0) {
   $3 = $2 >>> 0 < 1073741808 >>> 0
  } else {
   $3 = 0
  }
  if (!$3) {
   $lib_builtins_abort(0 | 0, 1040 | 0, 243 | 0, 14 | 0);
   abort();
  }
  if (($2 + ($1 + 16 | 0) | 0 | 0) != ($4 | 0)) {
   $lib_builtins_abort(0 | 0, 1040 | 0, 244 | 0, 14 | 0);
   abort();
  }
  HEAP32[($4 - 4 | 0) >> 2] = $1;
  if ($2 >>> 0 < 256 >>> 0) {
   $2 = $2 >>> 4 | 0
  } else {
   $3 = 31 - Math_clz32($2) | 0;
   $2 = ($2 >>> ($3 - 4 | 0) | 0) ^ 16 | 0;
   $5 = $3 - 7 | 0;
  }
  if (!($5 >>> 0 < 23 >>> 0 ? $2 >>> 0 < 16 >>> 0 : 0)) {
   $lib_builtins_abort(0 | 0, 1040 | 0, 260 | 0, 14 | 0);
   abort();
  }
  $3 = HEAP32[((((($5 << 4 | 0) + $2 | 0) << 2 | 0) + $0 | 0) + 96 | 0) >> 2];
  HEAP32[($1 + 16 | 0) >> 2] = 0;
  HEAP32[($1 + 20 | 0) >> 2] = $3;
  if ($3) {
   HEAP32[($3 + 16 | 0) >> 2] = $1
  }
  HEAP32[((((($5 << 4 | 0) + $2 | 0) << 2 | 0) + $0 | 0) + 96 | 0) >> 2] = $1;
  HEAP32[$0 >> 2] = HEAP32[$0 >> 2] | (1 << $5 | 0) | 0;
  $0 = ($5 << 2 | 0) + $0 | 0;
  $1 = HEAP32[($0 + 4 | 0) >> 2] | (1 << $2 | 0) | 0;
  HEAP32[($0 + 4 | 0) >> 2] = $1;
 }
 
 function $lib_rt_tlsf_addMemory($0, $1, $2) {
  var $3 = 0, $4 = 0;
  if (!(($1 >>> 0 <= $2 >>> 0 ? !($1 & 15 | 0) : 0) ? !($2 & 15 | 0) : 0)) {
   $lib_builtins_abort(0 | 0, 1040 | 0, 386 | 0, 5 | 0);
   abort();
  }
  $3 = HEAP32[($0 + 1568 | 0) >> 2];
  if ($3) {
   if ($1 >>> 0 < ($3 + 16 | 0) >>> 0) {
    $lib_builtins_abort(0 | 0, 1040 | 0, 396 | 0, 16 | 0);
    abort();
   }
   if (($1 - 16 | 0 | 0) == ($3 | 0)) {
    $4 = HEAP32[$3 >> 2];
    $1 = $1 - 16 | 0;
   }
  } else {
   if ($1 >>> 0 < ($0 + 1572 | 0) >>> 0) {
    $lib_builtins_abort(0 | 0, 1040 | 0, 408 | 0, 5 | 0);
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
   $2 = 1264;
   HEAP32[1264 >> 2] = 0;
   HEAP32[2832 >> 2] = 0;
   for_loop_0 : while (1) {
    if ($1 >>> 0 < 23 >>> 0) {
     HEAP32[((($1 << 2 | 0) + 1264 | 0) + 4 | 0) >> 2] = 0;
     $0 = 0;
     for_loop_1 : while (1) {
      if ($0 >>> 0 < 16 >>> 0) {
       HEAP32[((((($1 << 4 | 0) + $0 | 0) << 2 | 0) + 1264 | 0) + 96 | 0) >> 2] = 0;
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
   $lib_rt_tlsf_addMemory(1264, 2848, __wasm_memory_size() << 16 | 0);
   $lib_rt_tlsf_ROOT = 1264;
  }
  return $2;
 }
 
 function $lib_rt_tlsf_searchBlock($0, $1) {
  var $2 = 0, $3 = 0;
  if ($1 >>> 0 < 256 >>> 0) {
   $1 = $1 >>> 4 | 0
  } else {
   $1 = $1 >>> 0 < 536870904 >>> 0 ? ((1 << (27 - Math_clz32($1) | 0) | 0) + $1 | 0) - 1 | 0 : $1;
   $2 = 31 - Math_clz32($1) | 0;
   $3 = $2 - 4 | 0;
   $2 = $2 - 7 | 0;
   $1 = ($1 >>> $3 | 0) ^ 16 | 0;
  }
  if (!($2 >>> 0 < 23 >>> 0 ? $1 >>> 0 < 16 >>> 0 : 0)) {
   $lib_builtins_abort(0 | 0, 1040 | 0, 338 | 0, 14 | 0);
   abort();
  }
  $1 = HEAP32[((($2 << 2 | 0) + $0 | 0) + 4 | 0) >> 2] & (-1 << $1 | 0) | 0;
  if ($1) {
   $0 = HEAP32[((((__wasm_ctz_i32($1) + ($2 << 4 | 0) | 0) << 2 | 0) + $0 | 0) + 96 | 0) >> 2]
  } else {
   $1 = HEAP32[$0 >> 2] & (-1 << ($2 + 1 | 0) | 0) | 0;
   if ($1) {
    $1 = __wasm_ctz_i32($1);
    $2 = HEAP32[((($1 << 2 | 0) + $0 | 0) + 4 | 0) >> 2];
    if (!$2) {
     $lib_builtins_abort(0 | 0, 1040 | 0, 351 | 0, 18 | 0);
     abort();
    }
    $0 = HEAP32[((((__wasm_ctz_i32($2) + ($1 << 4 | 0) | 0) << 2 | 0) + $0 | 0) + 96 | 0) >> 2];
   } else {
    $0 = 0
   }
  }
  return $0;
 }
 
 function $lib_rt_tlsf_prepareBlock($0, $1, $2) {
  var $3 = 0, $4 = 0;
  $3 = HEAP32[$1 >> 2];
  if ($2 & 15 | 0) {
   $lib_builtins_abort(0 | 0, 1040 | 0, 365 | 0, 14 | 0);
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
  var $3 = 0, $4 = 0, $5 = 0;
  if ($lib_rt_tlsf_collectLock) {
   $lib_builtins_abort(0 | 0, 1040 | 0, 500 | 0, 14 | 0);
   abort();
  }
  if ($1 >>> 0 >= 1073741808 >>> 0) {
   $lib_builtins_abort(1088 | 0, 1040 | 0, 461 | 0, 30 | 0);
   abort();
  }
  $3 = ($1 + 15 | 0) & -16 | 0;
  $4 = $3 >>> 0 > 16 >>> 0;
  $4 = $4 ? $3 : 16;
  $3 = $lib_rt_tlsf_searchBlock($0, $4);
  if (!$3) {
   $lib_rt_tlsf_collectLock = 1;
   $lib_rt_tlsf_collectLock = 0;
   $3 = $lib_rt_tlsf_searchBlock($0, $4);
   if (!$3) {
    $3 = __wasm_memory_size();
    $5 = ($3 << 16 | 0) - 16 | 0;
    $5 = ((((16 << ((HEAP32[($0 + 1568 | 0) >> 2] | 0) != ($5 | 0)) | 0) + ($4 >>> 0 < 536870904 >>> 0 ? ((1 << (27 - Math_clz32($4) | 0) | 0) - 1 | 0) + $4 | 0 : $4) | 0) + 65535 | 0) & -65536 | 0) >>> 16 | 0;
    if ((__wasm_memory_grow((($3 | 0) > ($5 | 0) ? $3 : $5) | 0) | 0) < (0 | 0)) {
     if ((__wasm_memory_grow($5 | 0) | 0) < (0 | 0)) {
      abort()
     }
    }
    $lib_rt_tlsf_addMemory($0, $3 << 16 | 0, __wasm_memory_size() << 16 | 0);
    $3 = $lib_rt_tlsf_searchBlock($0, $4);
    if (!$3) {
     $lib_builtins_abort(0 | 0, 1040 | 0, 512 | 0, 20 | 0);
     abort();
    }
   }
  }
  if ((HEAP32[$3 >> 2] & -4 | 0) >>> 0 < $4 >>> 0) {
   $lib_builtins_abort(0 | 0, 1040 | 0, 520 | 0, 14 | 0);
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
 
 function $lib_rt_pure___retain($0) {
  $0 = $0 | 0;
  var $1 = 0, $2 = 0;
  if ($0 >>> 0 > 1260 >>> 0) {
   $1 = $0 - 16 | 0;
   $2 = HEAP32[($1 + 4 | 0) >> 2];
   if (($2 & -268435456 | 0 | 0) != (($2 + 1 | 0) & -268435456 | 0 | 0)) {
    $lib_builtins_abort(0 | 0, 1152 | 0, 109 | 0, 3 | 0);
    abort();
   }
   HEAP32[($1 + 4 | 0) >> 2] = $2 + 1 | 0;
   if (HEAP32[$1 >> 2] & 1 | 0) {
    $lib_builtins_abort(0 | 0, 1152 | 0, 112 | 0, 14 | 0);
    abort();
   }
  }
  return $0 | 0;
 }
 
 function $lib_rt_pure___release($0) {
  $0 = $0 | 0;
  if ($0 >>> 0 > 1260 >>> 0) {
   $lib_rt_pure_decrement($0 - 16 | 0)
  }
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
   $lib_builtins_abort(0 | 0, 1200 | 0, 1398 | 0, 5 | 0);
   abort();
  }
 }
 
 function assembly_index_rng_gen_range($0, $1, $2, $3) {
  $0 = $0 | 0;
  $1 = $1 | 0;
  $2 = $2 | 0;
  $3 = $3 | 0;
  var $4 = 0, $5 = 0.0, $6 = 0, $7 = 0, $8 = 0, $9 = 0;
  $5 = +$lib_bindings_Date_now();
  if (Math_abs($5) >= 1.0) {
   $4 = $5 > 0.0 ? ~~Math_min(Math_floor($5 / 4294967296.0), 4294967295.0) >>> 0 : ~~Math_ceil(($5 - +(~~$5 >>> 0 >>> 0)) / 4294967296.0) >>> 0
  } else {
   $4 = 0
  }
  $lib_math_NativeMath_seedRandom(~~$5 >>> 0, $4);
  if (!$lib_math_random_seeded) {
   wasm2js_scratch_store_f64(+(+$lib_builtins_seed()));
   $4 = wasm2js_scratch_load_i32(1 | 0) | 0;
   $lib_math_NativeMath_seedRandom(wasm2js_scratch_load_i32(0 | 0) | 0, $4);
  }
  $4 = $lib_math_random_state0_64;
  $8 = $lib_math_random_state0_64$hi;
  $9 = $lib_math_random_state1_64;
  $lib_math_random_state0_64 = $9;
  $7 = $lib_math_random_state1_64$hi;
  $lib_math_random_state0_64$hi = $7;
  $6 = $8;
  $8 = $6 << 23 | 0 | ($4 >>> 9 | 0) | 0;
  $4 = ($4 << 23 | 0) ^ $4 | 0;
  $6 = $6 ^ $8 | 0;
  $8 = ((($6 & 131071 | 0) << 15 | 0 | ($4 >>> 17 | 0) | 0) ^ $4 | 0) ^ $9 | 0;
  $6 = (($6 >>> 17 | 0) ^ $6 | 0) ^ $7 | 0;
  $4 = $9;
  $lib_math_random_state1_64 = (($7 & 67108863 | 0) << 6 | 0 | ($4 >>> 26 | 0) | 0) ^ $8 | 0;
  $lib_math_random_state1_64$hi = ($7 >>> 26 | 0) ^ $6 | 0;
  wasm2js_scratch_store_i32(0 | 0, ($7 & 4095 | 0) << 20 | 0 | ($4 >>> 12 | 0) | 0 | 0);
  wasm2js_scratch_store_i32(1 | 0, $7 >>> 12 | 0 | 1072693248 | 0 | 0);
  $5 = Math_floor((+wasm2js_scratch_load_f64() - 1.0) * (+(($2 - $0 | 0) >>> 0) + 4294967296.0 * +(($3 - (($2 >>> 0 < $0 >>> 0) + $1 | 0) | 0) >>> 0)));
  if (Math_abs($5) >= 1.0) {
   $2 = $5 > 0.0 ? ~~Math_min(Math_floor($5 / 4294967296.0), 4294967295.0) >>> 0 : ~~Math_ceil(($5 - +(~~$5 >>> 0 >>> 0)) / 4294967296.0) >>> 0
  } else {
   $2 = 0
  }
  $2 = $2 + $1 | 0;
  $1 = ~~$5 >>> 0;
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
  $2 = HEAP32[($0 + 4 | 0) >> 2];
  $1 = $2 & 268435455 | 0;
  if (HEAP32[$0 >> 2] & 1 | 0) {
   $lib_builtins_abort(0 | 0, 1152 | 0, 122 | 0, 14 | 0);
   abort();
  }
  if (($1 | 0) == (1 | 0)) {
   __inlined_func$_lib_rt___visit_members : {
    switch$1$default : {
     switch (HEAP32[($0 + 8 | 0) >> 2] | 0) {
     case 2:
      $1 = HEAP32[($0 + 16 | 0) >> 2];
      if ($1) {
       if ($1 >>> 0 >= 1260 >>> 0) {
        $lib_rt_pure_decrement($1 - 16 | 0)
       }
      }
      break __inlined_func$_lib_rt___visit_members;
     case 0:
     case 1:
      break __inlined_func$_lib_rt___visit_members;
     default:
      break switch$1$default;
     };
    }
    abort();
   }
   if ($2 & -2147483648 | 0) {
    $lib_builtins_abort(0 | 0, 1152 | 0, 126 | 0, 18 | 0);
    abort();
   }
   HEAP32[$0 >> 2] = HEAP32[$0 >> 2] | 1 | 0;
   $lib_rt_tlsf_insertBlock($lib_rt_tlsf_ROOT, $0);
  } else {
   if ($1 >>> 0 <= 0 >>> 0) {
    $lib_builtins_abort(0 | 0, 1152 | 0, 136 | 0, 16 | 0);
    abort();
   }
   HEAP32[($0 + 4 | 0) >> 2] = $1 - 1 | 0 | ($2 & -268435456 | 0) | 0;
  }
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
            legalimport$wasm2js_scratch_store_i64($0 - Math_imul(($0 >>> 0) / ($2 >>> 0) | 0, $2) | 0 | 0, 0 | 0);
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
           legalimport$wasm2js_scratch_store_i64($0 | 0, $1 & $4 | 0 | 0);
           __wasm_ctz_i32($3);
           i64toi32_i32$HIGH_BITS = 0;
           return;
          }
          $4 = $2 + -1 | 0;
          if (!($4 & $2 | 0)) {
           break label$5
          }
          $6 = (Math_clz32($2) + 33 | 0) - Math_clz32($1) | 0;
          $4 = 0 - $6 | 0;
          break label$3;
         }
         $6 = $4 + 1 | 0;
         $4 = 63 - $4 | 0;
         break label$3;
        }
        legalimport$wasm2js_scratch_store_i64(0 | 0, $1 - Math_imul(($1 >>> 0) / ($3 >>> 0) | 0, $3) | 0 | 0);
        i64toi32_i32$HIGH_BITS = 0;
        return;
       }
       $4 = Math_clz32($3) - Math_clz32($1) | 0;
       if ($4 >>> 0 < 31 >>> 0) {
        break label$4
       }
       break label$2;
      }
      legalimport$wasm2js_scratch_store_i64($0 & $4 | 0 | 0, 0 | 0);
      if (($2 | 0) == (1 | 0)) {
       break label$1
      }
      $0 = __wasm_ctz_i32($2);
      i64toi32_i32$HIGH_BITS = 32 >>> 0 <= ($0 & 63 | 0) >>> 0 ? 0 : $1 >>> ($0 & 31 | 0) | 0;
      return;
     }
     $6 = $4 + 1 | 0;
     $4 = 63 - $4 | 0;
    }
    $7 = $6 & 63 | 0;
    $5 = $7 & 31 | 0;
    if (32 >>> 0 <= ($7 & 63 | 0) >>> 0) {
     $7 = $1 >>> $5 | 0
    } else {
     $8 = $1 >>> $5 | 0;
     $7 = (((1 << $5 | 0) - 1 | 0) & $1 | 0) << (32 - $5 | 0) | 0 | ($0 >>> $5 | 0) | 0;
    }
    $4 = $4 & 63 | 0;
    $5 = $4 & 31 | 0;
    if (32 >>> 0 <= ($4 & 63 | 0) >>> 0) {
     $1 = $0 << $5 | 0;
     $0 = 0;
    } else {
     $1 = ((1 << $5 | 0) - 1 | 0) & ($0 >>> (32 - $5 | 0) | 0) | 0 | ($1 << $5 | 0) | 0;
     $0 = $0 << $5 | 0;
    }
    if ($6) {
     $9 = $3 + -1 | 0;
     $5 = $2 + -1 | 0;
     if ($5 >>> 0 < -1 >>> 0) {
      $9 = $9 + 1 | 0
     }
     label$15 : while (1) {
      $4 = $8 << 1 | 0 | ($7 >>> 31 | 0) | 0;
      $10 = $7 << 1 | 0 | ($1 >>> 31 | 0) | 0;
      $11 = ($9 - ($4 + ($5 >>> 0 < $10 >>> 0) | 0) | 0) >> 31 | 0;
      $8 = $11 & $2 | 0;
      $7 = $10 - $8 | 0;
      $8 = $4 - (($3 & $11 | 0) + ($10 >>> 0 < $8 >>> 0) | 0) | 0;
      $1 = $1 << 1 | 0 | ($0 >>> 31 | 0) | 0;
      $0 = $0 << 1 | 0 | $12 | 0;
      $12 = $11 & 1 | 0;
      $6 = $6 + -1 | 0;
      if ($6) {
       continue label$15
      }
      break label$15;
     };
    }
    legalimport$wasm2js_scratch_store_i64($7 | 0, $8 | 0);
    i64toi32_i32$HIGH_BITS = $1 << 1 | 0 | ($0 >>> 31 | 0) | 0;
    return;
   }
   legalimport$wasm2js_scratch_store_i64($0 | 0, $1 | 0);
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
  var $4 = 0, $5 = 0, $6 = 0, $7 = 0, $8 = 0;
  $4 = $2 & 65535 | 0;
  $5 = $0 & 65535 | 0;
  $6 = Math_imul($4, $5);
  $7 = $0 >>> 16 | 0;
  $4 = ($6 >>> 16 | 0) + Math_imul($4, $7) | 0;
  $8 = $2 >>> 16 | 0;
  $5 = Math_imul($5, $8) + ($4 & 65535 | 0) | 0;
  i64toi32_i32$HIGH_BITS = (((Math_imul($7, $8) + Math_imul($1, $2) | 0) + Math_imul($0, $3) | 0) + ($4 >>> 16 | 0) | 0) + ($5 >>> 16 | 0) | 0;
  return $6 & 65535 | 0 | ($5 << 16 | 0) | 0;
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
    var b1, b2, i = 0, j = offset, bLength = b64.length, end = offset + (bLength*3>>2) - (b64[bLength-2] == '=') - (b64[bLength-1] == '=');
    for (; i < bLength; i += 4) {
      b1 = base64ReverseLookup[b64.charCodeAt(i+1)];
      b2 = base64ReverseLookup[b64.charCodeAt(i+2)];
      uint8Array[j++] = base64ReverseLookup[b64.charCodeAt(i)] << 2 | b1 >> 4;
      if (j < end) uint8Array[j++] = b1 << 4 | b2 >> 2;
      if (j < end) uint8Array[j++] = b2 << 6 | base64ReverseLookup[b64.charCodeAt(i+3)];
    }
  }
var bufferView = new Uint8Array(memasmFunc);
base64DecodeToExistingUint8Array(bufferView, 1024, "HgAAAAEAAAABAAAAHgAAAH4AbABpAGIALwByAHQALwB0AGwAcwBmAC4AdABz");
base64DecodeToExistingUint8Array(bufferView, 1072, "KAAAAAEAAAABAAAAKAAAAGEAbABsAG8AYwBhAHQAaQBvAG4AIAB0AG8AbwAgAGwAYQByAGcAZQ==");
base64DecodeToExistingUint8Array(bufferView, 1136, "HgAAAAEAAAABAAAAHgAAAH4AbABpAGIALwByAHQALwBwAHUAcgBlAC4AdABz");
base64DecodeToExistingUint8Array(bufferView, 1184, "GAAAAAEAAAABAAAAGAAAAH4AbABpAGIALwBtAGEAdABoAC4AdABz");
base64DecodeToExistingUint8Array(bufferView, 1232, "AwAAACAAAAAAAAAAIAAAAAAAAAAg");
var retasmFunc = asmFunc({Math,Int8Array,Uint8Array,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array,NaN,Infinity}, {abort:function() { throw new Error('abort'); },abort,now,seed,setTempRet0,getTempRet0},memasmFunc);
export var memory = retasmFunc.memory;
export var __alloc = retasmFunc.__alloc;
export var __retain = retasmFunc.__retain;
export var __release = retasmFunc.__release;
export var __collect = retasmFunc.__collect;
export var modpow = retasmFunc.modpow;
export var rng_gen_range = retasmFunc.rng_gen_range;
export var primeCheck = retasmFunc.primeCheck;
