(module
 (type $none_=>_f64 (func (result f64)))
 (type $none_=>_none (func))
 (type $i32_i32_i32_i32_=>_none (func (param i32 i32 i32 i32)))
 (type $i64_=>_none (func (param i64)))
 (type $i32_=>_i32 (func (param i32) (result i32)))
 (type $i64_i32_=>_i32 (func (param i64 i32) (result i32)))
 (type $i64_=>_i64 (func (param i64) (result i64)))
 (type $i64_i64_=>_i64 (func (param i64 i64) (result i64)))
 (type $i64_i64_i64_=>_i64 (func (param i64 i64 i64) (result i64)))
 (import "Date" "now" (func $~lib/bindings/Date/now (result f64)))
 (import "env" "abort" (func $~lib/builtins/abort (param i32 i32 i32 i32)))
 (import "env" "seed" (func $~lib/builtins/seed (result f64)))
 (memory $0 1)
 (data (i32.const 16) "\18\00\00\00\01\00\00\00\01\00\00\00\18\00\00\00~\00l\00i\00b\00/\00m\00a\00t\00h\00.\00t\00s\00")
 (table $0 1 funcref)
 (global $~lib/math/random_seeded (mut i32) (i32.const 0))
 (global $~lib/math/random_state0_64 (mut i64) (i64.const 0))
 (global $~lib/math/random_state1_64 (mut i64) (i64.const 0))
 (global $~lib/math/random_state0_32 (mut i32) (i32.const 0))
 (global $~lib/math/random_state1_32 (mut i32) (i32.const 0))
 (export "memory" (memory $0))
 (export "modpow" (func $assembly/index/modpow))
 (export "rng_gen_range" (func $assembly/index/rng_gen_range))
 (export "primeCheck" (func $assembly/index/primeCheck))
 (start $~start)
 (func $~lib/math/murmurHash3 (param $0 i64) (result i64)
  local.get $0
  local.get $0
  i64.const 33
  i64.shr_u
  i64.xor
  local.set $0
  local.get $0
  i64.const -49064778989728563
  i64.mul
  local.set $0
  local.get $0
  local.get $0
  i64.const 33
  i64.shr_u
  i64.xor
  local.set $0
  local.get $0
  i64.const -4265267296055464877
  i64.mul
  local.set $0
  local.get $0
  local.get $0
  i64.const 33
  i64.shr_u
  i64.xor
  local.set $0
  local.get $0
 )
 (func $~lib/math/splitMix32 (param $0 i32) (result i32)
  local.get $0
  i32.const 1831565813
  i32.add
  local.set $0
  local.get $0
  local.get $0
  i32.const 15
  i32.shr_u
  i32.xor
  local.get $0
  i32.const 1
  i32.or
  i32.mul
  local.set $0
  local.get $0
  local.get $0
  local.get $0
  local.get $0
  i32.const 7
  i32.shr_u
  i32.xor
  local.get $0
  i32.const 61
  i32.or
  i32.mul
  i32.add
  i32.xor
  local.set $0
  local.get $0
  local.get $0
  i32.const 14
  i32.shr_u
  i32.xor
 )
 (func $~lib/math/NativeMath.seedRandom (param $0 i64)
  i32.const 1
  global.set $~lib/math/random_seeded
  local.get $0
  call $~lib/math/murmurHash3
  global.set $~lib/math/random_state0_64
  global.get $~lib/math/random_state0_64
  i64.const -1
  i64.xor
  call $~lib/math/murmurHash3
  global.set $~lib/math/random_state1_64
  local.get $0
  i32.wrap_i64
  call $~lib/math/splitMix32
  global.set $~lib/math/random_state0_32
  global.get $~lib/math/random_state0_32
  call $~lib/math/splitMix32
  global.set $~lib/math/random_state1_32
  global.get $~lib/math/random_state0_64
  i64.const 0
  i64.ne
  if (result i32)
   global.get $~lib/math/random_state1_64
   i64.const 0
   i64.ne
  else
   i32.const 0
  end
  if (result i32)
   global.get $~lib/math/random_state0_32
   i32.const 0
   i32.ne
  else
   i32.const 0
  end
  if (result i32)
   global.get $~lib/math/random_state1_32
   i32.const 0
   i32.ne
  else
   i32.const 0
  end
  i32.eqz
  if
   i32.const 0
   i32.const 32
   i32.const 1398
   i32.const 5
   call $~lib/builtins/abort
   unreachable
  end
 )
 (func $start:assembly/index
  call $~lib/bindings/Date/now
  i64.trunc_f64_s
  call $~lib/math/NativeMath.seedRandom
 )
 (func $assembly/index/modpow (param $0 i64) (param $1 i64) (param $2 i64) (result i64)
  (local $3 i64)
  (local $4 i32)
  local.get $2
  i64.const 1
  i64.eq
  if
   i64.const 0
   return
  end
  i64.const 1
  local.set $3
  local.get $0
  local.get $2
  i64.rem_u
  local.set $0
  loop $while-continue|0
   local.get $1
   i64.const 0
   i64.gt_u
   local.set $4
   local.get $4
   if
    local.get $1
    i64.const 1
    i64.and
    i64.const 0
    i64.ne
    if
     local.get $3
     local.get $0
     i64.mul
     local.get $2
     i64.rem_u
     local.set $3
    end
    local.get $1
    i64.const 1
    i64.shr_u
    local.set $1
    local.get $0
    local.get $0
    i64.mul
    local.get $2
    i64.rem_u
    local.set $0
    br $while-continue|0
   end
  end
  local.get $3
 )
 (func $~lib/math/NativeMath.random (result f64)
  (local $0 i64)
  (local $1 i64)
  (local $2 i64)
  global.get $~lib/math/random_seeded
  i32.eqz
  if
   call $~lib/builtins/seed
   i64.reinterpret_f64
   call $~lib/math/NativeMath.seedRandom
  end
  global.get $~lib/math/random_state0_64
  local.set $0
  global.get $~lib/math/random_state1_64
  local.set $1
  local.get $1
  global.set $~lib/math/random_state0_64
  local.get $0
  local.get $0
  i64.const 23
  i64.shl
  i64.xor
  local.set $0
  local.get $0
  local.get $0
  i64.const 17
  i64.shr_u
  i64.xor
  local.set $0
  local.get $0
  local.get $1
  i64.xor
  local.set $0
  local.get $0
  local.get $1
  i64.const 26
  i64.shr_u
  i64.xor
  local.set $0
  local.get $0
  global.set $~lib/math/random_state1_64
  local.get $1
  i64.const 12
  i64.shr_u
  i64.const 4607182418800017408
  i64.or
  local.set $2
  local.get $2
  f64.reinterpret_i64
  f64.const 1
  f64.sub
 )
 (func $assembly/index/rng_gen_range (param $0 i64) (param $1 i64) (result i64)
  (local $2 f64)
  (local $3 f64)
  local.get $1
  local.get $0
  i64.sub
  f64.convert_i64_u
  local.set $2
  call $~lib/math/NativeMath.random
  local.get $2
  f64.mul
  local.set $3
  local.get $3
  f64.floor
  i64.trunc_f64_u
  local.get $0
  i64.add
 )
 (func $assembly/index/primeCheck (param $0 i64) (param $1 i32) (result i32)
  (local $2 i32)
  (local $3 i64)
  (local $4 i64)
  local.get $0
  i64.const 1
  i64.eq
  if (result i32)
   i32.const 1
  else
   local.get $0
   i64.const 3
   i64.eq
  end
  if
   i32.const 1
   return
  else
   local.get $0
   i64.const 1
   i64.and
   i64.const 0
   i64.eq
   if
    i32.const 0
    return
   end
  end
  loop $while-continue|0
   local.get $1
   i32.const 0
   i32.gt_s
   local.set $2
   local.get $2
   if
    i64.const 2
    local.get $0
    i64.const 2
    i64.sub
    call $assembly/index/rng_gen_range
    local.set $3
    local.get $3
    local.get $0
    i64.const 1
    i64.sub
    local.get $0
    call $assembly/index/modpow
    local.set $4
    local.get $4
    i64.const 1
    i64.ne
    if
     i32.const 0
     return
    end
    local.get $1
    i32.const 1
    i32.sub
    local.set $1
    br $while-continue|0
   end
  end
  i32.const 1
 )
 (func $~start
  call $start:assembly/index
 )
)
