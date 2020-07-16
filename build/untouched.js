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
 var $lib_gc_gc_auto = 1;
 var $lib_math_random_seeded = 0;
 var $lib_math_random_state0_64 = 0;
 var $lib_math_random_state1_64 = 0;
 var $lib_math_random_state0_32 = 0;
 var $lib_math_random_state1_32 = 0;
 var $lib_rt___rtti_base = 224;
 var $lib_heap___heap_base = 252;
 var $lib_math_random_state0_64$hi = 0;
 var $lib_math_random_state1_64$hi = 0;
 var i64toi32_i32$HIGH_BITS = 0;
 function $lib_rt_tlsf_removeBlock($0, $1) {
  $0 = $0 | 0;
  $1 = $1 | 0;
  var $4 = 0, $9 = 0, $3 = 0, $7 = 0, $5 = 0, $8 = 0, $6 = 0, $2 = 0, $24 = 0, $47 = 0;
  $2 = HEAP32[$1 >> 2] | 0;
  if (!($2 & 1 | 0)) {
   $lib_builtins_abort(0 | 0, 32 | 0, 277 | 0, 14 | 0);
   abort();
  }
  $3 = $2 & (3 ^ -1 | 0) | 0;
  if ($3 >>> 0 >= 16 >>> 0) {
   $24 = $3 >>> 0 < 1073741808 >>> 0
  } else {
   $24 = 0
  }
  if (!$24) {
   $lib_builtins_abort(0 | 0, 32 | 0, 279 | 0, 14 | 0);
   abort();
  }
  if ($3 >>> 0 < 256 >>> 0) {
   $4 = 0;
   $5 = $3 >>> 4 | 0;
  } else {
   $4 = 31 - Math_clz32($3) | 0;
   $5 = ($3 >>> ($4 - 4 | 0) | 0) ^ (1 << 4 | 0) | 0;
   $4 = $4 - (8 - 1 | 0) | 0;
  }
  if ($4 >>> 0 < 23 >>> 0) {
   $47 = $5 >>> 0 < 16 >>> 0
  } else {
   $47 = 0
  }
  if (!$47) {
   $lib_builtins_abort(0 | 0, 32 | 0, 292 | 0, 14 | 0);
   abort();
  }
  $6 = HEAP32[($1 + 16 | 0) >> 2] | 0;
  $7 = HEAP32[($1 + 20 | 0) >> 2] | 0;
  if ($6) {
   HEAP32[($6 + 20 | 0) >> 2] = $7
  }
  if ($7) {
   HEAP32[($7 + 16 | 0) >> 2] = $6
  }
  $lib_rt_tlsf_GETHEAD_inlined_0 : {
   $9 = $4;
   $8 = $5;
  }
  if (($1 | 0) == (HEAP32[(($0 + ((($9 << 4 | 0) + $8 | 0) << 2 | 0) | 0) + 96 | 0) >> 2] | 0 | 0)) {
   $lib_rt_tlsf_SETHEAD_inlined_1 : {
    $9 = $5;
    $8 = $7;
    HEAP32[(($0 + ((($4 << 4 | 0) + $9 | 0) << 2 | 0) | 0) + 96 | 0) >> 2] = $7;
   }
   if (!$7) {
    $lib_rt_tlsf_GETSL_inlined_0 : {
     $9 = $0;
     $8 = $4;
    }
    $9 = HEAP32[(($9 + ($8 << 2 | 0) | 0) + 4 | 0) >> 2] | 0;
    $lib_rt_tlsf_SETSL_inlined_1 : {
     $8 = $0;
     $9 = $9 & ((1 << $5 | 0) ^ -1 | 0) | 0;
     HEAP32[(($0 + ($4 << 2 | 0) | 0) + 4 | 0) >> 2] = $9;
    }
    if (!$9) {
     HEAP32[$0 >> 2] = (HEAP32[$0 >> 2] | 0) & ((1 << $4 | 0) ^ -1 | 0) | 0
    }
   }
  }
 }
 
 function $lib_rt_tlsf_insertBlock($0, $1) {
  $0 = $0 | 0;
  $1 = $1 | 0;
  var $3 = 0, $6 = 0, $9 = 0, $2 = 0, $4 = 0, $7 = 0, $8 = 0, $10 = 0, $5 = 0, $11 = 0, $107 = 0, $140 = 0;
  if (!$1) {
   $lib_builtins_abort(0 | 0, 32 | 0, 205 | 0, 14 | 0);
   abort();
  }
  $2 = HEAP32[$1 >> 2] | 0;
  if (!($2 & 1 | 0)) {
   $lib_builtins_abort(0 | 0, 32 | 0, 207 | 0, 14 | 0);
   abort();
  }
  $3 = $1;
  $4 = ($3 + 16 | 0) + ((HEAP32[$3 >> 2] | 0) & (3 ^ -1 | 0) | 0) | 0;
  $5 = HEAP32[$4 >> 2] | 0;
  if ($5 & 1 | 0) {
   $3 = (($2 & (3 ^ -1 | 0) | 0) + 16 | 0) + ($5 & (3 ^ -1 | 0) | 0) | 0;
   if ($3 >>> 0 < 1073741808 >>> 0) {
    $lib_rt_tlsf_removeBlock($0 | 0, $4 | 0);
    $2 = $2 & 3 | 0 | $3 | 0;
    HEAP32[$1 >> 2] = $2;
    $6 = $1;
    $4 = ($6 + 16 | 0) + ((HEAP32[$6 >> 2] | 0) & (3 ^ -1 | 0) | 0) | 0;
    $5 = HEAP32[$4 >> 2] | 0;
   }
  }
  if ($2 & 2 | 0) {
   $6 = $1;
   $6 = HEAP32[($6 - 4 | 0) >> 2] | 0;
   $3 = HEAP32[$6 >> 2] | 0;
   if (!($3 & 1 | 0)) {
    $lib_builtins_abort(0 | 0, 32 | 0, 228 | 0, 16 | 0);
    abort();
   }
   $7 = (($3 & (3 ^ -1 | 0) | 0) + 16 | 0) + ($2 & (3 ^ -1 | 0) | 0) | 0;
   if ($7 >>> 0 < 1073741808 >>> 0) {
    $lib_rt_tlsf_removeBlock($0 | 0, $6 | 0);
    $2 = $3 & 3 | 0 | $7 | 0;
    HEAP32[$6 >> 2] = $2;
    $1 = $6;
   }
  }
  HEAP32[$4 >> 2] = $5 | 2 | 0;
  $8 = $2 & (3 ^ -1 | 0) | 0;
  if ($8 >>> 0 >= 16 >>> 0) {
   $107 = $8 >>> 0 < 1073741808 >>> 0
  } else {
   $107 = 0
  }
  if (!$107) {
   $lib_builtins_abort(0 | 0, 32 | 0, 243 | 0, 14 | 0);
   abort();
  }
  if (!((($1 + 16 | 0) + $8 | 0 | 0) == ($4 | 0))) {
   $lib_builtins_abort(0 | 0, 32 | 0, 244 | 0, 14 | 0);
   abort();
  }
  HEAP32[($4 - 4 | 0) >> 2] = $1;
  if ($8 >>> 0 < 256 >>> 0) {
   $9 = 0;
   $10 = $8 >>> 4 | 0;
  } else {
   $9 = 31 - Math_clz32($8) | 0;
   $10 = ($8 >>> ($9 - 4 | 0) | 0) ^ (1 << 4 | 0) | 0;
   $9 = $9 - (8 - 1 | 0) | 0;
  }
  if ($9 >>> 0 < 23 >>> 0) {
   $140 = $10 >>> 0 < 16 >>> 0
  } else {
   $140 = 0
  }
  if (!$140) {
   $lib_builtins_abort(0 | 0, 32 | 0, 260 | 0, 14 | 0);
   abort();
  }
  $lib_rt_tlsf_GETHEAD_inlined_1 : {
   $7 = $0;
   $3 = $9;
   $6 = $10;
  }
  $11 = HEAP32[(($7 + ((($3 << 4 | 0) + $6 | 0) << 2 | 0) | 0) + 96 | 0) >> 2] | 0;
  HEAP32[($1 + 16 | 0) >> 2] = 0;
  HEAP32[($1 + 20 | 0) >> 2] = $11;
  if ($11) {
   HEAP32[($11 + 16 | 0) >> 2] = $1
  }
  $lib_rt_tlsf_SETHEAD_inlined_2 : {
   $7 = $9;
   $3 = $10;
   $6 = $1;
   HEAP32[(($0 + ((($9 << 4 | 0) + $3 | 0) << 2 | 0) | 0) + 96 | 0) >> 2] = $1;
  }
  HEAP32[$0 >> 2] = HEAP32[$0 >> 2] | 0 | (1 << $9 | 0) | 0;
  $lib_rt_tlsf_SETSL_inlined_2 : {
   $lib_rt_tlsf_GETSL_inlined_1 : {
    $3 = $0;
    $6 = $9;
   }
   $7 = HEAP32[(($3 + ($6 << 2 | 0) | 0) + 4 | 0) >> 2] | 0 | (1 << $10 | 0) | 0;
   HEAP32[(($0 + ($9 << 2 | 0) | 0) + 4 | 0) >> 2] = $7;
  }
 }
 
 function $lib_rt_tlsf_addMemory($0, $1, $2) {
  $0 = $0 | 0;
  $1 = $1 | 0;
  $2 = $2 | 0;
  var $4 = 0, $6 = 0, $16 = 0, $21 = 0, $5 = 0;
  if ($1 >>> 0 <= $2 >>> 0) {
   $16 = !($1 & 15 | 0)
  } else {
   $16 = 0
  }
  if ($16) {
   $21 = !($2 & 15 | 0)
  } else {
   $21 = 0
  }
  if (!$21) {
   $lib_builtins_abort(0 | 0, 32 | 0, 386 | 0, 5 | 0);
   abort();
  }
  $4 = HEAP32[($0 + 1568 | 0) >> 2] | 0;
  $5 = 0;
  if ($4) {
   if (!($1 >>> 0 >= ($4 + 16 | 0) >>> 0)) {
    $lib_builtins_abort(0 | 0, 32 | 0, 396 | 0, 16 | 0);
    abort();
   }
   if (($1 - 16 | 0 | 0) == ($4 | 0)) {
    $1 = $1 - 16 | 0;
    $5 = HEAP32[$4 >> 2] | 0;
   }
  } else {
   if (!($1 >>> 0 >= ($0 + 1572 | 0) >>> 0)) {
    $lib_builtins_abort(0 | 0, 32 | 0, 408 | 0, 5 | 0);
    abort();
   }
  }
  $6 = $2 - $1 | 0;
  if ($6 >>> 0 < ((16 + 16 | 0) + 16 | 0) >>> 0) {
   return 0 | 0
  }
  HEAP32[$1 >> 2] = $6 - (16 << 1 | 0) | 0 | 1 | 0 | ($5 & 2 | 0) | 0;
  HEAP32[($1 + 16 | 0) >> 2] = 0;
  HEAP32[($1 + 20 | 0) >> 2] = 0;
  $4 = ($1 + $6 | 0) - 16 | 0;
  HEAP32[$4 >> 2] = 0 | 2 | 0;
  HEAP32[($0 + 1568 | 0) >> 2] = $4;
  $lib_rt_tlsf_insertBlock($0 | 0, $1 | 0);
  return 1 | 0;
 }
 
 function $lib_rt_tlsf_maybeInitialize() {
  var $0 = 0, $5 = 0, $8 = 0, $1 = 0, $4 = 0, $6 = 0, $2 = 0, $3 = 0, $34 = 0;
  $0 = $lib_rt_tlsf_ROOT;
  if (!$0) {
   $1 = ($lib_heap___heap_base + 15 | 0) & (15 ^ -1 | 0) | 0;
   $2 = __wasm_memory_size();
   $3 = ((($1 + 1572 | 0) + 65535 | 0) & (65535 ^ -1 | 0) | 0) >>> 16 | 0;
   if (($3 | 0) > ($2 | 0)) {
    $34 = (__wasm_memory_grow($3 - $2 | 0 | 0) | 0) < (0 | 0)
   } else {
    $34 = 0
   }
   if ($34) {
    abort()
   }
   $0 = $1;
   HEAP32[$0 >> 2] = 0;
   $lib_rt_tlsf_SETTAIL_inlined_0 : {
    $5 = $0;
    $4 = 0;
    HEAP32[($0 + 1568 | 0) >> 2] = $4;
   }
   $5 = 0;
   for_loop_0 : while (1) {
    $4 = $5 >>> 0 < 23 >>> 0;
    if ($4) {
     for_continue_0 : {
      $lib_rt_tlsf_SETSL_inlined_0 : {
       $8 = $0;
       $6 = 0;
       HEAP32[(($0 + ($5 << 2 | 0) | 0) + 4 | 0) >> 2] = $6;
      }
      $8 = 0;
      for_loop_1 : while (1) {
       if ($8 >>> 0 < 16 >>> 0) {
        $lib_rt_tlsf_SETHEAD_inlined_0 : {
         $6 = 0;
         HEAP32[(($0 + ((($5 << 4 | 0) + $8 | 0) << 2 | 0) | 0) + 96 | 0) >> 2] = $6;
        }
        $8 = $8 + 1 | 0;
        continue for_loop_1;
       }
       break for_loop_1;
      };
     }
     $5 = $5 + 1 | 0;
     continue for_loop_0;
    }
    break for_loop_0;
   };
   $5 = (($1 + 1572 | 0) + 15 | 0) & (15 ^ -1 | 0) | 0;
   $lib_rt_tlsf_addMemory($0 | 0, $5 | 0, __wasm_memory_size() << 16 | 0 | 0) | 0;
   $lib_rt_tlsf_ROOT = $0;
  }
  return $0 | 0;
 }
 
 function $lib_rt_tlsf_prepareSize($0) {
  $0 = $0 | 0;
  var $1 = 0, $2 = 0;
  if ($0 >>> 0 >= 1073741808 >>> 0) {
   $lib_builtins_abort(80 | 0, 32 | 0, 461 | 0, 30 | 0);
   abort();
  }
  $1 = ($0 + 15 | 0) & (15 ^ -1 | 0) | 0;
  $2 = 16;
  return ($1 >>> 0 > $2 >>> 0 ? $1 : $2) | 0;
 }
 
 function $lib_rt_tlsf_searchBlock($0, $1) {
  $0 = $0 | 0;
  $1 = $1 | 0;
  var $2 = 0, $4 = 0, $6 = 0, $8 = 0, $5 = 0, $7 = 0, $3 = 0, $9 = 0, $24 = 0, $42 = 0;
  if ($1 >>> 0 < 256 >>> 0) {
   $2 = 0;
   $3 = $1 >>> 4 | 0;
  } else {
   if ($1 >>> 0 < 536870904 >>> 0) {
    $24 = ($1 + (1 << (27 - Math_clz32($1) | 0) | 0) | 0) - 1 | 0
   } else {
    $24 = $1
   }
   $4 = $24;
   $2 = 31 - Math_clz32($4) | 0;
   $3 = ($4 >>> ($2 - 4 | 0) | 0) ^ (1 << 4 | 0) | 0;
   $2 = $2 - (8 - 1 | 0) | 0;
  }
  if ($2 >>> 0 < 23 >>> 0) {
   $42 = $3 >>> 0 < 16 >>> 0
  } else {
   $42 = 0
  }
  if (!$42) {
   $lib_builtins_abort(0 | 0, 32 | 0, 338 | 0, 14 | 0);
   abort();
  }
  $lib_rt_tlsf_GETSL_inlined_2 : {
   $5 = $0;
   $4 = $2;
  }
  $6 = (HEAP32[(($5 + ($4 << 2 | 0) | 0) + 4 | 0) >> 2] | 0) & ((0 ^ -1 | 0) << $3 | 0) | 0;
  $7 = 0;
  if (!$6) {
   $5 = (HEAP32[$0 >> 2] | 0) & ((0 ^ -1 | 0) << ($2 + 1 | 0) | 0) | 0;
   if (!$5) {
    $7 = 0
   } else {
    $2 = __wasm_ctz_i32($5 | 0) | 0;
    $lib_rt_tlsf_GETSL_inlined_3 : {
     $8 = $0;
     $4 = $2;
    }
    $6 = HEAP32[(($8 + ($4 << 2 | 0) | 0) + 4 | 0) >> 2] | 0;
    if (!$6) {
     $lib_builtins_abort(0 | 0, 32 | 0, 351 | 0, 18 | 0);
     abort();
    }
    $lib_rt_tlsf_GETHEAD_inlined_2 : {
     $9 = $0;
     $8 = $2;
     $4 = __wasm_ctz_i32($6 | 0) | 0;
    }
    $7 = HEAP32[(($9 + ((($8 << 4 | 0) + $4 | 0) << 2 | 0) | 0) + 96 | 0) >> 2] | 0;
   }
  } else {
   $lib_rt_tlsf_GETHEAD_inlined_3 : {
    $9 = $0;
    $8 = $2;
    $4 = __wasm_ctz_i32($6 | 0) | 0;
   }
   $7 = HEAP32[(($9 + ((($8 << 4 | 0) + $4 | 0) << 2 | 0) | 0) + 96 | 0) >> 2] | 0;
  }
  return $7 | 0;
 }
 
 function $lib_rt_tlsf_growMemory($0, $1) {
  $0 = $0 | 0;
  $1 = $1 | 0;
  var $2 = 0, $4 = 0;
  if ($1 >>> 0 < 536870904 >>> 0) {
   $1 = $1 + ((1 << (27 - Math_clz32($1) | 0) | 0) - 1 | 0) | 0
  }
  $2 = __wasm_memory_size();
  $1 = $1 + (16 << ((($2 << 16 | 0) - 16 | 0 | 0) != (HEAP32[($0 + 1568 | 0) >> 2] | 0 | 0)) | 0) | 0;
  $4 = (($1 + 65535 | 0) & (65535 ^ -1 | 0) | 0) >>> 16 | 0;
  if ((__wasm_memory_grow((($2 | 0) > ($4 | 0) ? $2 : $4) | 0) | 0) < (0 | 0)) {
   if ((__wasm_memory_grow($4 | 0) | 0) < (0 | 0)) {
    abort()
   }
  }
  $lib_rt_tlsf_addMemory($0 | 0, $2 << 16 | 0 | 0, __wasm_memory_size() << 16 | 0 | 0) | 0;
 }
 
 function $lib_rt_tlsf_prepareBlock($0, $1, $2) {
  $0 = $0 | 0;
  $1 = $1 | 0;
  $2 = $2 | 0;
  var $5 = 0, $3 = 0, $4 = 0, $48 = 0;
  $3 = HEAP32[$1 >> 2] | 0;
  if (!!($2 & 15 | 0)) {
   $lib_builtins_abort(0 | 0, 32 | 0, 365 | 0, 14 | 0);
   abort();
  }
  $4 = ($3 & (3 ^ -1 | 0) | 0) - $2 | 0;
  if ($4 >>> 0 >= (16 + 16 | 0) >>> 0) {
   HEAP32[$1 >> 2] = $2 | ($3 & 2 | 0) | 0;
   $5 = ($1 + 16 | 0) + $2 | 0;
   HEAP32[$5 >> 2] = $4 - 16 | 0 | 1 | 0;
   $lib_rt_tlsf_insertBlock($0 | 0, $5 | 0);
  } else {
   HEAP32[$1 >> 2] = $3 & (1 ^ -1 | 0) | 0;
   $5 = $1;
   $48 = ($5 + 16 | 0) + ((HEAP32[$5 >> 2] | 0) & (3 ^ -1 | 0) | 0) | 0;
   $5 = $1;
   HEAP32[$48 >> 2] = (HEAP32[(($5 + 16 | 0) + ((HEAP32[$5 >> 2] | 0) & (3 ^ -1 | 0) | 0) | 0) >> 2] | 0) & (2 ^ -1 | 0) | 0;
  }
 }
 
 function $lib_rt_tlsf_allocateBlock($0, $1, $2) {
  $0 = $0 | 0;
  $1 = $1 | 0;
  $2 = $2 | 0;
  var $4 = 0, $3 = 0;
  if (!!$lib_rt_tlsf_collectLock) {
   $lib_builtins_abort(0 | 0, 32 | 0, 500 | 0, 14 | 0);
   abort();
  }
  $3 = $lib_rt_tlsf_prepareSize($1 | 0) | 0;
  $4 = $lib_rt_tlsf_searchBlock($0 | 0, $3 | 0) | 0;
  if (!$4) {
   if ($lib_gc_gc_auto) {
    $lib_rt_tlsf_collectLock = 1;
    $lib_rt_pure___collect();
    $lib_rt_tlsf_collectLock = 0;
    $4 = $lib_rt_tlsf_searchBlock($0 | 0, $3 | 0) | 0;
    if (!$4) {
     $lib_rt_tlsf_growMemory($0 | 0, $3 | 0);
     $4 = $lib_rt_tlsf_searchBlock($0 | 0, $3 | 0) | 0;
     if (!$4) {
      $lib_builtins_abort(0 | 0, 32 | 0, 512 | 0, 20 | 0);
      abort();
     }
    }
   } else {
    $lib_rt_tlsf_growMemory($0 | 0, $3 | 0);
    $4 = $lib_rt_tlsf_searchBlock($0 | 0, $3 | 0) | 0;
    if (!$4) {
     $lib_builtins_abort(0 | 0, 32 | 0, 517 | 0, 18 | 0);
     abort();
    }
   }
  }
  if (!(((HEAP32[$4 >> 2] | 0) & (3 ^ -1 | 0) | 0) >>> 0 >= $3 >>> 0)) {
   $lib_builtins_abort(0 | 0, 32 | 0, 520 | 0, 14 | 0);
   abort();
  }
  HEAP32[($4 + 4 | 0) >> 2] = 0;
  HEAP32[($4 + 8 | 0) >> 2] = $2;
  HEAP32[($4 + 12 | 0) >> 2] = $1;
  $lib_rt_tlsf_removeBlock($0 | 0, $4 | 0);
  $lib_rt_tlsf_prepareBlock($0 | 0, $4 | 0, $3 | 0);
  return $4 | 0;
 }
 
 function $lib_rt_tlsf___alloc($0, $1) {
  $0 = $0 | 0;
  $1 = $1 | 0;
  return ($lib_rt_tlsf_allocateBlock($lib_rt_tlsf_maybeInitialize() | 0 | 0, $0 | 0, $1 | 0) | 0) + 16 | 0 | 0;
 }
 
 function $lib_rt_pure_increment($0) {
  $0 = $0 | 0;
  var $1 = 0;
  $1 = HEAP32[($0 + 4 | 0) >> 2] | 0;
  if (!(($1 & (268435455 ^ -1 | 0) | 0 | 0) == (($1 + 1 | 0) & (268435455 ^ -1 | 0) | 0 | 0))) {
   $lib_builtins_abort(0 | 0, 144 | 0, 109 | 0, 3 | 0);
   abort();
  }
  HEAP32[($0 + 4 | 0) >> 2] = $1 + 1 | 0;
  if (!!((HEAP32[$0 >> 2] | 0) & 1 | 0)) {
   $lib_builtins_abort(0 | 0, 144 | 0, 112 | 0, 14 | 0);
   abort();
  }
 }
 
 function $lib_rt_pure___retain($0) {
  $0 = $0 | 0;
  if ($0 >>> 0 > $lib_heap___heap_base >>> 0) {
   $lib_rt_pure_increment($0 - 16 | 0 | 0)
  }
  return $0 | 0;
 }
 
 function $lib_rt_pure___release($0) {
  $0 = $0 | 0;
  if ($0 >>> 0 > $lib_heap___heap_base >>> 0) {
   $lib_rt_pure_decrement($0 - 16 | 0 | 0)
  }
 }
 
 function assembly_index_modpow($0, $0$hi, $1, $1$hi, $2, $2$hi) {
  $0 = $0 | 0;
  $0$hi = $0$hi | 0;
  $1 = $1 | 0;
  $1$hi = $1$hi | 0;
  $2 = $2 | 0;
  $2$hi = $2$hi | 0;
  var i64toi32_i32$3 = 0, i64toi32_i32$0 = 0, i64toi32_i32$2 = 0, i64toi32_i32$1 = 0, i64toi32_i32$4 = 0, $3$hi = 0, $3 = 0, $15 = 0, $18$hi = 0, $16 = 0, $25$hi = 0, $17 = 0;
  i64toi32_i32$0 = $2$hi;
  i64toi32_i32$2 = $2;
  i64toi32_i32$1 = 0;
  i64toi32_i32$3 = 1;
  if ((i64toi32_i32$2 | 0) == (i64toi32_i32$3 | 0) & (i64toi32_i32$0 | 0) == (i64toi32_i32$1 | 0) | 0) {
   i64toi32_i32$2 = 0;
   i64toi32_i32$0 = 0;
   i64toi32_i32$HIGH_BITS = i64toi32_i32$2;
   return i64toi32_i32$0 | 0;
  }
  i64toi32_i32$0 = 0;
  $3 = 1;
  $3$hi = i64toi32_i32$0;
  i64toi32_i32$0 = $0$hi;
  i64toi32_i32$0 = $2$hi;
  i64toi32_i32$0 = $0$hi;
  i64toi32_i32$2 = $2$hi;
  i64toi32_i32$2 = __wasm_i64_urem($0 | 0, i64toi32_i32$0 | 0, $2 | 0, i64toi32_i32$2 | 0) | 0;
  i64toi32_i32$0 = i64toi32_i32$HIGH_BITS;
  $0 = i64toi32_i32$2;
  $0$hi = i64toi32_i32$0;
  while_continue_0 : while (1) {
   i64toi32_i32$0 = $1$hi;
   i64toi32_i32$3 = $1;
   i64toi32_i32$2 = 0;
   i64toi32_i32$1 = 0;
   if (i64toi32_i32$0 >>> 0 > i64toi32_i32$2 >>> 0 | ((i64toi32_i32$0 | 0) == (i64toi32_i32$2 | 0) & i64toi32_i32$3 >>> 0 > i64toi32_i32$1 >>> 0 | 0) | 0) {
    i64toi32_i32$3 = $1$hi;
    i64toi32_i32$0 = 0;
    i64toi32_i32$0 = __wasm_i64_urem($1 | 0, i64toi32_i32$3 | 0, 2 | 0, i64toi32_i32$0 | 0) | 0;
    i64toi32_i32$3 = i64toi32_i32$HIGH_BITS;
    i64toi32_i32$1 = i64toi32_i32$0;
    i64toi32_i32$0 = 0;
    i64toi32_i32$2 = 1;
    if ((i64toi32_i32$1 | 0) == (i64toi32_i32$2 | 0) & (i64toi32_i32$3 | 0) == (i64toi32_i32$0 | 0) | 0) {
     i64toi32_i32$1 = $3$hi;
     i64toi32_i32$1 = $0$hi;
     i64toi32_i32$1 = $3$hi;
     i64toi32_i32$3 = $0$hi;
     i64toi32_i32$3 = __wasm_i64_mul($3 | 0, i64toi32_i32$1 | 0, $0 | 0, i64toi32_i32$3 | 0) | 0;
     i64toi32_i32$1 = i64toi32_i32$HIGH_BITS;
     $18$hi = i64toi32_i32$1;
     i64toi32_i32$1 = $2$hi;
     i64toi32_i32$1 = $18$hi;
     $16 = i64toi32_i32$3;
     i64toi32_i32$3 = $2$hi;
     i64toi32_i32$3 = __wasm_i64_urem($16 | 0, i64toi32_i32$1 | 0, $2 | 0, i64toi32_i32$3 | 0) | 0;
     i64toi32_i32$1 = i64toi32_i32$HIGH_BITS;
     $3 = i64toi32_i32$3;
     $3$hi = i64toi32_i32$1;
    }
    i64toi32_i32$1 = $1$hi;
    i64toi32_i32$2 = $1;
    i64toi32_i32$3 = 0;
    i64toi32_i32$0 = 1;
    i64toi32_i32$4 = i64toi32_i32$0 & 31 | 0;
    if (32 >>> 0 <= (i64toi32_i32$0 & 63 | 0) >>> 0) {
     i64toi32_i32$3 = 0;
     $15 = i64toi32_i32$1 >>> i64toi32_i32$4 | 0;
    } else {
     i64toi32_i32$3 = i64toi32_i32$1 >>> i64toi32_i32$4 | 0;
     $15 = (((1 << i64toi32_i32$4 | 0) - 1 | 0) & i64toi32_i32$1 | 0) << (32 - i64toi32_i32$4 | 0) | 0 | (i64toi32_i32$2 >>> i64toi32_i32$4 | 0) | 0;
    }
    $1 = $15;
    $1$hi = i64toi32_i32$3;
    i64toi32_i32$3 = $0$hi;
    i64toi32_i32$2 = i64toi32_i32$3;
    i64toi32_i32$2 = __wasm_i64_mul($0 | 0, i64toi32_i32$3 | 0, $0 | 0, i64toi32_i32$3 | 0) | 0;
    i64toi32_i32$3 = i64toi32_i32$HIGH_BITS;
    $25$hi = i64toi32_i32$3;
    i64toi32_i32$3 = $2$hi;
    i64toi32_i32$3 = $25$hi;
    $17 = i64toi32_i32$2;
    i64toi32_i32$2 = $2$hi;
    i64toi32_i32$2 = __wasm_i64_urem($17 | 0, i64toi32_i32$3 | 0, $2 | 0, i64toi32_i32$2 | 0) | 0;
    i64toi32_i32$3 = i64toi32_i32$HIGH_BITS;
    $0 = i64toi32_i32$2;
    $0$hi = i64toi32_i32$3;
    continue while_continue_0;
   }
   break while_continue_0;
  };
  i64toi32_i32$3 = $3$hi;
  i64toi32_i32$2 = $3;
  i64toi32_i32$HIGH_BITS = i64toi32_i32$3;
  return i64toi32_i32$2 | 0;
 }
 
 function $lib_math_murmurHash3($0, $0$hi) {
  $0 = $0 | 0;
  $0$hi = $0$hi | 0;
  var i64toi32_i32$2 = 0, i64toi32_i32$0 = 0, i64toi32_i32$1 = 0, i64toi32_i32$4 = 0, i64toi32_i32$3 = 0, $16 = 0, $17 = 0, $18 = 0, $1 = 0, $1$hi = 0, $3$hi = 0, $7 = 0, $7$hi = 0, $9$hi = 0, $13 = 0, $13$hi = 0, $15$hi = 0;
  i64toi32_i32$0 = $0$hi;
  $1 = $0;
  $1$hi = i64toi32_i32$0;
  i64toi32_i32$2 = $0;
  i64toi32_i32$1 = 0;
  i64toi32_i32$3 = 33;
  i64toi32_i32$4 = i64toi32_i32$3 & 31 | 0;
  if (32 >>> 0 <= (i64toi32_i32$3 & 63 | 0) >>> 0) {
   i64toi32_i32$1 = 0;
   $16 = i64toi32_i32$0 >>> i64toi32_i32$4 | 0;
  } else {
   i64toi32_i32$1 = i64toi32_i32$0 >>> i64toi32_i32$4 | 0;
   $16 = (((1 << i64toi32_i32$4 | 0) - 1 | 0) & i64toi32_i32$0 | 0) << (32 - i64toi32_i32$4 | 0) | 0 | (i64toi32_i32$2 >>> i64toi32_i32$4 | 0) | 0;
  }
  $3$hi = i64toi32_i32$1;
  i64toi32_i32$1 = $1$hi;
  i64toi32_i32$0 = $1;
  i64toi32_i32$2 = $3$hi;
  i64toi32_i32$3 = $16;
  i64toi32_i32$2 = i64toi32_i32$1 ^ i64toi32_i32$2 | 0;
  $0 = i64toi32_i32$0 ^ i64toi32_i32$3 | 0;
  $0$hi = i64toi32_i32$2;
  i64toi32_i32$0 = -11423785;
  i64toi32_i32$0 = __wasm_i64_mul($0 | 0, i64toi32_i32$2 | 0, -313160499 | 0, i64toi32_i32$0 | 0) | 0;
  i64toi32_i32$2 = i64toi32_i32$HIGH_BITS;
  $0 = i64toi32_i32$0;
  $0$hi = i64toi32_i32$2;
  $7 = i64toi32_i32$0;
  $7$hi = i64toi32_i32$2;
  i64toi32_i32$1 = i64toi32_i32$0;
  i64toi32_i32$0 = 0;
  i64toi32_i32$3 = 33;
  i64toi32_i32$4 = i64toi32_i32$3 & 31 | 0;
  if (32 >>> 0 <= (i64toi32_i32$3 & 63 | 0) >>> 0) {
   i64toi32_i32$0 = 0;
   $17 = i64toi32_i32$2 >>> i64toi32_i32$4 | 0;
  } else {
   i64toi32_i32$0 = i64toi32_i32$2 >>> i64toi32_i32$4 | 0;
   $17 = (((1 << i64toi32_i32$4 | 0) - 1 | 0) & i64toi32_i32$2 | 0) << (32 - i64toi32_i32$4 | 0) | 0 | (i64toi32_i32$1 >>> i64toi32_i32$4 | 0) | 0;
  }
  $9$hi = i64toi32_i32$0;
  i64toi32_i32$0 = $7$hi;
  i64toi32_i32$2 = $7;
  i64toi32_i32$1 = $9$hi;
  i64toi32_i32$3 = $17;
  i64toi32_i32$1 = i64toi32_i32$0 ^ i64toi32_i32$1 | 0;
  $0 = i64toi32_i32$2 ^ i64toi32_i32$3 | 0;
  $0$hi = i64toi32_i32$1;
  i64toi32_i32$2 = -993084930;
  i64toi32_i32$2 = __wasm_i64_mul($0 | 0, i64toi32_i32$1 | 0, 444984403 | 0, i64toi32_i32$2 | 0) | 0;
  i64toi32_i32$1 = i64toi32_i32$HIGH_BITS;
  $0 = i64toi32_i32$2;
  $0$hi = i64toi32_i32$1;
  $13 = i64toi32_i32$2;
  $13$hi = i64toi32_i32$1;
  i64toi32_i32$0 = i64toi32_i32$2;
  i64toi32_i32$2 = 0;
  i64toi32_i32$3 = 33;
  i64toi32_i32$4 = i64toi32_i32$3 & 31 | 0;
  if (32 >>> 0 <= (i64toi32_i32$3 & 63 | 0) >>> 0) {
   i64toi32_i32$2 = 0;
   $18 = i64toi32_i32$1 >>> i64toi32_i32$4 | 0;
  } else {
   i64toi32_i32$2 = i64toi32_i32$1 >>> i64toi32_i32$4 | 0;
   $18 = (((1 << i64toi32_i32$4 | 0) - 1 | 0) & i64toi32_i32$1 | 0) << (32 - i64toi32_i32$4 | 0) | 0 | (i64toi32_i32$0 >>> i64toi32_i32$4 | 0) | 0;
  }
  $15$hi = i64toi32_i32$2;
  i64toi32_i32$2 = $13$hi;
  i64toi32_i32$1 = $13;
  i64toi32_i32$0 = $15$hi;
  i64toi32_i32$3 = $18;
  i64toi32_i32$0 = i64toi32_i32$2 ^ i64toi32_i32$0 | 0;
  $0 = i64toi32_i32$1 ^ i64toi32_i32$3 | 0;
  $0$hi = i64toi32_i32$0;
  i64toi32_i32$1 = $0;
  i64toi32_i32$HIGH_BITS = i64toi32_i32$0;
  return i64toi32_i32$1 | 0;
 }
 
 function $lib_math_splitMix32($0) {
  $0 = $0 | 0;
  $0 = $0 + 1831565813 | 0;
  $0 = Math_imul($0 ^ ($0 >>> 15 | 0) | 0, $0 | 1 | 0);
  $0 = $0 ^ ($0 + Math_imul($0 ^ ($0 >>> 7 | 0) | 0, $0 | 61 | 0) | 0) | 0;
  return $0 ^ ($0 >>> 14 | 0) | 0 | 0;
 }
 
 function $lib_math_NativeMath_seedRandom($0, $0$hi) {
  $0 = $0 | 0;
  $0$hi = $0$hi | 0;
  var i64toi32_i32$0 = 0, i64toi32_i32$2 = 0, i64toi32_i32$1 = 0, i64toi32_i32$3 = 0, $15 = 0, $19 = 0, $23 = 0;
  $lib_math_random_seeded = 1;
  i64toi32_i32$0 = $0$hi;
  i64toi32_i32$0 = $lib_math_murmurHash3($0 | 0, i64toi32_i32$0 | 0) | 0;
  i64toi32_i32$1 = i64toi32_i32$HIGH_BITS;
  $lib_math_random_state0_64 = i64toi32_i32$0;
  $lib_math_random_state0_64$hi = i64toi32_i32$1;
  i64toi32_i32$1 = $lib_math_random_state0_64$hi;
  i64toi32_i32$2 = $lib_math_random_state0_64;
  i64toi32_i32$0 = -1;
  i64toi32_i32$3 = -1;
  i64toi32_i32$0 = i64toi32_i32$1 ^ i64toi32_i32$0 | 0;
  i64toi32_i32$0 = $lib_math_murmurHash3(i64toi32_i32$2 ^ i64toi32_i32$3 | 0 | 0, i64toi32_i32$0 | 0) | 0;
  i64toi32_i32$2 = i64toi32_i32$HIGH_BITS;
  $lib_math_random_state1_64 = i64toi32_i32$0;
  $lib_math_random_state1_64$hi = i64toi32_i32$2;
  i64toi32_i32$2 = $0$hi;
  $lib_math_random_state0_32 = $lib_math_splitMix32($0 | 0) | 0;
  $lib_math_random_state1_32 = $lib_math_splitMix32($lib_math_random_state0_32 | 0) | 0;
  i64toi32_i32$2 = $lib_math_random_state0_64$hi;
  i64toi32_i32$1 = $lib_math_random_state0_64;
  i64toi32_i32$0 = 0;
  i64toi32_i32$3 = 0;
  if ((i64toi32_i32$1 | 0) != (i64toi32_i32$3 | 0) | (i64toi32_i32$2 | 0) != (i64toi32_i32$0 | 0) | 0) {
   i64toi32_i32$1 = $lib_math_random_state1_64$hi;
   i64toi32_i32$3 = $lib_math_random_state1_64;
   i64toi32_i32$2 = 0;
   i64toi32_i32$0 = 0;
   $15 = (i64toi32_i32$3 | 0) != (i64toi32_i32$0 | 0) | (i64toi32_i32$1 | 0) != (i64toi32_i32$2 | 0) | 0;
  } else {
   $15 = 0
  }
  if ($15) {
   $19 = ($lib_math_random_state0_32 | 0) != (0 | 0)
  } else {
   $19 = 0
  }
  if ($19) {
   $23 = ($lib_math_random_state1_32 | 0) != (0 | 0)
  } else {
   $23 = 0
  }
  if (!$23) {
   $lib_builtins_abort(0 | 0, 192 | 0, 1398 | 0, 5 | 0);
   abort();
  }
 }
 
 function $lib_math_NativeMath_random() {
  var i64toi32_i32$0 = 0, i64toi32_i32$2 = 0, i64toi32_i32$1 = 0, i64toi32_i32$4 = 0, i64toi32_i32$3 = 0, $0 = 0, $0$hi = 0, $1$hi = 0, $1 = 0, $18 = 0, $19 = 0, $20 = 0, $22 = 0, $10 = 0, $10$hi = 0, $12$hi = 0, $14 = 0, $14$hi = 0, $16$hi = 0, $21 = 0, $21$hi = 0, $23$hi = 0;
  if (!$lib_math_random_seeded) {
   wasm2js_scratch_store_f64(+(+$lib_builtins_seed()));
   i64toi32_i32$0 = wasm2js_scratch_load_i32(1 | 0) | 0;
   $lib_math_NativeMath_seedRandom(wasm2js_scratch_load_i32(0 | 0) | 0 | 0, i64toi32_i32$0 | 0);
  }
  i64toi32_i32$0 = $lib_math_random_state0_64$hi;
  $0 = $lib_math_random_state0_64;
  $0$hi = i64toi32_i32$0;
  i64toi32_i32$0 = $lib_math_random_state1_64$hi;
  $1 = $lib_math_random_state1_64;
  $1$hi = i64toi32_i32$0;
  $lib_math_random_state0_64 = $1;
  $lib_math_random_state0_64$hi = i64toi32_i32$0;
  i64toi32_i32$0 = $0$hi;
  $10 = $0;
  $10$hi = i64toi32_i32$0;
  i64toi32_i32$2 = $0;
  i64toi32_i32$1 = 0;
  i64toi32_i32$3 = 23;
  i64toi32_i32$4 = i64toi32_i32$3 & 31 | 0;
  if (32 >>> 0 <= (i64toi32_i32$3 & 63 | 0) >>> 0) {
   i64toi32_i32$1 = i64toi32_i32$2 << i64toi32_i32$4 | 0;
   $18 = 0;
  } else {
   i64toi32_i32$1 = ((1 << i64toi32_i32$4 | 0) - 1 | 0) & (i64toi32_i32$2 >>> (32 - i64toi32_i32$4 | 0) | 0) | 0 | (i64toi32_i32$0 << i64toi32_i32$4 | 0) | 0;
   $18 = i64toi32_i32$2 << i64toi32_i32$4 | 0;
  }
  $12$hi = i64toi32_i32$1;
  i64toi32_i32$1 = $10$hi;
  i64toi32_i32$0 = $10;
  i64toi32_i32$2 = $12$hi;
  i64toi32_i32$3 = $18;
  i64toi32_i32$2 = i64toi32_i32$1 ^ i64toi32_i32$2 | 0;
  $0 = i64toi32_i32$0 ^ i64toi32_i32$3 | 0;
  $0$hi = i64toi32_i32$2;
  $14 = $0;
  $14$hi = i64toi32_i32$2;
  i64toi32_i32$1 = $0;
  i64toi32_i32$0 = 0;
  i64toi32_i32$3 = 17;
  i64toi32_i32$4 = i64toi32_i32$3 & 31 | 0;
  if (32 >>> 0 <= (i64toi32_i32$3 & 63 | 0) >>> 0) {
   i64toi32_i32$0 = 0;
   $19 = i64toi32_i32$2 >>> i64toi32_i32$4 | 0;
  } else {
   i64toi32_i32$0 = i64toi32_i32$2 >>> i64toi32_i32$4 | 0;
   $19 = (((1 << i64toi32_i32$4 | 0) - 1 | 0) & i64toi32_i32$2 | 0) << (32 - i64toi32_i32$4 | 0) | 0 | (i64toi32_i32$1 >>> i64toi32_i32$4 | 0) | 0;
  }
  $16$hi = i64toi32_i32$0;
  i64toi32_i32$0 = $14$hi;
  i64toi32_i32$2 = $14;
  i64toi32_i32$1 = $16$hi;
  i64toi32_i32$3 = $19;
  i64toi32_i32$1 = i64toi32_i32$0 ^ i64toi32_i32$1 | 0;
  $0 = i64toi32_i32$2 ^ i64toi32_i32$3 | 0;
  $0$hi = i64toi32_i32$1;
  i64toi32_i32$1 = $1$hi;
  i64toi32_i32$1 = $0$hi;
  i64toi32_i32$0 = $0;
  i64toi32_i32$2 = $1$hi;
  i64toi32_i32$3 = $1;
  i64toi32_i32$2 = i64toi32_i32$1 ^ i64toi32_i32$2 | 0;
  $0 = i64toi32_i32$0 ^ i64toi32_i32$3 | 0;
  $0$hi = i64toi32_i32$2;
  $21 = $0;
  $21$hi = i64toi32_i32$2;
  i64toi32_i32$2 = $1$hi;
  i64toi32_i32$1 = i64toi32_i32$3;
  i64toi32_i32$0 = 0;
  i64toi32_i32$3 = 26;
  i64toi32_i32$4 = i64toi32_i32$3 & 31 | 0;
  if (32 >>> 0 <= (i64toi32_i32$3 & 63 | 0) >>> 0) {
   i64toi32_i32$0 = 0;
   $20 = i64toi32_i32$2 >>> i64toi32_i32$4 | 0;
  } else {
   i64toi32_i32$0 = i64toi32_i32$2 >>> i64toi32_i32$4 | 0;
   $20 = (((1 << i64toi32_i32$4 | 0) - 1 | 0) & i64toi32_i32$2 | 0) << (32 - i64toi32_i32$4 | 0) | 0 | (i64toi32_i32$1 >>> i64toi32_i32$4 | 0) | 0;
  }
  $23$hi = i64toi32_i32$0;
  i64toi32_i32$0 = $21$hi;
  i64toi32_i32$2 = $21;
  i64toi32_i32$1 = $23$hi;
  i64toi32_i32$3 = $20;
  i64toi32_i32$1 = i64toi32_i32$0 ^ i64toi32_i32$1 | 0;
  $0 = i64toi32_i32$2 ^ i64toi32_i32$3 | 0;
  $0$hi = i64toi32_i32$1;
  $lib_math_random_state1_64 = $0;
  $lib_math_random_state1_64$hi = i64toi32_i32$1;
  i64toi32_i32$1 = $1$hi;
  i64toi32_i32$0 = $1;
  i64toi32_i32$2 = 0;
  i64toi32_i32$3 = 12;
  i64toi32_i32$4 = i64toi32_i32$3 & 31 | 0;
  if (32 >>> 0 <= (i64toi32_i32$3 & 63 | 0) >>> 0) {
   i64toi32_i32$2 = 0;
   $22 = i64toi32_i32$1 >>> i64toi32_i32$4 | 0;
  } else {
   i64toi32_i32$2 = i64toi32_i32$1 >>> i64toi32_i32$4 | 0;
   $22 = (((1 << i64toi32_i32$4 | 0) - 1 | 0) & i64toi32_i32$1 | 0) << (32 - i64toi32_i32$4 | 0) | 0 | (i64toi32_i32$0 >>> i64toi32_i32$4 | 0) | 0;
  }
  i64toi32_i32$1 = $22;
  i64toi32_i32$0 = 1072693248;
  i64toi32_i32$3 = 0;
  i64toi32_i32$0 = i64toi32_i32$2 | i64toi32_i32$0 | 0;
  wasm2js_scratch_store_i32(0 | 0, i64toi32_i32$1 | i64toi32_i32$3 | 0 | 0);
  wasm2js_scratch_store_i32(1 | 0, i64toi32_i32$0 | 0);
  return +(+wasm2js_scratch_load_f64() - 1.0);
 }
 
 function assembly_index_rng_gen_range($0, $0$hi, $1, $1$hi) {
  $0 = $0 | 0;
  $0$hi = $0$hi | 0;
  $1 = $1 | 0;
  $1$hi = $1$hi | 0;
  var i64toi32_i32$0 = 0.0, i64toi32_i32$1 = 0, i64toi32_i32$6 = 0, i64toi32_i32$5 = 0, i64toi32_i32$4 = 0, i64toi32_i32$3 = 0, i64toi32_i32$2 = 0, $12 = 0, $13 = 0, $14 = 0, $15 = 0, $2 = 0.0;
  i64toi32_i32$0 = +$lib_bindings_Date_now();
  if (Math_abs(i64toi32_i32$0) >= 1.0) {
   if (i64toi32_i32$0 > 0.0) {
    $13 = ~~Math_min(Math_floor(i64toi32_i32$0 / 4294967296.0), 4294967296.0 - 1.0) >>> 0
   } else {
    $13 = ~~Math_ceil((i64toi32_i32$0 - +(~~i64toi32_i32$0 >>> 0 >>> 0)) / 4294967296.0) >>> 0
   }
   $14 = $13;
  } else {
   $14 = 0
  }
  i64toi32_i32$1 = $14;
  $lib_math_NativeMath_seedRandom(~~i64toi32_i32$0 >>> 0 | 0, i64toi32_i32$1 | 0);
  i64toi32_i32$1 = $1$hi;
  i64toi32_i32$1 = $0$hi;
  i64toi32_i32$1 = $1$hi;
  i64toi32_i32$3 = $1;
  i64toi32_i32$2 = $0$hi;
  i64toi32_i32$4 = $0;
  i64toi32_i32$5 = i64toi32_i32$3 - i64toi32_i32$4 | 0;
  i64toi32_i32$6 = (i64toi32_i32$3 >>> 0 < i64toi32_i32$4 >>> 0) + $0$hi | 0;
  i64toi32_i32$6 = i64toi32_i32$1 - i64toi32_i32$6 | 0;
  i64toi32_i32$3 = i64toi32_i32$5;
  i64toi32_i32$1 = 0;
  $2 = +(i64toi32_i32$5 >>> 0) + 4294967296.0 * +(i64toi32_i32$6 >>> 0);
  i64toi32_i32$0 = Math_floor(+$lib_math_NativeMath_random() * $2);
  if (Math_abs(i64toi32_i32$0) >= 1.0) {
   if (i64toi32_i32$0 > 0.0) {
    $15 = ~~Math_min(Math_floor(i64toi32_i32$0 / 4294967296.0), 4294967296.0 - 1.0) >>> 0
   } else {
    $15 = ~~Math_ceil((i64toi32_i32$0 - +(~~i64toi32_i32$0 >>> 0 >>> 0)) / 4294967296.0) >>> 0
   }
   $12 = $15;
  } else {
   $12 = 0
  }
  i64toi32_i32$6 = $12;
  i64toi32_i32$6 = $0$hi;
  i64toi32_i32$6 = $12;
  i64toi32_i32$1 = ~~i64toi32_i32$0 >>> 0;
  i64toi32_i32$3 = $0$hi;
  i64toi32_i32$4 = $0;
  i64toi32_i32$2 = i64toi32_i32$1 + i64toi32_i32$4 | 0;
  i64toi32_i32$5 = i64toi32_i32$6 + $0$hi | 0;
  if (i64toi32_i32$2 >>> 0 < i64toi32_i32$4 >>> 0) {
   i64toi32_i32$5 = i64toi32_i32$5 + 1 | 0
  }
  i64toi32_i32$1 = i64toi32_i32$2;
  i64toi32_i32$HIGH_BITS = i64toi32_i32$5;
  return i64toi32_i32$1 | 0;
 }
 
 function assembly_index_primeCheck($0, $0$hi, $1) {
  $0 = $0 | 0;
  $0$hi = $0$hi | 0;
  $1 = $1 | 0;
  var i64toi32_i32$2 = 0, i64toi32_i32$1 = 0, i64toi32_i32$5 = 0, i64toi32_i32$0 = 0, i64toi32_i32$3 = 0, i64toi32_i32$4 = 0, i64toi32_i32$6 = 0, $9 = 0, $18$hi = 0, $20 = 0, $20$hi = 0, $22$hi = 0;
  i64toi32_i32$0 = $0$hi;
  i64toi32_i32$2 = $0;
  i64toi32_i32$1 = 0;
  i64toi32_i32$3 = 1;
  if ((i64toi32_i32$2 | 0) == (i64toi32_i32$3 | 0) & (i64toi32_i32$0 | 0) == (i64toi32_i32$1 | 0) | 0) {
   $9 = 1
  } else {
   i64toi32_i32$2 = $0$hi;
   i64toi32_i32$3 = $0;
   i64toi32_i32$0 = 0;
   i64toi32_i32$1 = 3;
   $9 = (i64toi32_i32$3 | 0) == (i64toi32_i32$1 | 0) & (i64toi32_i32$2 | 0) == (i64toi32_i32$0 | 0) | 0;
  }
  if ($9) {
   return 1 | 0
  } else {
   i64toi32_i32$3 = $0$hi;
   i64toi32_i32$2 = 0;
   i64toi32_i32$2 = __wasm_i64_urem($0 | 0, i64toi32_i32$3 | 0, 2 | 0, i64toi32_i32$2 | 0) | 0;
   i64toi32_i32$3 = i64toi32_i32$HIGH_BITS;
   i64toi32_i32$1 = i64toi32_i32$2;
   i64toi32_i32$2 = 0;
   i64toi32_i32$0 = 0;
   if ((i64toi32_i32$1 | 0) == (i64toi32_i32$0 | 0) & (i64toi32_i32$3 | 0) == (i64toi32_i32$2 | 0) | 0) {
    return 0 | 0
   }
  }
  while_continue_0 : while (1) {
   if (($1 | 0) > (0 | 0)) {
    i64toi32_i32$1 = $0$hi;
    i64toi32_i32$0 = $0;
    i64toi32_i32$3 = 0;
    i64toi32_i32$2 = 2;
    i64toi32_i32$4 = i64toi32_i32$0 - i64toi32_i32$2 | 0;
    i64toi32_i32$6 = i64toi32_i32$0 >>> 0 < i64toi32_i32$2 >>> 0;
    i64toi32_i32$5 = i64toi32_i32$6 + i64toi32_i32$3 | 0;
    i64toi32_i32$5 = i64toi32_i32$1 - i64toi32_i32$5 | 0;
    $18$hi = i64toi32_i32$5;
    i64toi32_i32$5 = 0;
    i64toi32_i32$0 = $18$hi;
    i64toi32_i32$0 = assembly_index_rng_gen_range(2 | 0, i64toi32_i32$5 | 0, i64toi32_i32$4 | 0, i64toi32_i32$0 | 0) | 0;
    i64toi32_i32$5 = i64toi32_i32$HIGH_BITS;
    $20 = i64toi32_i32$0;
    $20$hi = i64toi32_i32$5;
    i64toi32_i32$5 = i64toi32_i32$1;
    i64toi32_i32$5 = i64toi32_i32$1;
    i64toi32_i32$1 = $0;
    i64toi32_i32$0 = 0;
    i64toi32_i32$2 = 1;
    i64toi32_i32$3 = i64toi32_i32$1 - i64toi32_i32$2 | 0;
    i64toi32_i32$6 = i64toi32_i32$1 >>> 0 < i64toi32_i32$2 >>> 0;
    i64toi32_i32$4 = i64toi32_i32$6 + i64toi32_i32$0 | 0;
    i64toi32_i32$4 = i64toi32_i32$5 - i64toi32_i32$4 | 0;
    $22$hi = i64toi32_i32$4;
    i64toi32_i32$4 = i64toi32_i32$5;
    i64toi32_i32$4 = $20$hi;
    i64toi32_i32$1 = $22$hi;
    i64toi32_i32$5 = assembly_index_modpow($20 | 0, i64toi32_i32$4 | 0, i64toi32_i32$3 | 0, i64toi32_i32$1 | 0, $0 | 0, i64toi32_i32$5 | 0) | 0;
    i64toi32_i32$1 = i64toi32_i32$HIGH_BITS;
    i64toi32_i32$4 = i64toi32_i32$5;
    i64toi32_i32$5 = 0;
    i64toi32_i32$2 = 1;
    if ((i64toi32_i32$4 | 0) != (i64toi32_i32$2 | 0) | (i64toi32_i32$1 | 0) != (i64toi32_i32$5 | 0) | 0) {
     return 0 | 0
    }
    $1 = $1 - 1 | 0;
    continue while_continue_0;
   }
   break while_continue_0;
  };
  return 1 | 0;
 }
 
 function $lib_rt_pure___collect() {
  return;
 }
 
 function $lib_rt_tlsf_freeBlock($0, $1) {
  $0 = $0 | 0;
  $1 = $1 | 0;
  HEAP32[$1 >> 2] = HEAP32[$1 >> 2] | 0 | 1 | 0;
  $lib_rt_tlsf_insertBlock($0 | 0, $1 | 0);
 }
 
 function $lib_rt_pure_finalize($0) {
  $0 = $0 | 0;
  $lib_rt_tlsf_freeBlock($lib_rt_tlsf_ROOT | 0, $0 | 0);
 }
 
 function $lib_rt_pure_decrement($0) {
  $0 = $0 | 0;
  var $1 = 0, $2 = 0;
  $1 = HEAP32[($0 + 4 | 0) >> 2] | 0;
  $2 = $1 & 268435455 | 0;
  if (!!((HEAP32[$0 >> 2] | 0) & 1 | 0)) {
   $lib_builtins_abort(0 | 0, 144 | 0, 122 | 0, 14 | 0);
   abort();
  }
  if (($2 | 0) == (1 | 0)) {
   $lib_rt___visit_members($0 + 16 | 0 | 0, 1 | 0);
   if (!!($1 & -2147483648 | 0)) {
    $lib_builtins_abort(0 | 0, 144 | 0, 126 | 0, 18 | 0);
    abort();
   }
   $lib_rt_pure_finalize($0 | 0);
  } else {
   if (!($2 >>> 0 > 0 >>> 0)) {
    $lib_builtins_abort(0 | 0, 144 | 0, 136 | 0, 16 | 0);
    abort();
   }
   HEAP32[($0 + 4 | 0) >> 2] = $1 & (268435455 ^ -1 | 0) | 0 | ($2 - 1 | 0) | 0;
  }
 }
 
 function $lib_rt_pure___visit($0, $1) {
  $0 = $0 | 0;
  $1 = $1 | 0;
  if ($0 >>> 0 < $lib_heap___heap_base >>> 0) {
   return
  }
  if (!(($1 | 0) == (1 | 0))) {
   $lib_builtins_abort(0 | 0, 144 | 0, 69 | 0, 16 | 0);
   abort();
  }
  $lib_rt_pure_decrement($0 - 16 | 0 | 0);
 }
 
 function $lib_rt___visit_members($0, $1) {
  $0 = $0 | 0;
  $1 = $1 | 0;
  var $2 = 0;
  switch$1$leave : {
   switch (HEAP32[($0 - 8 | 0) >> 2] | 0 | 0) {
   case 0:
   case 1:
    return;
   case 2:
    $2 = HEAP32[$0 >> 2] | 0;
    if ($2) {
     $lib_rt_pure___visit($2 | 0, $1 | 0)
    }
    return;
   default:
    abort();
   };
  }
 }
 
 function legalstub$assembly_index_modpow($0, $1, $2, $3, $4, $5) {
  $0 = $0 | 0;
  $1 = $1 | 0;
  $2 = $2 | 0;
  $3 = $3 | 0;
  $4 = $4 | 0;
  $5 = $5 | 0;
  var i64toi32_i32$2 = 0, i64toi32_i32$1 = 0, i64toi32_i32$0 = 0, i64toi32_i32$4 = 0, i64toi32_i32$3 = 0, $28 = 0, $29 = 0, $30 = 0, $31 = 0, $8 = 0, $8$hi = 0, $11$hi = 0, $12 = 0, $12$hi = 0, $14 = 0, $14$hi = 0, $17$hi = 0, $18 = 0, $18$hi = 0, $20 = 0, $20$hi = 0, $23$hi = 0, $24 = 0, $24$hi = 0, $6 = 0, $6$hi = 0;
  i64toi32_i32$0 = 0;
  $8 = $0;
  $8$hi = i64toi32_i32$0;
  i64toi32_i32$0 = 0;
  i64toi32_i32$2 = $1;
  i64toi32_i32$1 = 0;
  i64toi32_i32$3 = 32;
  i64toi32_i32$4 = i64toi32_i32$3 & 31 | 0;
  if (32 >>> 0 <= (i64toi32_i32$3 & 63 | 0) >>> 0) {
   i64toi32_i32$1 = i64toi32_i32$2 << i64toi32_i32$4 | 0;
   $28 = 0;
  } else {
   i64toi32_i32$1 = ((1 << i64toi32_i32$4 | 0) - 1 | 0) & (i64toi32_i32$2 >>> (32 - i64toi32_i32$4 | 0) | 0) | 0 | (i64toi32_i32$0 << i64toi32_i32$4 | 0) | 0;
   $28 = i64toi32_i32$2 << i64toi32_i32$4 | 0;
  }
  $11$hi = i64toi32_i32$1;
  i64toi32_i32$1 = $8$hi;
  i64toi32_i32$0 = $8;
  i64toi32_i32$2 = $11$hi;
  i64toi32_i32$3 = $28;
  i64toi32_i32$2 = i64toi32_i32$1 | i64toi32_i32$2 | 0;
  $12 = i64toi32_i32$0 | i64toi32_i32$3 | 0;
  $12$hi = i64toi32_i32$2;
  i64toi32_i32$2 = 0;
  $14 = $2;
  $14$hi = i64toi32_i32$2;
  i64toi32_i32$2 = 0;
  i64toi32_i32$1 = $3;
  i64toi32_i32$0 = 0;
  i64toi32_i32$3 = 32;
  i64toi32_i32$4 = i64toi32_i32$3 & 31 | 0;
  if (32 >>> 0 <= (i64toi32_i32$3 & 63 | 0) >>> 0) {
   i64toi32_i32$0 = i64toi32_i32$1 << i64toi32_i32$4 | 0;
   $29 = 0;
  } else {
   i64toi32_i32$0 = ((1 << i64toi32_i32$4 | 0) - 1 | 0) & (i64toi32_i32$1 >>> (32 - i64toi32_i32$4 | 0) | 0) | 0 | (i64toi32_i32$2 << i64toi32_i32$4 | 0) | 0;
   $29 = i64toi32_i32$1 << i64toi32_i32$4 | 0;
  }
  $17$hi = i64toi32_i32$0;
  i64toi32_i32$0 = $14$hi;
  i64toi32_i32$2 = $14;
  i64toi32_i32$1 = $17$hi;
  i64toi32_i32$3 = $29;
  i64toi32_i32$1 = i64toi32_i32$0 | i64toi32_i32$1 | 0;
  $18 = i64toi32_i32$2 | i64toi32_i32$3 | 0;
  $18$hi = i64toi32_i32$1;
  i64toi32_i32$1 = 0;
  $20 = $4;
  $20$hi = i64toi32_i32$1;
  i64toi32_i32$1 = 0;
  i64toi32_i32$0 = $5;
  i64toi32_i32$2 = 0;
  i64toi32_i32$3 = 32;
  i64toi32_i32$4 = i64toi32_i32$3 & 31 | 0;
  if (32 >>> 0 <= (i64toi32_i32$3 & 63 | 0) >>> 0) {
   i64toi32_i32$2 = i64toi32_i32$0 << i64toi32_i32$4 | 0;
   $30 = 0;
  } else {
   i64toi32_i32$2 = ((1 << i64toi32_i32$4 | 0) - 1 | 0) & (i64toi32_i32$0 >>> (32 - i64toi32_i32$4 | 0) | 0) | 0 | (i64toi32_i32$1 << i64toi32_i32$4 | 0) | 0;
   $30 = i64toi32_i32$0 << i64toi32_i32$4 | 0;
  }
  $23$hi = i64toi32_i32$2;
  i64toi32_i32$2 = $20$hi;
  i64toi32_i32$1 = $20;
  i64toi32_i32$0 = $23$hi;
  i64toi32_i32$3 = $30;
  i64toi32_i32$0 = i64toi32_i32$2 | i64toi32_i32$0 | 0;
  $24 = i64toi32_i32$1 | i64toi32_i32$3 | 0;
  $24$hi = i64toi32_i32$0;
  i64toi32_i32$0 = $12$hi;
  i64toi32_i32$1 = $18$hi;
  i64toi32_i32$2 = $24$hi;
  i64toi32_i32$2 = assembly_index_modpow($12 | 0, i64toi32_i32$0 | 0, $18 | 0, i64toi32_i32$1 | 0, $24 | 0, i64toi32_i32$2 | 0) | 0;
  i64toi32_i32$1 = i64toi32_i32$HIGH_BITS;
  $6 = i64toi32_i32$2;
  $6$hi = i64toi32_i32$1;
  i64toi32_i32$0 = i64toi32_i32$2;
  i64toi32_i32$2 = 0;
  i64toi32_i32$3 = 32;
  i64toi32_i32$4 = i64toi32_i32$3 & 31 | 0;
  if (32 >>> 0 <= (i64toi32_i32$3 & 63 | 0) >>> 0) {
   i64toi32_i32$2 = 0;
   $31 = i64toi32_i32$1 >>> i64toi32_i32$4 | 0;
  } else {
   i64toi32_i32$2 = i64toi32_i32$1 >>> i64toi32_i32$4 | 0;
   $31 = (((1 << i64toi32_i32$4 | 0) - 1 | 0) & i64toi32_i32$1 | 0) << (32 - i64toi32_i32$4 | 0) | 0 | (i64toi32_i32$0 >>> i64toi32_i32$4 | 0) | 0;
  }
  setTempRet0($31 | 0);
  i64toi32_i32$2 = $6$hi;
  return $6 | 0;
 }
 
 function legalstub$assembly_index_rng_gen_range($0, $1, $2, $3) {
  $0 = $0 | 0;
  $1 = $1 | 0;
  $2 = $2 | 0;
  $3 = $3 | 0;
  var i64toi32_i32$2 = 0, i64toi32_i32$1 = 0, i64toi32_i32$4 = 0, i64toi32_i32$0 = 0, i64toi32_i32$3 = 0, $21 = 0, $22 = 0, $23 = 0, $6 = 0, $6$hi = 0, $9$hi = 0, $10 = 0, $10$hi = 0, $12 = 0, $12$hi = 0, $15$hi = 0, $16 = 0, $16$hi = 0, $4 = 0, $4$hi = 0;
  i64toi32_i32$0 = 0;
  $6 = $0;
  $6$hi = i64toi32_i32$0;
  i64toi32_i32$0 = 0;
  i64toi32_i32$2 = $1;
  i64toi32_i32$1 = 0;
  i64toi32_i32$3 = 32;
  i64toi32_i32$4 = i64toi32_i32$3 & 31 | 0;
  if (32 >>> 0 <= (i64toi32_i32$3 & 63 | 0) >>> 0) {
   i64toi32_i32$1 = i64toi32_i32$2 << i64toi32_i32$4 | 0;
   $21 = 0;
  } else {
   i64toi32_i32$1 = ((1 << i64toi32_i32$4 | 0) - 1 | 0) & (i64toi32_i32$2 >>> (32 - i64toi32_i32$4 | 0) | 0) | 0 | (i64toi32_i32$0 << i64toi32_i32$4 | 0) | 0;
   $21 = i64toi32_i32$2 << i64toi32_i32$4 | 0;
  }
  $9$hi = i64toi32_i32$1;
  i64toi32_i32$1 = $6$hi;
  i64toi32_i32$0 = $6;
  i64toi32_i32$2 = $9$hi;
  i64toi32_i32$3 = $21;
  i64toi32_i32$2 = i64toi32_i32$1 | i64toi32_i32$2 | 0;
  $10 = i64toi32_i32$0 | i64toi32_i32$3 | 0;
  $10$hi = i64toi32_i32$2;
  i64toi32_i32$2 = 0;
  $12 = $2;
  $12$hi = i64toi32_i32$2;
  i64toi32_i32$2 = 0;
  i64toi32_i32$1 = $3;
  i64toi32_i32$0 = 0;
  i64toi32_i32$3 = 32;
  i64toi32_i32$4 = i64toi32_i32$3 & 31 | 0;
  if (32 >>> 0 <= (i64toi32_i32$3 & 63 | 0) >>> 0) {
   i64toi32_i32$0 = i64toi32_i32$1 << i64toi32_i32$4 | 0;
   $22 = 0;
  } else {
   i64toi32_i32$0 = ((1 << i64toi32_i32$4 | 0) - 1 | 0) & (i64toi32_i32$1 >>> (32 - i64toi32_i32$4 | 0) | 0) | 0 | (i64toi32_i32$2 << i64toi32_i32$4 | 0) | 0;
   $22 = i64toi32_i32$1 << i64toi32_i32$4 | 0;
  }
  $15$hi = i64toi32_i32$0;
  i64toi32_i32$0 = $12$hi;
  i64toi32_i32$2 = $12;
  i64toi32_i32$1 = $15$hi;
  i64toi32_i32$3 = $22;
  i64toi32_i32$1 = i64toi32_i32$0 | i64toi32_i32$1 | 0;
  $16 = i64toi32_i32$2 | i64toi32_i32$3 | 0;
  $16$hi = i64toi32_i32$1;
  i64toi32_i32$1 = $10$hi;
  i64toi32_i32$2 = $16$hi;
  i64toi32_i32$2 = assembly_index_rng_gen_range($10 | 0, i64toi32_i32$1 | 0, $16 | 0, i64toi32_i32$2 | 0) | 0;
  i64toi32_i32$1 = i64toi32_i32$HIGH_BITS;
  $4 = i64toi32_i32$2;
  $4$hi = i64toi32_i32$1;
  i64toi32_i32$0 = i64toi32_i32$2;
  i64toi32_i32$2 = 0;
  i64toi32_i32$3 = 32;
  i64toi32_i32$4 = i64toi32_i32$3 & 31 | 0;
  if (32 >>> 0 <= (i64toi32_i32$3 & 63 | 0) >>> 0) {
   i64toi32_i32$2 = 0;
   $23 = i64toi32_i32$1 >>> i64toi32_i32$4 | 0;
  } else {
   i64toi32_i32$2 = i64toi32_i32$1 >>> i64toi32_i32$4 | 0;
   $23 = (((1 << i64toi32_i32$4 | 0) - 1 | 0) & i64toi32_i32$1 | 0) << (32 - i64toi32_i32$4 | 0) | 0 | (i64toi32_i32$0 >>> i64toi32_i32$4 | 0) | 0;
  }
  setTempRet0($23 | 0);
  i64toi32_i32$2 = $4$hi;
  return $4 | 0;
 }
 
 function legalstub$assembly_index_primeCheck($0, $1, $2) {
  $0 = $0 | 0;
  $1 = $1 | 0;
  $2 = $2 | 0;
  var i64toi32_i32$2 = 0, i64toi32_i32$0 = 0, i64toi32_i32$1 = 0, i64toi32_i32$4 = 0, i64toi32_i32$3 = 0, $11 = 0, $4 = 0, $4$hi = 0, $7$hi = 0;
  i64toi32_i32$0 = 0;
  $4 = $0;
  $4$hi = i64toi32_i32$0;
  i64toi32_i32$0 = 0;
  i64toi32_i32$2 = $1;
  i64toi32_i32$1 = 0;
  i64toi32_i32$3 = 32;
  i64toi32_i32$4 = i64toi32_i32$3 & 31 | 0;
  if (32 >>> 0 <= (i64toi32_i32$3 & 63 | 0) >>> 0) {
   i64toi32_i32$1 = i64toi32_i32$2 << i64toi32_i32$4 | 0;
   $11 = 0;
  } else {
   i64toi32_i32$1 = ((1 << i64toi32_i32$4 | 0) - 1 | 0) & (i64toi32_i32$2 >>> (32 - i64toi32_i32$4 | 0) | 0) | 0 | (i64toi32_i32$0 << i64toi32_i32$4 | 0) | 0;
   $11 = i64toi32_i32$2 << i64toi32_i32$4 | 0;
  }
  $7$hi = i64toi32_i32$1;
  i64toi32_i32$1 = $4$hi;
  i64toi32_i32$0 = $4;
  i64toi32_i32$2 = $7$hi;
  i64toi32_i32$3 = $11;
  i64toi32_i32$2 = i64toi32_i32$1 | i64toi32_i32$2 | 0;
  return assembly_index_primeCheck(i64toi32_i32$0 | i64toi32_i32$3 | 0 | 0, i64toi32_i32$2 | 0, $2 | 0) | 0 | 0;
 }
 
 function legalfunc$wasm2js_scratch_load_i64() {
  var i64toi32_i32$0 = 0, i64toi32_i32$2 = 0, i64toi32_i32$1 = 0, i64toi32_i32$4 = 0, i64toi32_i32$3 = 0, $10 = 0, $0 = 0, $1 = 0, $1$hi = 0, $2 = 0, $4$hi = 0;
  $0 = legalimport$wasm2js_scratch_load_i64() | 0;
  i64toi32_i32$0 = 0;
  $1 = $0;
  $1$hi = i64toi32_i32$0;
  $2 = getTempRet0() | 0;
  i64toi32_i32$0 = 0;
  i64toi32_i32$2 = $2;
  i64toi32_i32$1 = 0;
  i64toi32_i32$3 = 32;
  i64toi32_i32$4 = i64toi32_i32$3 & 31 | 0;
  if (32 >>> 0 <= (i64toi32_i32$3 & 63 | 0) >>> 0) {
   i64toi32_i32$1 = i64toi32_i32$2 << i64toi32_i32$4 | 0;
   $10 = 0;
  } else {
   i64toi32_i32$1 = ((1 << i64toi32_i32$4 | 0) - 1 | 0) & (i64toi32_i32$2 >>> (32 - i64toi32_i32$4 | 0) | 0) | 0 | (i64toi32_i32$0 << i64toi32_i32$4 | 0) | 0;
   $10 = i64toi32_i32$2 << i64toi32_i32$4 | 0;
  }
  $4$hi = i64toi32_i32$1;
  i64toi32_i32$1 = $1$hi;
  i64toi32_i32$0 = $1;
  i64toi32_i32$2 = $4$hi;
  i64toi32_i32$3 = $10;
  i64toi32_i32$2 = i64toi32_i32$1 | i64toi32_i32$2 | 0;
  i64toi32_i32$0 = i64toi32_i32$0 | i64toi32_i32$3 | 0;
  i64toi32_i32$HIGH_BITS = i64toi32_i32$2;
  return i64toi32_i32$0 | 0;
 }
 
 function legalfunc$wasm2js_scratch_store_i64($0, $0$hi) {
  $0 = $0 | 0;
  $0$hi = $0$hi | 0;
  var i64toi32_i32$4 = 0, i64toi32_i32$0 = 0, i64toi32_i32$1 = 0, i64toi32_i32$3 = 0, $8 = 0, $2 = 0, i64toi32_i32$2 = 0;
  i64toi32_i32$0 = $0$hi;
  $2 = $0;
  i64toi32_i32$2 = $0;
  i64toi32_i32$1 = 0;
  i64toi32_i32$3 = 32;
  i64toi32_i32$4 = i64toi32_i32$3 & 31 | 0;
  if (32 >>> 0 <= (i64toi32_i32$3 & 63 | 0) >>> 0) {
   i64toi32_i32$1 = 0;
   $8 = i64toi32_i32$0 >>> i64toi32_i32$4 | 0;
  } else {
   i64toi32_i32$1 = i64toi32_i32$0 >>> i64toi32_i32$4 | 0;
   $8 = (((1 << i64toi32_i32$4 | 0) - 1 | 0) & i64toi32_i32$0 | 0) << (32 - i64toi32_i32$4 | 0) | 0 | (i64toi32_i32$2 >>> i64toi32_i32$4 | 0) | 0;
  }
  legalimport$wasm2js_scratch_store_i64($2 | 0, $8 | 0);
 }
 
 function _ZN17compiler_builtins3int3mul3Mul3mul17h070e9a1c69faec5bE(var$0, var$0$hi, var$1, var$1$hi) {
  var$0 = var$0 | 0;
  var$0$hi = var$0$hi | 0;
  var$1 = var$1 | 0;
  var$1$hi = var$1$hi | 0;
  var i64toi32_i32$4 = 0, i64toi32_i32$0 = 0, i64toi32_i32$1 = 0, var$2 = 0, i64toi32_i32$2 = 0, i64toi32_i32$3 = 0, var$3 = 0, var$4 = 0, var$5 = 0, $21 = 0, $22 = 0, var$6 = 0, $24 = 0, $17 = 0, $18 = 0, $23 = 0, $29 = 0, $45 = 0, $56$hi = 0, $62$hi = 0;
  i64toi32_i32$0 = var$1$hi;
  var$2 = var$1;
  var$4 = var$2 >>> 16 | 0;
  i64toi32_i32$0 = var$0$hi;
  var$3 = var$0;
  var$5 = var$3 >>> 16 | 0;
  $17 = Math_imul(var$4, var$5);
  $18 = var$2;
  i64toi32_i32$2 = var$3;
  i64toi32_i32$1 = 0;
  i64toi32_i32$3 = 32;
  i64toi32_i32$4 = i64toi32_i32$3 & 31 | 0;
  if (32 >>> 0 <= (i64toi32_i32$3 & 63 | 0) >>> 0) {
   i64toi32_i32$1 = 0;
   $21 = i64toi32_i32$0 >>> i64toi32_i32$4 | 0;
  } else {
   i64toi32_i32$1 = i64toi32_i32$0 >>> i64toi32_i32$4 | 0;
   $21 = (((1 << i64toi32_i32$4 | 0) - 1 | 0) & i64toi32_i32$0 | 0) << (32 - i64toi32_i32$4 | 0) | 0 | (i64toi32_i32$2 >>> i64toi32_i32$4 | 0) | 0;
  }
  $23 = $17 + Math_imul($18, $21) | 0;
  i64toi32_i32$1 = var$1$hi;
  i64toi32_i32$0 = var$1;
  i64toi32_i32$2 = 0;
  i64toi32_i32$3 = 32;
  i64toi32_i32$4 = i64toi32_i32$3 & 31 | 0;
  if (32 >>> 0 <= (i64toi32_i32$3 & 63 | 0) >>> 0) {
   i64toi32_i32$2 = 0;
   $22 = i64toi32_i32$1 >>> i64toi32_i32$4 | 0;
  } else {
   i64toi32_i32$2 = i64toi32_i32$1 >>> i64toi32_i32$4 | 0;
   $22 = (((1 << i64toi32_i32$4 | 0) - 1 | 0) & i64toi32_i32$1 | 0) << (32 - i64toi32_i32$4 | 0) | 0 | (i64toi32_i32$0 >>> i64toi32_i32$4 | 0) | 0;
  }
  $29 = $23 + Math_imul($22, var$3) | 0;
  var$2 = var$2 & 65535 | 0;
  var$3 = var$3 & 65535 | 0;
  var$6 = Math_imul(var$2, var$3);
  var$2 = (var$6 >>> 16 | 0) + Math_imul(var$2, var$5) | 0;
  $45 = $29 + (var$2 >>> 16 | 0) | 0;
  var$2 = (var$2 & 65535 | 0) + Math_imul(var$4, var$3) | 0;
  i64toi32_i32$2 = 0;
  i64toi32_i32$1 = $45 + (var$2 >>> 16 | 0) | 0;
  i64toi32_i32$0 = 0;
  i64toi32_i32$3 = 32;
  i64toi32_i32$4 = i64toi32_i32$3 & 31 | 0;
  if (32 >>> 0 <= (i64toi32_i32$3 & 63 | 0) >>> 0) {
   i64toi32_i32$0 = i64toi32_i32$1 << i64toi32_i32$4 | 0;
   $24 = 0;
  } else {
   i64toi32_i32$0 = ((1 << i64toi32_i32$4 | 0) - 1 | 0) & (i64toi32_i32$1 >>> (32 - i64toi32_i32$4 | 0) | 0) | 0 | (i64toi32_i32$2 << i64toi32_i32$4 | 0) | 0;
   $24 = i64toi32_i32$1 << i64toi32_i32$4 | 0;
  }
  $56$hi = i64toi32_i32$0;
  i64toi32_i32$0 = 0;
  $62$hi = i64toi32_i32$0;
  i64toi32_i32$0 = $56$hi;
  i64toi32_i32$2 = $24;
  i64toi32_i32$1 = $62$hi;
  i64toi32_i32$3 = var$2 << 16 | 0 | (var$6 & 65535 | 0) | 0;
  i64toi32_i32$1 = i64toi32_i32$0 | i64toi32_i32$1 | 0;
  i64toi32_i32$2 = i64toi32_i32$2 | i64toi32_i32$3 | 0;
  i64toi32_i32$HIGH_BITS = i64toi32_i32$1;
  return i64toi32_i32$2 | 0;
 }
 
 function _ZN17compiler_builtins3int4udiv10divmod_u6417h6026910b5ed08e40E(var$0, var$0$hi, var$1, var$1$hi) {
  var$0 = var$0 | 0;
  var$0$hi = var$0$hi | 0;
  var$1 = var$1 | 0;
  var$1$hi = var$1$hi | 0;
  var i64toi32_i32$2 = 0, i64toi32_i32$3 = 0, i64toi32_i32$4 = 0, i64toi32_i32$1 = 0, i64toi32_i32$0 = 0, i64toi32_i32$5 = 0, var$2 = 0, var$3 = 0, var$4 = 0, var$5 = 0, var$5$hi = 0, var$6 = 0, var$6$hi = 0, i64toi32_i32$6 = 0, $39 = 0, $40 = 0, $41 = 0, $42 = 0, $43 = 0, $44 = 0, $45 = 0, $46 = 0, var$8$hi = 0, $47 = 0, $48 = 0, $49 = 0, $50 = 0, var$7$hi = 0, $51 = 0, $63$hi = 0, $65 = 0, $65$hi = 0, $70 = 0, $119 = 0, $120$hi = 0, $129$hi = 0, $134$hi = 0, var$8 = 0, $140 = 0, $140$hi = 0, $142$hi = 0, $144 = 0, $144$hi = 0, $151 = 0, $151$hi = 0, $154$hi = 0, var$7 = 0, $165$hi = 0;
  label$1 : {
   label$2 : {
    label$3 : {
     label$4 : {
      label$5 : {
       label$6 : {
        label$7 : {
         label$8 : {
          label$9 : {
           label$10 : {
            label$11 : {
             i64toi32_i32$0 = var$0$hi;
             i64toi32_i32$2 = var$0;
             i64toi32_i32$1 = 0;
             i64toi32_i32$3 = 32;
             i64toi32_i32$4 = i64toi32_i32$3 & 31 | 0;
             if (32 >>> 0 <= (i64toi32_i32$3 & 63 | 0) >>> 0) {
              i64toi32_i32$1 = 0;
              $39 = i64toi32_i32$0 >>> i64toi32_i32$4 | 0;
             } else {
              i64toi32_i32$1 = i64toi32_i32$0 >>> i64toi32_i32$4 | 0;
              $39 = (((1 << i64toi32_i32$4 | 0) - 1 | 0) & i64toi32_i32$0 | 0) << (32 - i64toi32_i32$4 | 0) | 0 | (i64toi32_i32$2 >>> i64toi32_i32$4 | 0) | 0;
             }
             var$2 = $39;
             if (var$2) {
              block : {
               i64toi32_i32$1 = var$1$hi;
               var$3 = var$1;
               if (!var$3) {
                break label$11
               }
               i64toi32_i32$1 = var$1$hi;
               i64toi32_i32$0 = var$1;
               i64toi32_i32$2 = 0;
               i64toi32_i32$3 = 32;
               i64toi32_i32$4 = i64toi32_i32$3 & 31 | 0;
               if (32 >>> 0 <= (i64toi32_i32$3 & 63 | 0) >>> 0) {
                i64toi32_i32$2 = 0;
                $40 = i64toi32_i32$1 >>> i64toi32_i32$4 | 0;
               } else {
                i64toi32_i32$2 = i64toi32_i32$1 >>> i64toi32_i32$4 | 0;
                $40 = (((1 << i64toi32_i32$4 | 0) - 1 | 0) & i64toi32_i32$1 | 0) << (32 - i64toi32_i32$4 | 0) | 0 | (i64toi32_i32$0 >>> i64toi32_i32$4 | 0) | 0;
               }
               var$4 = $40;
               if (!var$4) {
                break label$9
               }
               var$2 = Math_clz32(var$4) - Math_clz32(var$2) | 0;
               if (var$2 >>> 0 <= 31 >>> 0) {
                break label$8
               }
               break label$2;
              }
             }
             i64toi32_i32$2 = var$1$hi;
             i64toi32_i32$1 = var$1;
             i64toi32_i32$0 = 1;
             i64toi32_i32$3 = 0;
             if (i64toi32_i32$2 >>> 0 > i64toi32_i32$0 >>> 0 | ((i64toi32_i32$2 | 0) == (i64toi32_i32$0 | 0) & i64toi32_i32$1 >>> 0 >= i64toi32_i32$3 >>> 0 | 0) | 0) {
              break label$2
             }
             i64toi32_i32$1 = var$0$hi;
             var$2 = var$0;
             i64toi32_i32$1 = var$1$hi;
             var$3 = var$1;
             var$2 = (var$2 >>> 0) / (var$3 >>> 0) | 0;
             i64toi32_i32$1 = 0;
             legalfunc$wasm2js_scratch_store_i64(var$0 - Math_imul(var$2, var$3) | 0 | 0, i64toi32_i32$1 | 0);
             i64toi32_i32$1 = 0;
             i64toi32_i32$2 = var$2;
             i64toi32_i32$HIGH_BITS = i64toi32_i32$1;
             return i64toi32_i32$2 | 0;
            }
            i64toi32_i32$2 = var$1$hi;
            i64toi32_i32$3 = var$1;
            i64toi32_i32$1 = 0;
            i64toi32_i32$0 = 32;
            i64toi32_i32$4 = i64toi32_i32$0 & 31 | 0;
            if (32 >>> 0 <= (i64toi32_i32$0 & 63 | 0) >>> 0) {
             i64toi32_i32$1 = 0;
             $41 = i64toi32_i32$2 >>> i64toi32_i32$4 | 0;
            } else {
             i64toi32_i32$1 = i64toi32_i32$2 >>> i64toi32_i32$4 | 0;
             $41 = (((1 << i64toi32_i32$4 | 0) - 1 | 0) & i64toi32_i32$2 | 0) << (32 - i64toi32_i32$4 | 0) | 0 | (i64toi32_i32$3 >>> i64toi32_i32$4 | 0) | 0;
            }
            var$3 = $41;
            i64toi32_i32$1 = var$0$hi;
            if (!var$0) {
             break label$7
            }
            if (!var$3) {
             break label$6
            }
            var$4 = var$3 + -1 | 0;
            if (var$4 & var$3 | 0) {
             break label$6
            }
            i64toi32_i32$1 = 0;
            i64toi32_i32$2 = var$4 & var$2 | 0;
            i64toi32_i32$3 = 0;
            i64toi32_i32$0 = 32;
            i64toi32_i32$4 = i64toi32_i32$0 & 31 | 0;
            if (32 >>> 0 <= (i64toi32_i32$0 & 63 | 0) >>> 0) {
             i64toi32_i32$3 = i64toi32_i32$2 << i64toi32_i32$4 | 0;
             $42 = 0;
            } else {
             i64toi32_i32$3 = ((1 << i64toi32_i32$4 | 0) - 1 | 0) & (i64toi32_i32$2 >>> (32 - i64toi32_i32$4 | 0) | 0) | 0 | (i64toi32_i32$1 << i64toi32_i32$4 | 0) | 0;
             $42 = i64toi32_i32$2 << i64toi32_i32$4 | 0;
            }
            $63$hi = i64toi32_i32$3;
            i64toi32_i32$3 = var$0$hi;
            i64toi32_i32$1 = var$0;
            i64toi32_i32$2 = 0;
            i64toi32_i32$0 = -1;
            i64toi32_i32$2 = i64toi32_i32$3 & i64toi32_i32$2 | 0;
            $65 = i64toi32_i32$1 & i64toi32_i32$0 | 0;
            $65$hi = i64toi32_i32$2;
            i64toi32_i32$2 = $63$hi;
            i64toi32_i32$3 = $42;
            i64toi32_i32$1 = $65$hi;
            i64toi32_i32$0 = $65;
            i64toi32_i32$1 = i64toi32_i32$2 | i64toi32_i32$1 | 0;
            legalfunc$wasm2js_scratch_store_i64(i64toi32_i32$3 | i64toi32_i32$0 | 0 | 0, i64toi32_i32$1 | 0);
            $70 = (__wasm_ctz_i32(var$3 | 0) | 0) & 31 | 0;
            i64toi32_i32$1 = 0;
            i64toi32_i32$3 = var$2 >>> $70 | 0;
            i64toi32_i32$HIGH_BITS = i64toi32_i32$1;
            return i64toi32_i32$3 | 0;
           }
          }
          var$4 = var$3 + -1 | 0;
          if (!(var$4 & var$3 | 0)) {
           break label$5
          }
          var$2 = (Math_clz32(var$3) + 33 | 0) - Math_clz32(var$2) | 0;
          var$3 = 0 - var$2 | 0;
          break label$3;
         }
         var$3 = 63 - var$2 | 0;
         var$2 = var$2 + 1 | 0;
         break label$3;
        }
        var$4 = (var$2 >>> 0) / (var$3 >>> 0) | 0;
        i64toi32_i32$3 = 0;
        i64toi32_i32$2 = var$2 - Math_imul(var$4, var$3) | 0;
        i64toi32_i32$1 = 0;
        i64toi32_i32$0 = 32;
        i64toi32_i32$4 = i64toi32_i32$0 & 31 | 0;
        if (32 >>> 0 <= (i64toi32_i32$0 & 63 | 0) >>> 0) {
         i64toi32_i32$1 = i64toi32_i32$2 << i64toi32_i32$4 | 0;
         $43 = 0;
        } else {
         i64toi32_i32$1 = ((1 << i64toi32_i32$4 | 0) - 1 | 0) & (i64toi32_i32$2 >>> (32 - i64toi32_i32$4 | 0) | 0) | 0 | (i64toi32_i32$3 << i64toi32_i32$4 | 0) | 0;
         $43 = i64toi32_i32$2 << i64toi32_i32$4 | 0;
        }
        legalfunc$wasm2js_scratch_store_i64($43 | 0, i64toi32_i32$1 | 0);
        i64toi32_i32$1 = 0;
        i64toi32_i32$2 = var$4;
        i64toi32_i32$HIGH_BITS = i64toi32_i32$1;
        return i64toi32_i32$2 | 0;
       }
       var$2 = Math_clz32(var$3) - Math_clz32(var$2) | 0;
       if (var$2 >>> 0 < 31 >>> 0) {
        break label$4
       }
       break label$2;
      }
      i64toi32_i32$2 = var$0$hi;
      i64toi32_i32$2 = 0;
      legalfunc$wasm2js_scratch_store_i64(var$4 & var$0 | 0 | 0, i64toi32_i32$2 | 0);
      if ((var$3 | 0) == (1 | 0)) {
       break label$1
      }
      i64toi32_i32$2 = var$0$hi;
      $119 = __wasm_ctz_i32(var$3 | 0) | 0;
      i64toi32_i32$2 = 0;
      $120$hi = i64toi32_i32$2;
      i64toi32_i32$2 = var$0$hi;
      i64toi32_i32$3 = var$0;
      i64toi32_i32$1 = $120$hi;
      i64toi32_i32$0 = $119;
      i64toi32_i32$4 = i64toi32_i32$0 & 31 | 0;
      if (32 >>> 0 <= (i64toi32_i32$0 & 63 | 0) >>> 0) {
       i64toi32_i32$1 = 0;
       $44 = i64toi32_i32$2 >>> i64toi32_i32$4 | 0;
      } else {
       i64toi32_i32$1 = i64toi32_i32$2 >>> i64toi32_i32$4 | 0;
       $44 = (((1 << i64toi32_i32$4 | 0) - 1 | 0) & i64toi32_i32$2 | 0) << (32 - i64toi32_i32$4 | 0) | 0 | (i64toi32_i32$3 >>> i64toi32_i32$4 | 0) | 0;
      }
      i64toi32_i32$3 = $44;
      i64toi32_i32$HIGH_BITS = i64toi32_i32$1;
      return i64toi32_i32$3 | 0;
     }
     var$3 = 63 - var$2 | 0;
     var$2 = var$2 + 1 | 0;
    }
    i64toi32_i32$3 = var$0$hi;
    i64toi32_i32$3 = 0;
    $129$hi = i64toi32_i32$3;
    i64toi32_i32$3 = var$0$hi;
    i64toi32_i32$2 = var$0;
    i64toi32_i32$1 = $129$hi;
    i64toi32_i32$0 = var$2 & 63 | 0;
    i64toi32_i32$4 = i64toi32_i32$0 & 31 | 0;
    if (32 >>> 0 <= (i64toi32_i32$0 & 63 | 0) >>> 0) {
     i64toi32_i32$1 = 0;
     $45 = i64toi32_i32$3 >>> i64toi32_i32$4 | 0;
    } else {
     i64toi32_i32$1 = i64toi32_i32$3 >>> i64toi32_i32$4 | 0;
     $45 = (((1 << i64toi32_i32$4 | 0) - 1 | 0) & i64toi32_i32$3 | 0) << (32 - i64toi32_i32$4 | 0) | 0 | (i64toi32_i32$2 >>> i64toi32_i32$4 | 0) | 0;
    }
    var$5 = $45;
    var$5$hi = i64toi32_i32$1;
    i64toi32_i32$1 = var$0$hi;
    i64toi32_i32$1 = 0;
    $134$hi = i64toi32_i32$1;
    i64toi32_i32$1 = var$0$hi;
    i64toi32_i32$3 = var$0;
    i64toi32_i32$2 = $134$hi;
    i64toi32_i32$0 = var$3 & 63 | 0;
    i64toi32_i32$4 = i64toi32_i32$0 & 31 | 0;
    if (32 >>> 0 <= (i64toi32_i32$0 & 63 | 0) >>> 0) {
     i64toi32_i32$2 = i64toi32_i32$3 << i64toi32_i32$4 | 0;
     $46 = 0;
    } else {
     i64toi32_i32$2 = ((1 << i64toi32_i32$4 | 0) - 1 | 0) & (i64toi32_i32$3 >>> (32 - i64toi32_i32$4 | 0) | 0) | 0 | (i64toi32_i32$1 << i64toi32_i32$4 | 0) | 0;
     $46 = i64toi32_i32$3 << i64toi32_i32$4 | 0;
    }
    var$0 = $46;
    var$0$hi = i64toi32_i32$2;
    label$13 : {
     if (var$2) {
      block3 : {
       i64toi32_i32$2 = var$1$hi;
       i64toi32_i32$1 = var$1;
       i64toi32_i32$3 = -1;
       i64toi32_i32$0 = -1;
       i64toi32_i32$4 = i64toi32_i32$1 + i64toi32_i32$0 | 0;
       i64toi32_i32$5 = i64toi32_i32$2 + i64toi32_i32$3 | 0;
       if (i64toi32_i32$4 >>> 0 < i64toi32_i32$0 >>> 0) {
        i64toi32_i32$5 = i64toi32_i32$5 + 1 | 0
       }
       var$8 = i64toi32_i32$4;
       var$8$hi = i64toi32_i32$5;
       label$15 : while (1) {
        i64toi32_i32$5 = var$5$hi;
        i64toi32_i32$2 = var$5;
        i64toi32_i32$1 = 0;
        i64toi32_i32$0 = 1;
        i64toi32_i32$3 = i64toi32_i32$0 & 31 | 0;
        if (32 >>> 0 <= (i64toi32_i32$0 & 63 | 0) >>> 0) {
         i64toi32_i32$1 = i64toi32_i32$2 << i64toi32_i32$3 | 0;
         $47 = 0;
        } else {
         i64toi32_i32$1 = ((1 << i64toi32_i32$3 | 0) - 1 | 0) & (i64toi32_i32$2 >>> (32 - i64toi32_i32$3 | 0) | 0) | 0 | (i64toi32_i32$5 << i64toi32_i32$3 | 0) | 0;
         $47 = i64toi32_i32$2 << i64toi32_i32$3 | 0;
        }
        $140 = $47;
        $140$hi = i64toi32_i32$1;
        i64toi32_i32$1 = var$0$hi;
        i64toi32_i32$5 = var$0;
        i64toi32_i32$2 = 0;
        i64toi32_i32$0 = 63;
        i64toi32_i32$3 = i64toi32_i32$0 & 31 | 0;
        if (32 >>> 0 <= (i64toi32_i32$0 & 63 | 0) >>> 0) {
         i64toi32_i32$2 = 0;
         $48 = i64toi32_i32$1 >>> i64toi32_i32$3 | 0;
        } else {
         i64toi32_i32$2 = i64toi32_i32$1 >>> i64toi32_i32$3 | 0;
         $48 = (((1 << i64toi32_i32$3 | 0) - 1 | 0) & i64toi32_i32$1 | 0) << (32 - i64toi32_i32$3 | 0) | 0 | (i64toi32_i32$5 >>> i64toi32_i32$3 | 0) | 0;
        }
        $142$hi = i64toi32_i32$2;
        i64toi32_i32$2 = $140$hi;
        i64toi32_i32$1 = $140;
        i64toi32_i32$5 = $142$hi;
        i64toi32_i32$0 = $48;
        i64toi32_i32$5 = i64toi32_i32$2 | i64toi32_i32$5 | 0;
        var$5 = i64toi32_i32$1 | i64toi32_i32$0 | 0;
        var$5$hi = i64toi32_i32$5;
        $144 = var$5;
        $144$hi = i64toi32_i32$5;
        i64toi32_i32$5 = var$8$hi;
        i64toi32_i32$5 = var$5$hi;
        i64toi32_i32$5 = var$8$hi;
        i64toi32_i32$2 = var$8;
        i64toi32_i32$1 = var$5$hi;
        i64toi32_i32$0 = var$5;
        i64toi32_i32$3 = i64toi32_i32$2 - i64toi32_i32$0 | 0;
        i64toi32_i32$6 = i64toi32_i32$2 >>> 0 < i64toi32_i32$0 >>> 0;
        i64toi32_i32$4 = i64toi32_i32$6 + i64toi32_i32$1 | 0;
        i64toi32_i32$4 = i64toi32_i32$5 - i64toi32_i32$4 | 0;
        i64toi32_i32$5 = i64toi32_i32$3;
        i64toi32_i32$2 = 0;
        i64toi32_i32$0 = 63;
        i64toi32_i32$1 = i64toi32_i32$0 & 31 | 0;
        if (32 >>> 0 <= (i64toi32_i32$0 & 63 | 0) >>> 0) {
         i64toi32_i32$2 = i64toi32_i32$4 >> 31 | 0;
         $49 = i64toi32_i32$4 >> i64toi32_i32$1 | 0;
        } else {
         i64toi32_i32$2 = i64toi32_i32$4 >> i64toi32_i32$1 | 0;
         $49 = (((1 << i64toi32_i32$1 | 0) - 1 | 0) & i64toi32_i32$4 | 0) << (32 - i64toi32_i32$1 | 0) | 0 | (i64toi32_i32$5 >>> i64toi32_i32$1 | 0) | 0;
        }
        var$6 = $49;
        var$6$hi = i64toi32_i32$2;
        i64toi32_i32$2 = var$1$hi;
        i64toi32_i32$2 = var$6$hi;
        i64toi32_i32$4 = var$6;
        i64toi32_i32$5 = var$1$hi;
        i64toi32_i32$0 = var$1;
        i64toi32_i32$5 = i64toi32_i32$2 & i64toi32_i32$5 | 0;
        $151 = i64toi32_i32$4 & i64toi32_i32$0 | 0;
        $151$hi = i64toi32_i32$5;
        i64toi32_i32$5 = $144$hi;
        i64toi32_i32$2 = $144;
        i64toi32_i32$4 = $151$hi;
        i64toi32_i32$0 = $151;
        i64toi32_i32$1 = i64toi32_i32$2 - i64toi32_i32$0 | 0;
        i64toi32_i32$6 = i64toi32_i32$2 >>> 0 < i64toi32_i32$0 >>> 0;
        i64toi32_i32$3 = i64toi32_i32$6 + i64toi32_i32$4 | 0;
        i64toi32_i32$3 = i64toi32_i32$5 - i64toi32_i32$3 | 0;
        var$5 = i64toi32_i32$1;
        var$5$hi = i64toi32_i32$3;
        i64toi32_i32$3 = var$0$hi;
        i64toi32_i32$5 = var$0;
        i64toi32_i32$2 = 0;
        i64toi32_i32$0 = 1;
        i64toi32_i32$4 = i64toi32_i32$0 & 31 | 0;
        if (32 >>> 0 <= (i64toi32_i32$0 & 63 | 0) >>> 0) {
         i64toi32_i32$2 = i64toi32_i32$5 << i64toi32_i32$4 | 0;
         $50 = 0;
        } else {
         i64toi32_i32$2 = ((1 << i64toi32_i32$4 | 0) - 1 | 0) & (i64toi32_i32$5 >>> (32 - i64toi32_i32$4 | 0) | 0) | 0 | (i64toi32_i32$3 << i64toi32_i32$4 | 0) | 0;
         $50 = i64toi32_i32$5 << i64toi32_i32$4 | 0;
        }
        $154$hi = i64toi32_i32$2;
        i64toi32_i32$2 = var$7$hi;
        i64toi32_i32$2 = $154$hi;
        i64toi32_i32$3 = $50;
        i64toi32_i32$5 = var$7$hi;
        i64toi32_i32$0 = var$7;
        i64toi32_i32$5 = i64toi32_i32$2 | i64toi32_i32$5 | 0;
        var$0 = i64toi32_i32$3 | i64toi32_i32$0 | 0;
        var$0$hi = i64toi32_i32$5;
        i64toi32_i32$5 = var$6$hi;
        i64toi32_i32$2 = var$6;
        i64toi32_i32$3 = 0;
        i64toi32_i32$0 = 1;
        i64toi32_i32$3 = i64toi32_i32$5 & i64toi32_i32$3 | 0;
        var$6 = i64toi32_i32$2 & i64toi32_i32$0 | 0;
        var$6$hi = i64toi32_i32$3;
        var$7 = var$6;
        var$7$hi = i64toi32_i32$3;
        var$2 = var$2 + -1 | 0;
        if (var$2) {
         continue label$15
        }
        break label$15;
       };
       break label$13;
      }
     }
    }
    i64toi32_i32$3 = var$5$hi;
    legalfunc$wasm2js_scratch_store_i64(var$5 | 0, i64toi32_i32$3 | 0);
    i64toi32_i32$3 = var$0$hi;
    i64toi32_i32$5 = var$0;
    i64toi32_i32$2 = 0;
    i64toi32_i32$0 = 1;
    i64toi32_i32$4 = i64toi32_i32$0 & 31 | 0;
    if (32 >>> 0 <= (i64toi32_i32$0 & 63 | 0) >>> 0) {
     i64toi32_i32$2 = i64toi32_i32$5 << i64toi32_i32$4 | 0;
     $51 = 0;
    } else {
     i64toi32_i32$2 = ((1 << i64toi32_i32$4 | 0) - 1 | 0) & (i64toi32_i32$5 >>> (32 - i64toi32_i32$4 | 0) | 0) | 0 | (i64toi32_i32$3 << i64toi32_i32$4 | 0) | 0;
     $51 = i64toi32_i32$5 << i64toi32_i32$4 | 0;
    }
    $165$hi = i64toi32_i32$2;
    i64toi32_i32$2 = var$6$hi;
    i64toi32_i32$2 = $165$hi;
    i64toi32_i32$3 = $51;
    i64toi32_i32$5 = var$6$hi;
    i64toi32_i32$0 = var$6;
    i64toi32_i32$5 = i64toi32_i32$2 | i64toi32_i32$5 | 0;
    i64toi32_i32$3 = i64toi32_i32$3 | i64toi32_i32$0 | 0;
    i64toi32_i32$HIGH_BITS = i64toi32_i32$5;
    return i64toi32_i32$3 | 0;
   }
   i64toi32_i32$3 = var$0$hi;
   legalfunc$wasm2js_scratch_store_i64(var$0 | 0, i64toi32_i32$3 | 0);
   i64toi32_i32$3 = 0;
   var$0 = 0;
   var$0$hi = i64toi32_i32$3;
  }
  i64toi32_i32$3 = var$0$hi;
  i64toi32_i32$5 = var$0;
  i64toi32_i32$HIGH_BITS = i64toi32_i32$3;
  return i64toi32_i32$5 | 0;
 }
 
 function __wasm_ctz_i32(var$0) {
  var$0 = var$0 | 0;
  if (var$0) {
   return 31 - Math_clz32((var$0 + -1 | 0) ^ var$0 | 0) | 0 | 0
  }
  return 32 | 0;
 }
 
 function __wasm_i64_mul(var$0, var$0$hi, var$1, var$1$hi) {
  var$0 = var$0 | 0;
  var$0$hi = var$0$hi | 0;
  var$1 = var$1 | 0;
  var$1$hi = var$1$hi | 0;
  var i64toi32_i32$0 = 0, i64toi32_i32$1 = 0;
  i64toi32_i32$0 = var$0$hi;
  i64toi32_i32$0 = var$1$hi;
  i64toi32_i32$0 = var$0$hi;
  i64toi32_i32$1 = var$1$hi;
  i64toi32_i32$1 = _ZN17compiler_builtins3int3mul3Mul3mul17h070e9a1c69faec5bE(var$0 | 0, i64toi32_i32$0 | 0, var$1 | 0, i64toi32_i32$1 | 0) | 0;
  i64toi32_i32$0 = i64toi32_i32$HIGH_BITS;
  i64toi32_i32$HIGH_BITS = i64toi32_i32$0;
  return i64toi32_i32$1 | 0;
 }
 
 function __wasm_i64_urem(var$0, var$0$hi, var$1, var$1$hi) {
  var$0 = var$0 | 0;
  var$0$hi = var$0$hi | 0;
  var$1 = var$1 | 0;
  var$1$hi = var$1$hi | 0;
  var i64toi32_i32$0 = 0, i64toi32_i32$1 = 0;
  i64toi32_i32$0 = var$0$hi;
  i64toi32_i32$0 = var$1$hi;
  i64toi32_i32$0 = var$0$hi;
  i64toi32_i32$1 = var$1$hi;
  i64toi32_i32$1 = _ZN17compiler_builtins3int4udiv10divmod_u6417h6026910b5ed08e40E(var$0 | 0, i64toi32_i32$0 | 0, var$1 | 0, i64toi32_i32$1 | 0) | 0;
  i64toi32_i32$0 = i64toi32_i32$HIGH_BITS;
  i64toi32_i32$0 = legalfunc$wasm2js_scratch_load_i64() | 0;
  i64toi32_i32$1 = i64toi32_i32$HIGH_BITS;
  i64toi32_i32$HIGH_BITS = i64toi32_i32$1;
  return i64toi32_i32$0 | 0;
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
base64DecodeToExistingUint8Array(bufferView, 16, "HgAAAAEAAAABAAAAHgAAAH4AbABpAGIALwByAHQALwB0AGwAcwBmAC4AdABzAA==");
base64DecodeToExistingUint8Array(bufferView, 64, "KAAAAAEAAAABAAAAKAAAAGEAbABsAG8AYwBhAHQAaQBvAG4AIAB0AG8AbwAgAGwAYQByAGcAZQA=");
base64DecodeToExistingUint8Array(bufferView, 128, "HgAAAAEAAAABAAAAHgAAAH4AbABpAGIALwByAHQALwBwAHUAcgBlAC4AdABzAA==");
base64DecodeToExistingUint8Array(bufferView, 176, "GAAAAAEAAAABAAAAGAAAAH4AbABpAGIALwBtAGEAdABoAC4AdABzAA==");
base64DecodeToExistingUint8Array(bufferView, 224, "AwAAACAAAAAAAAAAIAAAAAAAAAAgAAAAAAAAAA==");
var retasmFunc = asmFunc({Math,Int8Array,Uint8Array,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array,NaN,Infinity}, {abort:function() { throw new Error('abort'); },abort,now,seed,setTempRet0,getTempRet0},memasmFunc);
export var memory = retasmFunc.memory;
export var __alloc = retasmFunc.__alloc;
export var __retain = retasmFunc.__retain;
export var __release = retasmFunc.__release;
export var __collect = retasmFunc.__collect;
export var modpow = retasmFunc.modpow;
export var rng_gen_range = retasmFunc.rng_gen_range;
export var primeCheck = retasmFunc.primeCheck;
