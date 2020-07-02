import { now } from 'Date';
import { abort } from 'env';
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
 var $lib_bindings_Date_now = env.now;
 var $lib_builtins_abort = env.abort;
 var $lib_builtins_seed = env.seed;
 var setTempRet0 = env.setTempRet0;
 var getTempRet0 = env.getTempRet0;
 var $lib_math_random_seeded = 0;
 var $lib_math_random_state0_64 = 0;
 var $lib_math_random_state1_64 = 0;
 var $lib_math_random_state0_32 = 0;
 var $lib_math_random_state1_32 = 0;
 var $lib_math_random_state0_64$hi = 0;
 var $lib_math_random_state1_64$hi = 0;
 var i64toi32_i32$HIGH_BITS = 0;
 function $lib_math_NativeMath_seedRandom($0, $1) {
  var $2 = 0, $3 = 0, $4 = 0, $5 = 0, $6 = 0;
  $lib_math_random_seeded = 1;
  $3 = ($1 >>> 1 | 0) ^ $0 | 0;
  $4 = $3 >>> 16 | 0;
  $2 = (Math_imul($4, 60757) + Math_imul($1, -313160499) | 0) + Math_imul($3, -11423785) | 0;
  $1 = $3 & 65535 | 0;
  $3 = Math_imul($1, 36045);
  $4 = Math_imul($4, 36045) + ($3 >>> 16 | 0) | 0;
  $1 = Math_imul($1, 60757) + ($4 & 65535 | 0) | 0;
  i64toi32_i32$HIGH_BITS = ($2 + ($4 >>> 16 | 0) | 0) + ($1 >>> 16 | 0) | 0;
  $1 = $3 & 65535 | 0 | ($1 << 16 | 0) | 0;
  $3 = i64toi32_i32$HIGH_BITS;
  $1 = $1 ^ ($3 >>> 1 | 0) | 0;
  $4 = $1 >>> 16 | 0;
  $2 = (Math_imul($4, 6789) + Math_imul($3, 444984403) | 0) + Math_imul($1, -993084930) | 0;
  $1 = $1 & 65535 | 0;
  $3 = Math_imul($1, 60499);
  $4 = Math_imul($4, 60499) + ($3 >>> 16 | 0) | 0;
  $1 = Math_imul($1, 6789) + ($4 & 65535 | 0) | 0;
  i64toi32_i32$HIGH_BITS = ($2 + ($4 >>> 16 | 0) | 0) + ($1 >>> 16 | 0) | 0;
  $3 = $3 & 65535 | 0 | ($1 << 16 | 0) | 0;
  $1 = i64toi32_i32$HIGH_BITS;
  $lib_math_random_state0_64 = $3 ^ ($1 >>> 1 | 0) | 0;
  $lib_math_random_state0_64$hi = $1;
  $3 = $lib_math_random_state0_64;
  $4 = $lib_math_random_state0_64$hi;
  $2 = $4 ^ -1 | 0;
  $1 = ($3 ^ -1 | 0) ^ ($2 >>> 1 | 0) | 0;
  $5 = $1 >>> 16 | 0;
  $6 = (Math_imul($5, 60757) + Math_imul($2, -313160499) | 0) + Math_imul($1, -11423785) | 0;
  $1 = $1 & 65535 | 0;
  $2 = Math_imul($1, 36045);
  $5 = Math_imul($5, 36045) + ($2 >>> 16 | 0) | 0;
  $1 = Math_imul($1, 60757) + ($5 & 65535 | 0) | 0;
  i64toi32_i32$HIGH_BITS = ($6 + ($5 >>> 16 | 0) | 0) + ($1 >>> 16 | 0) | 0;
  $1 = $2 & 65535 | 0 | ($1 << 16 | 0) | 0;
  $2 = i64toi32_i32$HIGH_BITS;
  $1 = $1 ^ ($2 >>> 1 | 0) | 0;
  $5 = $1 >>> 16 | 0;
  $6 = (Math_imul($5, 6789) + Math_imul($2, 444984403) | 0) + Math_imul($1, -993084930) | 0;
  $1 = $1 & 65535 | 0;
  $2 = Math_imul($1, 60499);
  $5 = Math_imul($5, 60499) + ($2 >>> 16 | 0) | 0;
  $1 = Math_imul($1, 6789) + ($5 & 65535 | 0) | 0;
  i64toi32_i32$HIGH_BITS = ($6 + ($5 >>> 16 | 0) | 0) + ($1 >>> 16 | 0) | 0;
  $2 = $2 & 65535 | 0 | ($1 << 16 | 0) | 0;
  $1 = i64toi32_i32$HIGH_BITS;
  $lib_math_random_state1_64 = $2 ^ ($1 >>> 1 | 0) | 0;
  $lib_math_random_state1_64$hi = $1;
  $0 = $0 + 1831565813 | 0;
  $0 = Math_imul($0 ^ ($0 >>> 15 | 0) | 0, $0 | 1 | 0);
  $1 = $0 >>> 7 | 0;
  $0 = (Math_imul($0 | 61 | 0, $0 ^ $1 | 0) + $0 | 0) ^ $0 | 0;
  $lib_math_random_state0_32 = $0 ^ ($0 >>> 14 | 0) | 0;
  $1 = $lib_math_random_state0_32;
  $0 = $1 + 1831565813 | 0;
  $0 = Math_imul($0 ^ ($0 >>> 15 | 0) | 0, $0 | 1 | 0);
  $2 = $0 >>> 7 | 0;
  $0 = (Math_imul($0 | 61 | 0, $0 ^ $2 | 0) + $0 | 0) ^ $0 | 0;
  $lib_math_random_state1_32 = $0 ^ ($0 >>> 14 | 0) | 0;
  if (!((($3 | $4 | 0 ? $lib_math_random_state1_64 | $lib_math_random_state1_64$hi | 0 : 0) ? $1 : 0) ? ($lib_math_random_state1_32 | 0) != (0 | 0) : 0)) {
   $lib_builtins_abort(0 | 0, 1040 | 0, 1398 | 0, 5 | 0);
   abort();
  }
 }
 
 function assembly_index_modpow($0, $1, $2, $3, $4, $5) {
  $0 = $0 | 0;
  $1 = $1 | 0;
  $2 = $2 | 0;
  $3 = $3 | 0;
  $4 = $4 | 0;
  $5 = $5 | 0;
  var $6 = 0, $7 = 0, $8 = 0, $9 = 0, $10 = 0, $11 = 0, $12 = 0;
  if (!$5 & ($4 | 0) == (1 | 0) | 0) {
   i64toi32_i32$HIGH_BITS = 0;
   return 0 | 0;
  }
  $8 = 1;
  _ZN17compiler_builtins3int4udiv10divmod_u6417h6026910b5ed08e40E($0, $1, $4, $5);
  $0 = legalimport$wasm2js_scratch_load_i64() | 0;
  i64toi32_i32$HIGH_BITS = getTempRet0() | 0;
  $1 = i64toi32_i32$HIGH_BITS;
  while_continue_0 : while (1) {
   if (!$3 & $2 >>> 0 > 0 >>> 0 | 0 | $3 >>> 0 > 0 >>> 0 | 0) {
    if ($2 & 1 | 0) {
     $6 = $8 & 65535 | 0;
     $7 = $0 & 65535 | 0;
     $9 = Math_imul($6, $7);
     $10 = $0 >>> 16 | 0;
     $11 = ($9 >>> 16 | 0) + Math_imul($6, $10) | 0;
     $6 = $8 >>> 16 | 0;
     $7 = Math_imul($7, $6) + ($11 & 65535 | 0) | 0;
     i64toi32_i32$HIGH_BITS = (((Math_imul($6, $10) + Math_imul($1, $8) | 0) + Math_imul($0, $12) | 0) + ($11 >>> 16 | 0) | 0) + ($7 >>> 16 | 0) | 0;
     _ZN17compiler_builtins3int4udiv10divmod_u6417h6026910b5ed08e40E($9 & 65535 | 0 | ($7 << 16 | 0) | 0, i64toi32_i32$HIGH_BITS, $4, $5);
     $8 = legalimport$wasm2js_scratch_load_i64() | 0;
     i64toi32_i32$HIGH_BITS = getTempRet0() | 0;
     $12 = i64toi32_i32$HIGH_BITS;
    }
    $2 = ($3 & 1 | 0) << 31 | 0 | ($2 >>> 1 | 0) | 0;
    $3 = $3 >>> 1 | 0;
    $6 = $0 & 65535 | 0;
    $10 = Math_imul($6, $6);
    $7 = $0 >>> 16 | 0;
    $6 = Math_imul($6, $7);
    $9 = ($10 >>> 16 | 0) + $6 | 0;
    $1 = ((Math_imul($7, $7) + Math_imul($0, $1) | 0) + Math_imul($0, $1) | 0) + ($9 >>> 16 | 0) | 0;
    $0 = ($9 & 65535 | 0) + $6 | 0;
    i64toi32_i32$HIGH_BITS = $1 + ($0 >>> 16 | 0) | 0;
    _ZN17compiler_builtins3int4udiv10divmod_u6417h6026910b5ed08e40E($10 & 65535 | 0 | ($0 << 16 | 0) | 0, i64toi32_i32$HIGH_BITS, $4, $5);
    $0 = legalimport$wasm2js_scratch_load_i64() | 0;
    i64toi32_i32$HIGH_BITS = getTempRet0() | 0;
    $1 = i64toi32_i32$HIGH_BITS;
    continue while_continue_0;
   }
   break while_continue_0;
  };
  i64toi32_i32$HIGH_BITS = $12;
  return $8 | 0;
 }
 
 function assembly_index_rng_gen_range($0, $1, $2, $3) {
  $0 = $0 | 0;
  $1 = $1 | 0;
  $2 = $2 | 0;
  $3 = $3 | 0;
  var $4 = 0, $5 = 0, $6 = 0, $7 = 0.0, $8 = 0, $9 = 0;
  if (!$lib_math_random_seeded) {
   wasm2js_scratch_store_f64(+(+$lib_builtins_seed()));
   $4 = wasm2js_scratch_load_i32(1 | 0) | 0;
   $lib_math_NativeMath_seedRandom(wasm2js_scratch_load_i32(0 | 0) | 0, $4);
  }
  $4 = $lib_math_random_state0_64;
  $8 = $lib_math_random_state0_64$hi;
  $9 = $lib_math_random_state1_64;
  $lib_math_random_state0_64 = $9;
  $6 = $lib_math_random_state1_64$hi;
  $lib_math_random_state0_64$hi = $6;
  $5 = $8;
  $8 = $5 << 23 | 0 | ($4 >>> 9 | 0) | 0;
  $4 = ($4 << 23 | 0) ^ $4 | 0;
  $5 = $5 ^ $8 | 0;
  $8 = ((($5 & 131071 | 0) << 15 | 0 | ($4 >>> 17 | 0) | 0) ^ $4 | 0) ^ $9 | 0;
  $5 = (($5 >>> 17 | 0) ^ $5 | 0) ^ $6 | 0;
  $4 = $9;
  $lib_math_random_state1_64 = (($6 & 67108863 | 0) << 6 | 0 | ($4 >>> 26 | 0) | 0) ^ $8 | 0;
  $lib_math_random_state1_64$hi = ($6 >>> 26 | 0) ^ $5 | 0;
  wasm2js_scratch_store_i32(0 | 0, ($6 & 4095 | 0) << 20 | 0 | ($4 >>> 12 | 0) | 0 | 0);
  wasm2js_scratch_store_i32(1 | 0, $6 >>> 12 | 0 | 1072693248 | 0 | 0);
  $7 = Math_floor((+wasm2js_scratch_load_f64() - 1.0) * (+(($2 - $0 | 0) >>> 0) + 4294967296.0 * +(($3 - (($2 >>> 0 < $0 >>> 0) + $1 | 0) | 0) >>> 0)));
  if (Math_abs($7) >= 1.0) {
   if ($7 > 0.0) {
    $2 = ~~Math_min(Math_floor($7 / 4294967296.0), 4294967295.0) >>> 0
   } else {
    $2 = ~~Math_ceil(($7 - +(~~$7 >>> 0 >>> 0)) / 4294967296.0) >>> 0
   }
  } else {
   $2 = 0
  }
  $2 = $2 + $1 | 0;
  $1 = ~~$7 >>> 0;
  $0 = $1 + $0 | 0;
  if ($0 >>> 0 < $1 >>> 0) {
   $2 = $2 + 1 | 0
  }
  i64toi32_i32$HIGH_BITS = $2;
  return $0 | 0;
 }
 
 function $start() {
  var $0 = 0.0, $1 = 0;
  $0 = +$lib_bindings_Date_now();
  if (Math_abs($0) >= 1.0) {
   if ($0 > 0.0) {
    $1 = ~~Math_min(Math_floor($0 / 4294967296.0), 4294967295.0) >>> 0
   } else {
    $1 = ~~Math_ceil(($0 - +(~~$0 >>> 0 >>> 0)) / 4294967296.0) >>> 0
   }
  } else {
   $1 = 0
  }
  $lib_math_NativeMath_seedRandom(~~$0 >>> 0, $1);
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
  var $3 = 0, $4 = 0;
  $4 = !$1;
  $3 = 1;
  __inlined_func$assembly_index_primeCheck : {
   if (($0 | 0) == (1 | 0) & $4 | 0 ? 1 : $4 & ($0 | 0) == (3 | 0) | 0) {
    break __inlined_func$assembly_index_primeCheck
   }
   $3 = 0;
   if (!($0 & 1 | 0)) {
    break __inlined_func$assembly_index_primeCheck
   }
   while_continue_0 : while (1) {
    if (($2 | 0) > (0 | 0)) {
     $3 = 0;
     if ((assembly_index_modpow(assembly_index_rng_gen_range(2, 0, $0 - 2 | 0, $1 - ($0 >>> 0 < 2 >>> 0) | 0), i64toi32_i32$HIGH_BITS, $0 - 1 | 0, $1 - ($0 >>> 0 < 1 >>> 0) | 0, $0, $1) | 0) != (1 | 0) | i64toi32_i32$HIGH_BITS | 0) {
      break __inlined_func$assembly_index_primeCheck
     }
     $2 = $2 - 1 | 0;
     continue while_continue_0;
    }
    break while_continue_0;
   };
   $3 = 1;
  }
  return $3;
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
           __inlined_func$__wasm_ctz_i32 : {
            if ($3) {
             break __inlined_func$__wasm_ctz_i32
            }
           }
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
      if ($2) {
       $0 = 31 - Math_clz32(($2 + -1 | 0) ^ $2 | 0) | 0
      } else {
       $0 = 32
      }
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
base64DecodeToExistingUint8Array(bufferView, 1024, "GAAAAAEAAAABAAAAGAAAAH4AbABpAGIALwBtAGEAdABoAC4AdABz");
var retasmFunc = asmFunc({Math,Int8Array,Uint8Array,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array,NaN,Infinity}, {abort:function() { throw new Error('abort'); },now,abort,seed,setTempRet0,getTempRet0},memasmFunc);
export var memory = retasmFunc.memory;
export var modpow = retasmFunc.modpow;
export var rng_gen_range = retasmFunc.rng_gen_range;
export var primeCheck = retasmFunc.primeCheck;
