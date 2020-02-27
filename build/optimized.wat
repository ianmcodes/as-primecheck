(module
 (type $i32_i32_=>_none (func (param i32 i32)))
 (type $i32_=>_none (func (param i32)))
 (type $i32_i32_i32_i32_=>_i32 (func (param i32 i32 i32 i32) (result i32)))
 (type $i32_=>_i32 (func (param i32) (result i32)))
 (type $i32_i32_=>_i32 (func (param i32 i32) (result i32)))
 (type $none_=>_i32 (func (result i32)))
 (type $i32_i32_i32_=>_i32 (func (param i32 i32 i32) (result i32)))
 (type $none_=>_f64 (func (result f64)))
 (type $i32_i32_i32_=>_none (func (param i32 i32 i32)))
 (type $i32_i32_i32_i32_=>_none (func (param i32 i32 i32 i32)))
 (type $i32_i32_i32_i32_i32_i32_=>_i32 (func (param i32 i32 i32 i32 i32 i32) (result i32)))
 (type $none_=>_none (func))
 (import "env" "abort" (func $~lib/builtins/abort (param i32 i32 i32 i32)))
 (import "Date" "now" (func $~lib/bindings/Date/now (result f64)))
 (import "env" "wasm2js_scratch_store_i32" (func $wasm2js_scratch_store_i32 (param i32 i32)))
 (import "env" "wasm2js_scratch_load_f64" (func $wasm2js_scratch_load_f64 (result f64)))
 (import "env" "setTempRet0" (func $setTempRet0 (param i32)))
 (import "env" "getTempRet0" (func $getTempRet0 (result i32)))
 (import "env" "wasm2js_scratch_load_i64" (func $legalimport$wasm2js_scratch_load_i64 (result i32)))
 (import "env" "wasm2js_scratch_store_i64" (func $legalimport$wasm2js_scratch_store_i64 (param i32 i32)))
 (memory $0 1)
 (data (i32.const 16) "\1e\00\00\00\01\00\00\00\01\00\00\00\1e\00\00\00~\00l\00i\00b\00/\00r\00t\00/\00t\00l\00s\00f\00.\00t\00s")
 (data (i32.const 64) "(\00\00\00\01\00\00\00\01\00\00\00(\00\00\00a\00l\00l\00o\00c\00a\00t\00i\00o\00n\00 \00t\00o\00o\00 \00l\00a\00r\00g\00e")
 (data (i32.const 128) "\1e\00\00\00\01\00\00\00\01\00\00\00\1e\00\00\00~\00l\00i\00b\00/\00r\00t\00/\00p\00u\00r\00e\00.\00t\00s")
 (data (i32.const 176) "\18\00\00\00\01\00\00\00\01\00\00\00\18\00\00\00~\00l\00i\00b\00/\00m\00a\00t\00h\00.\00t\00s")
 (data (i32.const 224) "(\00\00\00\01\00\00\00\01\00\00\00(\00\00\00P\00R\00N\00G\00 \00m\00u\00s\00t\00 \00b\00e\00 \00s\00e\00e\00d\00e\00d\00.")
 (data (i32.const 288) "\03\00\00\00\10\00\00\00\00\00\00\00\10\00\00\00\00\00\00\00\10")
 (global $~lib/rt/tlsf/ROOT (mut i32) (i32.const 0))
 (global $~lib/rt/tlsf/collectLock (mut i32) (i32.const 0))
 (global $~lib/math/random_seeded (mut i32) (i32.const 0))
 (global $~lib/math/random_state0_64 (mut i32) (i32.const 0))
 (global $~lib/math/random_state1_64 (mut i32) (i32.const 0))
 (global $~lib/math/random_state0_32 (mut i32) (i32.const 0))
 (global $~lib/math/random_state1_32 (mut i32) (i32.const 0))
 (global $~lib/rt/__rtti_base i32 (i32.const 288))
 (global $~lib/math/random_state0_64$hi (mut i32) (i32.const 0))
 (global $~lib/math/random_state1_64$hi (mut i32) (i32.const 0))
 (global $i64toi32_i32$HIGH_BITS (mut i32) (i32.const 0))
 (export "memory" (memory $0))
 (export "__alloc" (func $~lib/rt/tlsf/__alloc))
 (export "__retain" (func $~lib/rt/pure/__retain))
 (export "__release" (func $~lib/rt/pure/__release))
 (export "__collect" (func $~lib/rt/pure/__collect))
 (export "__rtti_base" (global $~lib/rt/__rtti_base))
 (export "add" (func $assembly/index/add))
 (export "modpow" (func $legalstub$assembly/index/modpow))
 (export "rng_gen_range" (func $legalstub$assembly/index/rng_gen_range))
 (export "primeCheck" (func $legalstub$assembly/index/primeCheck))
 (func $~lib/rt/tlsf/removeBlock (; 8 ;) (param $0 i32) (param $1 i32)
  (local $2 i32)
  (local $3 i32)
  (local $4 i32)
  (local $5 i32)
  local.get $1
  i32.load
  local.set $2
  local.get $2
  i32.const 1
  i32.and
  i32.eqz
  if
   i32.const 0
   i32.const 32
   i32.const 277
   i32.const 13
   call $~lib/builtins/abort
   unreachable
  end
  local.get $2
  i32.const -4
  i32.and
  local.set $2
  local.get $2
  i32.const 16
  i32.ge_u
  if
   local.get $2
   i32.const 1073741808
   i32.lt_u
   local.set $3
  else
   i32.const 0
   local.set $3
  end
  local.get $3
  i32.eqz
  if
   i32.const 0
   i32.const 32
   i32.const 279
   i32.const 13
   call $~lib/builtins/abort
   unreachable
  end
  local.get $2
  i32.const 256
  i32.lt_u
  if
   local.get $2
   i32.const 4
   i32.shr_u
   local.set $4
   i32.const 0
   local.set $2
  else
   local.get $2
   i32.const 31
   local.get $2
   i32.clz
   i32.sub
   local.set $2
   local.get $2
   i32.const 4
   i32.sub
   i32.shr_u
   i32.const 16
   i32.xor
   local.set $4
   local.get $2
   i32.const 7
   i32.sub
   local.set $2
  end
  local.get $2
  i32.const 23
  i32.lt_u
  if
   local.get $4
   i32.const 16
   i32.lt_u
   local.set $3
  else
   i32.const 0
   local.set $3
  end
  local.get $3
  i32.eqz
  if
   i32.const 0
   i32.const 32
   i32.const 292
   i32.const 13
   call $~lib/builtins/abort
   unreachable
  end
  local.get $1
  i32.load offset=20
  local.set $3
  local.get $1
  i32.load offset=16
  local.set $5
  local.get $5
  if
   local.get $5
   local.get $3
   i32.store offset=20
  end
  local.get $3
  if
   local.get $3
   local.get $5
   i32.store offset=16
  end
  local.get $2
  i32.const 4
  i32.shl
  local.get $4
  i32.add
  i32.const 2
  i32.shl
  local.get $0
  i32.add
  i32.load offset=96
  local.get $1
  i32.eq
  if
   local.get $2
   i32.const 4
   i32.shl
   local.get $4
   i32.add
   i32.const 2
   i32.shl
   local.get $0
   i32.add
   local.get $3
   i32.store offset=96
   local.get $3
   i32.eqz
   if
    local.get $2
    i32.const 2
    i32.shl
    local.get $0
    i32.add
    local.set $3
    local.get $3
    i32.load offset=4
    i32.const 1
    local.get $4
    i32.shl
    i32.const -1
    i32.xor
    i32.and
    local.set $1
    local.get $3
    local.get $1
    i32.store offset=4
    local.get $1
    i32.eqz
    if
     local.get $0
     local.get $0
     i32.load
     i32.const 1
     local.get $2
     i32.shl
     i32.const -1
     i32.xor
     i32.and
     i32.store
    end
   end
  end
 )
 (func $~lib/rt/tlsf/insertBlock (; 9 ;) (param $0 i32) (param $1 i32)
  (local $2 i32)
  (local $3 i32)
  (local $4 i32)
  (local $5 i32)
  (local $6 i32)
  (local $7 i32)
  local.get $1
  i32.eqz
  if
   i32.const 0
   i32.const 32
   i32.const 205
   i32.const 13
   call $~lib/builtins/abort
   unreachable
  end
  local.get $1
  i32.load
  local.set $3
  local.get $3
  i32.const 1
  i32.and
  i32.eqz
  if
   i32.const 0
   i32.const 32
   i32.const 207
   i32.const 13
   call $~lib/builtins/abort
   unreachable
  end
  local.get $1
  i32.const 16
  i32.add
  local.get $1
  i32.load
  i32.const -4
  i32.and
  i32.add
  local.set $4
  local.get $4
  i32.load
  local.set $5
  local.get $5
  i32.const 1
  i32.and
  if
   local.get $3
   i32.const -4
   i32.and
   i32.const 16
   i32.add
   local.get $5
   i32.const -4
   i32.and
   i32.add
   local.set $2
   local.get $2
   i32.const 1073741808
   i32.lt_u
   if
    local.get $0
    local.get $4
    call $~lib/rt/tlsf/removeBlock
    local.get $2
    local.get $3
    i32.const 3
    i32.and
    i32.or
    local.set $3
    local.get $1
    local.get $3
    i32.store
    local.get $1
    i32.const 16
    i32.add
    local.get $1
    i32.load
    i32.const -4
    i32.and
    i32.add
    local.set $4
    local.get $4
    i32.load
    local.set $5
   end
  end
  local.get $3
  i32.const 2
  i32.and
  if
   local.get $1
   i32.const 4
   i32.sub
   i32.load
   local.set $2
   local.get $2
   i32.load
   local.set $6
   local.get $6
   i32.const 1
   i32.and
   i32.eqz
   if
    i32.const 0
    i32.const 32
    i32.const 228
    i32.const 15
    call $~lib/builtins/abort
    unreachable
   end
   local.get $6
   i32.const -4
   i32.and
   i32.const 16
   i32.add
   local.get $3
   i32.const -4
   i32.and
   i32.add
   local.set $7
   local.get $7
   i32.const 1073741808
   i32.lt_u
   if
    local.get $0
    local.get $2
    call $~lib/rt/tlsf/removeBlock
    local.get $6
    i32.const 3
    i32.and
    local.get $7
    i32.or
    local.set $3
    local.get $2
    local.get $3
    i32.store
    local.get $2
    local.set $1
   end
  end
  local.get $4
  local.get $5
  i32.const 2
  i32.or
  i32.store
  local.get $3
  i32.const -4
  i32.and
  local.set $2
  local.get $2
  i32.const 16
  i32.ge_u
  if
   local.get $2
   i32.const 1073741808
   i32.lt_u
   local.set $3
  else
   i32.const 0
   local.set $3
  end
  local.get $3
  i32.eqz
  if
   i32.const 0
   i32.const 32
   i32.const 243
   i32.const 13
   call $~lib/builtins/abort
   unreachable
  end
  local.get $2
  local.get $1
  i32.const 16
  i32.add
  i32.add
  local.get $4
  i32.ne
  if
   i32.const 0
   i32.const 32
   i32.const 244
   i32.const 13
   call $~lib/builtins/abort
   unreachable
  end
  local.get $4
  i32.const 4
  i32.sub
  local.get $1
  i32.store
  local.get $2
  i32.const 256
  i32.lt_u
  if
   local.get $2
   i32.const 4
   i32.shr_u
   local.set $4
   i32.const 0
   local.set $2
  else
   local.get $2
   i32.const 31
   local.get $2
   i32.clz
   i32.sub
   local.set $2
   local.get $2
   i32.const 4
   i32.sub
   i32.shr_u
   i32.const 16
   i32.xor
   local.set $4
   local.get $2
   i32.const 7
   i32.sub
   local.set $2
  end
  local.get $2
  i32.const 23
  i32.lt_u
  if
   local.get $4
   i32.const 16
   i32.lt_u
   local.set $3
  else
   i32.const 0
   local.set $3
  end
  local.get $3
  i32.eqz
  if
   i32.const 0
   i32.const 32
   i32.const 260
   i32.const 13
   call $~lib/builtins/abort
   unreachable
  end
  local.get $2
  i32.const 4
  i32.shl
  local.get $4
  i32.add
  i32.const 2
  i32.shl
  local.get $0
  i32.add
  i32.load offset=96
  local.set $3
  local.get $1
  i32.const 0
  i32.store offset=16
  local.get $1
  local.get $3
  i32.store offset=20
  local.get $3
  if
   local.get $3
   local.get $1
   i32.store offset=16
  end
  local.get $2
  i32.const 4
  i32.shl
  local.get $4
  i32.add
  i32.const 2
  i32.shl
  local.get $0
  i32.add
  local.get $1
  i32.store offset=96
  local.get $0
  local.get $0
  i32.load
  i32.const 1
  local.get $2
  i32.shl
  i32.or
  i32.store
  local.get $2
  i32.const 2
  i32.shl
  local.get $0
  i32.add
  local.set $0
  local.get $0
  i32.load offset=4
  i32.const 1
  local.get $4
  i32.shl
  i32.or
  local.set $1
  local.get $0
  local.get $1
  i32.store offset=4
 )
 (func $~lib/rt/tlsf/addMemory (; 10 ;) (param $0 i32) (param $1 i32) (param $2 i32)
  (local $3 i32)
  (local $4 i32)
  local.get $2
  i32.const 15
  i32.and
  i32.eqz
  i32.const 0
  local.get $1
  i32.const 15
  i32.and
  i32.eqz
  i32.const 0
  local.get $1
  local.get $2
  i32.le_u
  select
  select
  i32.eqz
  if
   i32.const 0
   i32.const 32
   i32.const 386
   i32.const 4
   call $~lib/builtins/abort
   unreachable
  end
  local.get $0
  i32.load offset=1568
  local.set $3
  local.get $3
  if
   local.get $1
   local.get $3
   i32.const 16
   i32.add
   i32.lt_u
   if
    i32.const 0
    i32.const 32
    i32.const 396
    i32.const 15
    call $~lib/builtins/abort
    unreachable
   end
   local.get $1
   i32.const 16
   i32.sub
   local.get $3
   i32.eq
   if
    local.get $3
    i32.load
    local.set $4
    local.get $1
    i32.const 16
    i32.sub
    local.set $1
   end
  else
   local.get $1
   local.get $0
   i32.const 1572
   i32.add
   i32.lt_u
   if
    i32.const 0
    i32.const 32
    i32.const 408
    i32.const 4
    call $~lib/builtins/abort
    unreachable
   end
  end
  local.get $2
  local.get $1
  i32.sub
  local.set $2
  local.get $2
  i32.const 48
  i32.lt_u
  if
   return
  end
  local.get $1
  local.get $4
  i32.const 2
  i32.and
  local.get $2
  i32.const 32
  i32.sub
  i32.const 1
  i32.or
  i32.or
  i32.store
  local.get $1
  i32.const 0
  i32.store offset=16
  local.get $1
  i32.const 0
  i32.store offset=20
  local.get $1
  local.get $2
  i32.add
  i32.const 16
  i32.sub
  local.set $2
  local.get $2
  i32.const 2
  i32.store
  local.get $0
  local.get $2
  i32.store offset=1568
  local.get $0
  local.get $1
  call $~lib/rt/tlsf/insertBlock
 )
 (func $~lib/rt/tlsf/maybeInitialize (; 11 ;) (result i32)
  (local $0 i32)
  (local $1 i32)
  (local $2 i32)
  global.get $~lib/rt/tlsf/ROOT
  local.set $2
  local.get $2
  i32.eqz
  if
   memory.size
   local.set $0
   i32.const 1
   local.get $0
   i32.gt_s
   if
    i32.const 1
    local.get $0
    i32.sub
    memory.grow
    i32.const 0
    i32.lt_s
    local.set $0
   else
    i32.const 0
    local.set $0
   end
   local.get $0
   if
    unreachable
   end
   i32.const 320
   local.set $2
   i32.const 320
   i32.const 0
   i32.store
   i32.const 1888
   i32.const 0
   i32.store
   loop $for-loop|0
    local.get $1
    i32.const 23
    i32.lt_u
    if
     local.get $1
     i32.const 2
     i32.shl
     i32.const 320
     i32.add
     i32.const 0
     i32.store offset=4
     i32.const 0
     local.set $0
     loop $for-loop|1
      local.get $0
      i32.const 16
      i32.lt_u
      if
       local.get $1
       i32.const 4
       i32.shl
       local.get $0
       i32.add
       i32.const 2
       i32.shl
       i32.const 320
       i32.add
       i32.const 0
       i32.store offset=96
       local.get $0
       i32.const 1
       i32.add
       local.set $0
       br $for-loop|1
      end
     end
     local.get $1
     i32.const 1
     i32.add
     local.set $1
     br $for-loop|0
    end
   end
   i32.const 320
   i32.const 1904
   memory.size
   i32.const 16
   i32.shl
   call $~lib/rt/tlsf/addMemory
   i32.const 320
   global.set $~lib/rt/tlsf/ROOT
  end
  local.get $2
  return
 )
 (func $~lib/rt/tlsf/prepareSize (; 12 ;) (param $0 i32) (result i32)
  local.get $0
  i32.const 1073741808
  i32.ge_u
  if
   i32.const 80
   i32.const 32
   i32.const 457
   i32.const 29
   call $~lib/builtins/abort
   unreachable
  end
  local.get $0
  i32.const 15
  i32.add
  i32.const -16
  i32.and
  local.set $0
  local.get $0
  i32.const 16
  local.get $0
  i32.const 16
  i32.gt_u
  select
  return
 )
 (func $~lib/rt/tlsf/searchBlock (; 13 ;) (param $0 i32) (param $1 i32) (result i32)
  (local $2 i32)
  (local $3 i32)
  local.get $1
  i32.const 256
  i32.lt_u
  if
   local.get $1
   i32.const 4
   i32.shr_u
   local.set $1
  else
   i32.const 1
   i32.const 27
   local.get $1
   i32.clz
   i32.sub
   i32.shl
   local.get $1
   i32.add
   i32.const 1
   i32.sub
   local.get $1
   local.get $1
   i32.const 536870904
   i32.lt_u
   select
   local.set $3
   i32.const 31
   local.get $3
   i32.clz
   i32.sub
   local.set $2
   local.get $2
   i32.const 4
   i32.sub
   local.set $1
   local.get $2
   i32.const 7
   i32.sub
   local.set $2
   local.get $3
   local.get $1
   i32.shr_u
   i32.const 16
   i32.xor
   local.set $1
  end
  local.get $1
  i32.const 16
  i32.lt_u
  i32.const 0
  local.get $2
  i32.const 23
  i32.lt_u
  select
  i32.eqz
  if
   i32.const 0
   i32.const 32
   i32.const 338
   i32.const 13
   call $~lib/builtins/abort
   unreachable
  end
  local.get $2
  i32.const 2
  i32.shl
  local.get $0
  i32.add
  i32.load offset=4
  i32.const -1
  local.get $1
  i32.shl
  i32.and
  local.set $1
  local.get $1
  if
   local.get $1
   call $__wasm_ctz_i32
   local.get $2
   i32.const 4
   i32.shl
   i32.add
   i32.const 2
   i32.shl
   local.get $0
   i32.add
   i32.load offset=96
   local.set $0
  else
   local.get $0
   i32.load
   i32.const -1
   local.get $2
   i32.const 1
   i32.add
   i32.shl
   i32.and
   local.set $1
   local.get $1
   if
    local.get $1
    call $__wasm_ctz_i32
    local.set $2
    local.get $2
    i32.const 2
    i32.shl
    local.get $0
    i32.add
    i32.load offset=4
    local.set $1
    local.get $1
    i32.eqz
    if
     i32.const 0
     i32.const 32
     i32.const 351
     i32.const 17
     call $~lib/builtins/abort
     unreachable
    end
    local.get $1
    call $__wasm_ctz_i32
    local.get $2
    i32.const 4
    i32.shl
    i32.add
    i32.const 2
    i32.shl
    local.get $0
    i32.add
    i32.load offset=96
    local.set $0
   else
    i32.const 0
    local.set $0
   end
  end
  local.get $0
  return
 )
 (func $~lib/rt/tlsf/growMemory (; 14 ;) (param $0 i32) (param $1 i32)
  (local $2 i32)
  (local $3 i32)
  memory.size
  local.set $2
  local.get $2
  i32.const 16
  i32.shl
  local.set $3
  i32.const 16
  local.get $0
  i32.load offset=1568
  local.get $3
  i32.const 16
  i32.sub
  i32.ne
  i32.shl
  i32.const 1
  i32.const 27
  local.get $1
  i32.clz
  i32.sub
  i32.shl
  i32.const 1
  i32.sub
  local.get $1
  i32.add
  local.get $1
  local.get $1
  i32.const 536870904
  i32.lt_u
  select
  i32.add
  i32.const 65535
  i32.add
  i32.const -65536
  i32.and
  i32.const 16
  i32.shr_u
  local.set $1
  local.get $2
  local.get $1
  i32.gt_s
  local.set $3
  local.get $2
  local.get $1
  local.get $3
  select
  memory.grow
  i32.const 0
  i32.lt_s
  if
   local.get $1
   memory.grow
   i32.const 0
   i32.lt_s
   if
    unreachable
   end
  end
  local.get $0
  local.get $2
  i32.const 16
  i32.shl
  memory.size
  i32.const 16
  i32.shl
  call $~lib/rt/tlsf/addMemory
 )
 (func $~lib/rt/tlsf/prepareBlock (; 15 ;) (param $0 i32) (param $1 i32) (param $2 i32)
  (local $3 i32)
  (local $4 i32)
  local.get $1
  i32.load
  local.set $3
  local.get $2
  i32.const 15
  i32.and
  if
   i32.const 0
   i32.const 32
   i32.const 365
   i32.const 13
   call $~lib/builtins/abort
   unreachable
  end
  local.get $3
  i32.const -4
  i32.and
  local.get $2
  i32.sub
  local.set $4
  local.get $4
  i32.const 32
  i32.ge_u
  if
   local.get $1
   local.get $3
   i32.const 2
   i32.and
   local.get $2
   i32.or
   i32.store
   local.get $1
   i32.const 16
   i32.add
   local.get $2
   i32.add
   local.set $1
   local.get $1
   local.get $4
   i32.const 16
   i32.sub
   i32.const 1
   i32.or
   i32.store
   local.get $0
   local.get $1
   call $~lib/rt/tlsf/insertBlock
  else
   local.get $1
   local.get $3
   i32.const -2
   i32.and
   i32.store
   local.get $1
   i32.const 16
   i32.add
   local.set $0
   local.get $0
   local.get $1
   i32.load
   i32.const -4
   i32.and
   i32.add
   i32.load
   local.set $2
   local.get $0
   local.get $1
   i32.load
   i32.const -4
   i32.and
   i32.add
   local.get $2
   i32.const -3
   i32.and
   i32.store
  end
 )
 (func $~lib/rt/tlsf/allocateBlock (; 16 ;) (param $0 i32) (param $1 i32) (param $2 i32) (result i32)
  (local $3 i32)
  (local $4 i32)
  global.get $~lib/rt/tlsf/collectLock
  if
   i32.const 0
   i32.const 32
   i32.const 490
   i32.const 13
   call $~lib/builtins/abort
   unreachable
  end
  local.get $1
  call $~lib/rt/tlsf/prepareSize
  local.set $4
  local.get $0
  local.get $4
  call $~lib/rt/tlsf/searchBlock
  local.set $3
  local.get $3
  i32.eqz
  if
   i32.const 1
   global.set $~lib/rt/tlsf/collectLock
   i32.const 0
   global.set $~lib/rt/tlsf/collectLock
   local.get $0
   local.get $4
   call $~lib/rt/tlsf/searchBlock
   local.set $3
   local.get $3
   i32.eqz
   if
    local.get $0
    local.get $4
    call $~lib/rt/tlsf/growMemory
    local.get $0
    local.get $4
    call $~lib/rt/tlsf/searchBlock
    local.set $3
    local.get $3
    i32.eqz
    if
     i32.const 0
     i32.const 32
     i32.const 502
     i32.const 19
     call $~lib/builtins/abort
     unreachable
    end
   end
  end
  local.get $3
  i32.load
  i32.const -4
  i32.and
  local.get $4
  i32.lt_u
  if
   i32.const 0
   i32.const 32
   i32.const 510
   i32.const 13
   call $~lib/builtins/abort
   unreachable
  end
  local.get $3
  i32.const 0
  i32.store offset=4
  local.get $3
  local.get $2
  i32.store offset=8
  local.get $3
  local.get $1
  i32.store offset=12
  local.get $0
  local.get $3
  call $~lib/rt/tlsf/removeBlock
  local.get $0
  local.get $3
  local.get $4
  call $~lib/rt/tlsf/prepareBlock
  local.get $3
  return
 )
 (func $~lib/rt/tlsf/__alloc (; 17 ;) (param $0 i32) (param $1 i32) (result i32)
  call $~lib/rt/tlsf/maybeInitialize
  local.get $0
  local.get $1
  call $~lib/rt/tlsf/allocateBlock
  i32.const 16
  i32.add
  return
 )
 (func $~lib/rt/pure/increment (; 18 ;) (param $0 i32)
  (local $1 i32)
  local.get $0
  i32.load offset=4
  local.set $1
  local.get $1
  i32.const -268435456
  i32.and
  local.get $1
  i32.const 1
  i32.add
  i32.const -268435456
  i32.and
  i32.ne
  if
   i32.const 0
   i32.const 144
   i32.const 109
   i32.const 2
   call $~lib/builtins/abort
   unreachable
  end
  local.get $0
  local.get $1
  i32.const 1
  i32.add
  i32.store offset=4
  local.get $0
  i32.load
  i32.const 1
  i32.and
  if
   i32.const 0
   i32.const 144
   i32.const 112
   i32.const 13
   call $~lib/builtins/abort
   unreachable
  end
 )
 (func $~lib/rt/pure/__retain (; 19 ;) (param $0 i32) (result i32)
  local.get $0
  i32.const 316
  i32.gt_u
  if
   local.get $0
   i32.const 16
   i32.sub
   call $~lib/rt/pure/increment
  end
  local.get $0
  return
 )
 (func $~lib/rt/pure/__release (; 20 ;) (param $0 i32)
  local.get $0
  i32.const 316
  i32.gt_u
  if
   local.get $0
   i32.const 16
   i32.sub
   call $~lib/rt/pure/decrement
  end
 )
 (func $assembly/index/add (; 21 ;) (param $0 i32) (param $1 i32) (result i32)
  local.get $0
  local.get $1
  i32.add
  return
 )
 (func $assembly/index/modpow (; 22 ;) (param $0 i32) (param $1 i32) (param $2 i32) (param $3 i32) (param $4 i32) (param $5 i32) (result i32)
  (local $6 i32)
  (local $7 i32)
  local.get $5
  i32.eqz
  local.get $4
  i32.const 1
  i32.eq
  i32.and
  if
   i32.const 0
   global.set $i64toi32_i32$HIGH_BITS
   i32.const 0
   return
  end
  i32.const 1
  local.set $6
  local.get $0
  local.get $1
  local.get $4
  local.get $5
  call $__wasm_i64_urem
  local.set $0
  global.get $i64toi32_i32$HIGH_BITS
  local.set $1
  loop $while-continue|0
   local.get $3
   i32.eqz
   local.get $2
   i32.const 0
   i32.gt_u
   i32.and
   local.get $3
   i32.const 0
   i32.gt_u
   i32.or
   if
    local.get $2
    local.get $3
    i32.const 2
    i32.const 0
    call $__wasm_i64_urem
    i32.const 1
    i32.eq
    global.get $i64toi32_i32$HIGH_BITS
    i32.eqz
    i32.and
    if
     local.get $0
     local.get $1
     local.get $6
     local.get $7
     call $__wasm_i64_mul
     global.get $i64toi32_i32$HIGH_BITS
     local.get $4
     local.get $5
     call $__wasm_i64_urem
     local.set $6
     global.get $i64toi32_i32$HIGH_BITS
     local.set $7
    end
    local.get $3
    i32.const 1
    i32.and
    i32.const 31
    i32.shl
    local.get $2
    i32.const 1
    i32.shr_u
    i32.or
    local.set $2
    local.get $3
    i32.const 1
    i32.shr_u
    local.set $3
    local.get $0
    local.get $1
    local.get $0
    local.get $1
    call $__wasm_i64_mul
    global.get $i64toi32_i32$HIGH_BITS
    local.get $4
    local.get $5
    call $__wasm_i64_urem
    local.set $0
    global.get $i64toi32_i32$HIGH_BITS
    local.set $1
    br $while-continue|0
   end
  end
  local.get $7
  global.set $i64toi32_i32$HIGH_BITS
  local.get $6
  return
 )
 (func $~lib/math/murmurHash3 (; 23 ;) (param $0 i32) (param $1 i32) (result i32)
  (local $2 i32)
  local.get $1
  local.set $2
  local.get $2
  i32.const 1
  i32.shr_u
  local.get $0
  i32.xor
  local.get $2
  i32.const -313160499
  i32.const -11423785
  call $__wasm_i64_mul
  local.set $1
  global.get $i64toi32_i32$HIGH_BITS
  local.set $2
  local.get $2
  i32.const 1
  i32.shr_u
  local.get $1
  i32.xor
  local.get $2
  i32.const 444984403
  i32.const -993084930
  call $__wasm_i64_mul
  local.set $1
  global.get $i64toi32_i32$HIGH_BITS
  local.set $2
  local.get $2
  global.set $i64toi32_i32$HIGH_BITS
  local.get $2
  i32.const 1
  i32.shr_u
  local.get $1
  i32.xor
  return
 )
 (func $~lib/math/splitMix32 (; 24 ;) (param $0 i32) (result i32)
  local.get $0
  i32.const 1831565813
  i32.add
  local.set $0
  local.get $0
  i32.const 15
  i32.shr_u
  local.get $0
  i32.xor
  local.get $0
  i32.const 1
  i32.or
  i32.mul
  local.set $0
  local.get $0
  local.get $0
  local.get $0
  i32.const 61
  i32.or
  local.get $0
  local.get $0
  i32.const 7
  i32.shr_u
  i32.xor
  i32.mul
  i32.add
  i32.xor
  local.set $0
  local.get $0
  i32.const 14
  i32.shr_u
  local.get $0
  i32.xor
  return
 )
 (func $~lib/math/NativeMath.seedRandom (; 25 ;) (param $0 i32) (param $1 i32)
  i32.const 1
  global.set $~lib/math/random_seeded
  local.get $0
  local.get $1
  call $~lib/math/murmurHash3
  global.set $~lib/math/random_state0_64
  global.get $i64toi32_i32$HIGH_BITS
  global.set $~lib/math/random_state0_64$hi
  global.get $~lib/math/random_state0_64
  i32.const -1
  i32.xor
  global.get $~lib/math/random_state0_64$hi
  i32.const -1
  i32.xor
  call $~lib/math/murmurHash3
  global.set $~lib/math/random_state1_64
  global.get $i64toi32_i32$HIGH_BITS
  global.set $~lib/math/random_state1_64$hi
  local.get $0
  call $~lib/math/splitMix32
  global.set $~lib/math/random_state0_32
  global.get $~lib/math/random_state0_32
  call $~lib/math/splitMix32
  global.set $~lib/math/random_state1_32
  global.get $~lib/math/random_state1_32
  i32.const 0
  i32.ne
  i32.const 0
  global.get $~lib/math/random_state0_32
  i32.const 0
  global.get $~lib/math/random_state1_64
  global.get $~lib/math/random_state1_64$hi
  i32.or
  i32.const 0
  global.get $~lib/math/random_state0_64
  global.get $~lib/math/random_state0_64$hi
  i32.or
  select
  select
  select
  i32.eqz
  if
   i32.const 0
   i32.const 192
   i32.const 1406
   i32.const 4
   call $~lib/builtins/abort
   unreachable
  end
 )
 (func $~lib/math/NativeMath.random (; 26 ;) (result f64)
  (local $0 i32)
  (local $1 i32)
  (local $2 i32)
  (local $3 i32)
  (local $4 i32)
  (local $5 i32)
  global.get $~lib/math/random_seeded
  i32.eqz
  if
   i32.const 240
   i32.const 192
   i32.const 1413
   i32.const 24
   call $~lib/builtins/abort
   unreachable
  end
  global.get $~lib/math/random_state0_64
  local.set $0
  global.get $~lib/math/random_state0_64$hi
  local.set $1
  global.get $~lib/math/random_state1_64
  local.set $3
  local.get $3
  global.set $~lib/math/random_state0_64
  global.get $~lib/math/random_state1_64$hi
  local.set $2
  local.get $2
  global.set $~lib/math/random_state0_64$hi
  local.get $1
  local.get $1
  i32.const 23
  i32.shl
  local.get $0
  i32.const 9
  i32.shr_u
  i32.or
  local.get $0
  i32.const 23
  i32.shl
  local.get $0
  i32.xor
  local.set $1
  i32.xor
  local.set $0
  local.get $0
  i32.const 131071
  i32.and
  i32.const 15
  i32.shl
  local.get $1
  i32.const 17
  i32.shr_u
  i32.or
  local.get $1
  i32.xor
  local.get $3
  i32.xor
  local.set $1
  local.get $0
  i32.const 17
  i32.shr_u
  local.get $0
  i32.xor
  local.get $2
  i32.xor
  local.set $0
  local.get $2
  i32.const 67108863
  i32.and
  i32.const 6
  i32.shl
  local.get $3
  i32.const 26
  i32.shr_u
  i32.or
  local.get $1
  i32.xor
  global.set $~lib/math/random_state1_64
  local.get $2
  i32.const 26
  i32.shr_u
  local.get $0
  i32.xor
  global.set $~lib/math/random_state1_64$hi
  local.get $2
  i32.const 12
  i32.shr_u
  local.set $1
  i32.const 0
  local.get $2
  i32.const 4095
  i32.and
  i32.const 20
  i32.shl
  local.get $3
  i32.const 12
  i32.shr_u
  i32.or
  call $wasm2js_scratch_store_i32
  i32.const 1
  local.get $1
  i32.const 1072693248
  i32.or
  call $wasm2js_scratch_store_i32
  call $wasm2js_scratch_load_f64
  f64.const 1
  f64.sub
  return
 )
 (func $assembly/index/rng_gen_range (; 27 ;) (param $0 i32) (param $1 i32) (param $2 i32) (param $3 i32) (result i32)
  (local $4 f64)
  (local $5 i32)
  call $~lib/bindings/Date/now
  local.set $4
  local.get $4
  f64.abs
  f64.const 1
  f64.ge
  if
   local.get $4
   f64.const 4294967296
   f64.div
   f64.floor
   f64.const 4294967295
   f64.min
   i32.trunc_f64_u
   local.get $4
   local.get $4
   i32.trunc_f64_u
   f64.convert_i32_u
   f64.sub
   f64.const 4294967296
   f64.div
   f64.ceil
   i32.trunc_f64_u
   local.get $4
   f64.const 0
   f64.gt
   select
   local.set $5
  else
   i32.const 0
   local.set $5
  end
  local.get $4
  i32.trunc_f64_u
  local.get $5
  call $~lib/math/NativeMath.seedRandom
  call $~lib/math/NativeMath.random
  local.get $2
  local.get $0
  i32.sub
  f64.convert_i32_u
  f64.const 4294967296
  local.get $3
  local.get $2
  local.get $0
  i32.lt_u
  local.get $1
  i32.add
  i32.sub
  f64.convert_i32_u
  f64.mul
  f64.add
  f64.mul
  f64.floor
  local.set $4
  local.get $4
  f64.abs
  f64.const 1
  f64.ge
  if
   local.get $4
   f64.const 4294967296
   f64.div
   f64.floor
   f64.const 4294967295
   f64.min
   i32.trunc_f64_u
   local.get $4
   local.get $4
   i32.trunc_f64_u
   f64.convert_i32_u
   f64.sub
   f64.const 4294967296
   f64.div
   f64.ceil
   i32.trunc_f64_u
   local.get $4
   f64.const 0
   f64.gt
   select
   local.set $2
  else
   i32.const 0
   local.set $2
  end
  local.get $2
  local.get $1
  i32.add
  local.set $2
  local.get $4
  i32.trunc_f64_u
  local.set $1
  local.get $1
  local.get $0
  i32.add
  local.set $0
  local.get $0
  local.get $1
  i32.lt_u
  if
   local.get $2
   i32.const 1
   i32.add
   local.set $2
  end
  local.get $2
  global.set $i64toi32_i32$HIGH_BITS
  local.get $0
  return
 )
 (func $assembly/index/primeCheck (; 28 ;) (param $0 i32) (param $1 i32) (param $2 i32) (result i32)
  (local $3 i32)
  local.get $1
  i32.eqz
  local.set $3
  i32.const 1
  local.get $3
  local.get $0
  i32.const 3
  i32.eq
  i32.and
  local.get $0
  i32.const 1
  i32.eq
  local.get $3
  i32.and
  select
  if
   i32.const 1
   return
  else
   local.get $0
   local.get $1
   i32.const 2
   i32.const 0
   call $__wasm_i64_urem
   global.get $i64toi32_i32$HIGH_BITS
   i32.or
   i32.eqz
   if
    i32.const 0
    return
   end
  end
  loop $while-continue|0
   local.get $2
   i32.const 0
   i32.gt_s
   if
    i32.const 2
    i32.const 0
    local.get $0
    i32.const 2
    i32.sub
    local.get $1
    local.get $0
    i32.const 2
    i32.lt_u
    i32.sub
    call $assembly/index/rng_gen_range
    global.get $i64toi32_i32$HIGH_BITS
    local.get $0
    i32.const 1
    i32.sub
    local.get $1
    local.get $0
    i32.const 1
    i32.lt_u
    i32.sub
    local.get $0
    local.get $1
    call $assembly/index/modpow
    i32.const 1
    i32.ne
    global.get $i64toi32_i32$HIGH_BITS
    i32.or
    if
     i32.const 0
     return
    end
    local.get $2
    i32.const 1
    i32.sub
    local.set $2
    br $while-continue|0
   end
  end
  i32.const 1
  return
 )
 (func $~lib/rt/pure/__collect (; 29 ;)
  nop
 )
 (func $~lib/rt/pure/decrement (; 30 ;) (param $0 i32)
  (local $1 i32)
  (local $2 i32)
  local.get $0
  i32.load offset=4
  local.set $1
  local.get $1
  i32.const 268435455
  i32.and
  local.set $2
  local.get $0
  i32.load
  i32.const 1
  i32.and
  if
   i32.const 0
   i32.const 144
   i32.const 122
   i32.const 13
   call $~lib/builtins/abort
   unreachable
  end
  local.get $2
  i32.const 1
  i32.eq
  if
   local.get $0
   i32.const 16
   i32.add
   call $~lib/rt/__visit_members
   local.get $1
   i32.const -2147483648
   i32.and
   if
    i32.const 0
    i32.const 144
    i32.const 126
    i32.const 17
    call $~lib/builtins/abort
    unreachable
   end
   local.get $0
   local.get $0
   i32.load
   i32.const 1
   i32.or
   i32.store
   global.get $~lib/rt/tlsf/ROOT
   local.get $0
   call $~lib/rt/tlsf/insertBlock
  else
   local.get $2
   i32.const 0
   i32.le_u
   if
    i32.const 0
    i32.const 144
    i32.const 136
    i32.const 15
    call $~lib/builtins/abort
    unreachable
   end
   local.get $0
   local.get $2
   i32.const 1
   i32.sub
   local.get $1
   i32.const -268435456
   i32.and
   i32.or
   i32.store offset=4
  end
 )
 (func $~lib/rt/__visit_members (; 31 ;) (param $0 i32)
  block $switch$1$default
   block $switch$1$case$4
    block $switch$1$case$2
     local.get $0
     i32.const 8
     i32.sub
     i32.load
     br_table $switch$1$case$2 $switch$1$case$2 $switch$1$case$4 $switch$1$default
    end
   end
  end
  unreachable
 )
 (func $legalstub$assembly/index/modpow (; 32 ;) (param $0 i32) (param $1 i32) (param $2 i32) (param $3 i32) (param $4 i32) (param $5 i32) (result i32)
  local.get $0
  local.get $1
  local.get $2
  local.get $3
  local.get $4
  local.get $5
  call $assembly/index/modpow
  global.get $i64toi32_i32$HIGH_BITS
  call $setTempRet0
  return
 )
 (func $legalstub$assembly/index/rng_gen_range (; 33 ;) (param $0 i32) (param $1 i32) (param $2 i32) (param $3 i32) (result i32)
  local.get $0
  local.get $1
  local.get $2
  local.get $3
  call $assembly/index/rng_gen_range
  global.get $i64toi32_i32$HIGH_BITS
  call $setTempRet0
  return
 )
 (func $legalstub$assembly/index/primeCheck (; 34 ;) (param $0 i32) (param $1 i32) (param $2 i32) (result i32)
  local.get $0
  local.get $1
  local.get $2
  call $assembly/index/primeCheck
  return
 )
 (func $legalfunc$wasm2js_scratch_store_i64 (; 35 ;) (param $0 i32) (param $1 i32)
  local.get $0
  local.get $1
  call $legalimport$wasm2js_scratch_store_i64
 )
 (func $_ZN17compiler_builtins3int3mul3Mul3mul17h070e9a1c69faec5bE (; 36 ;) (param $0 i32) (param $1 i32) (param $2 i32) (param $3 i32) (result i32)
  (local $4 i32)
  (local $5 i32)
  local.get $2
  i32.const 16
  i32.shr_u
  local.set $4
  local.get $0
  i32.const 16
  i32.shr_u
  local.set $5
  local.get $4
  local.get $5
  i32.mul
  local.get $1
  local.get $2
  i32.mul
  i32.add
  local.get $0
  local.get $3
  i32.mul
  i32.add
  local.get $2
  i32.const 65535
  i32.and
  local.set $1
  local.get $0
  i32.const 65535
  i32.and
  local.set $0
  local.get $1
  local.get $0
  i32.mul
  local.set $2
  local.get $2
  i32.const 16
  i32.shr_u
  local.get $1
  local.get $5
  i32.mul
  i32.add
  local.set $1
  local.get $1
  i32.const 16
  i32.shr_u
  i32.add
  local.get $0
  local.get $4
  i32.mul
  local.get $1
  i32.const 65535
  i32.and
  i32.add
  local.set $1
  local.get $1
  i32.const 16
  i32.shr_u
  i32.add
  global.set $i64toi32_i32$HIGH_BITS
  local.get $2
  i32.const 65535
  i32.and
  local.get $1
  i32.const 16
  i32.shl
  i32.or
  return
 )
 (func $_ZN17compiler_builtins3int4udiv10divmod_u6417h6026910b5ed08e40E (; 37 ;) (param $0 i32) (param $1 i32) (param $2 i32) (param $3 i32)
  (local $4 i32)
  (local $5 i32)
  (local $6 i32)
  (local $7 i32)
  (local $8 i32)
  (local $9 i32)
  (local $10 i32)
  (local $11 i32)
  (local $12 i32)
  block $label$1
   block $label$2
    block $label$3
     block $label$4
      block $label$5
       block $label$6
        block $label$7
         block $label$8
          block $label$9
           block $label$11
            local.get $1
            if
             local.get $2
             i32.eqz
             br_if $label$11
             local.get $3
             i32.eqz
             br_if $label$9
             local.get $3
             i32.clz
             local.get $1
             i32.clz
             i32.sub
             local.set $4
             local.get $4
             i32.const 31
             i32.le_u
             br_if $label$8
             br $label$2
            end
            local.get $3
            i32.const 1
            i32.eq
            local.get $2
            i32.const 0
            i32.ge_u
            i32.and
            local.get $3
            i32.const 1
            i32.gt_u
            i32.or
            br_if $label$2
            local.get $0
            local.get $0
            local.get $2
            i32.div_u
            local.get $2
            i32.mul
            i32.sub
            i32.const 0
            call $legalfunc$wasm2js_scratch_store_i64
            i32.const 0
            global.set $i64toi32_i32$HIGH_BITS
            return
           end
           local.get $0
           i32.eqz
           br_if $label$7
           local.get $3
           i32.eqz
           br_if $label$6
           local.get $3
           i32.const -1
           i32.add
           local.set $4
           local.get $4
           local.get $3
           i32.and
           br_if $label$6
           local.get $0
           local.get $1
           local.get $4
           i32.and
           call $legalfunc$wasm2js_scratch_store_i64
           local.get $3
           call $__wasm_ctz_i32
           drop
           i32.const 0
           global.set $i64toi32_i32$HIGH_BITS
           return
          end
          local.get $2
          i32.const -1
          i32.add
          local.set $4
          local.get $4
          local.get $2
          i32.and
          i32.eqz
          br_if $label$5
          local.get $2
          i32.clz
          i32.const 33
          i32.add
          local.get $1
          i32.clz
          i32.sub
          local.set $7
          i32.const 0
          local.get $7
          i32.sub
          local.set $5
          br $label$3
         end
         local.get $4
         i32.const 1
         i32.add
         local.set $7
         i32.const 63
         local.get $4
         i32.sub
         local.set $5
         br $label$3
        end
        i32.const 0
        local.get $1
        local.get $1
        local.get $3
        i32.div_u
        local.get $3
        i32.mul
        i32.sub
        call $legalfunc$wasm2js_scratch_store_i64
        i32.const 0
        global.set $i64toi32_i32$HIGH_BITS
        return
       end
       local.get $3
       i32.clz
       local.get $1
       i32.clz
       i32.sub
       local.set $4
       local.get $4
       i32.const 31
       i32.lt_u
       br_if $label$4
       br $label$2
      end
      local.get $0
      local.get $4
      i32.and
      i32.const 0
      call $legalfunc$wasm2js_scratch_store_i64
      local.get $2
      i32.const 1
      i32.eq
      br_if $label$1
      local.get $2
      call $__wasm_ctz_i32
      local.set $3
      local.get $3
      i32.const 31
      i32.and
      local.set $2
      i32.const 0
      local.get $1
      local.get $2
      i32.shr_u
      i32.const 32
      local.get $3
      i32.const 63
      i32.and
      i32.le_u
      select
      global.set $i64toi32_i32$HIGH_BITS
      return
     end
     local.get $4
     i32.const 1
     i32.add
     local.set $7
     i32.const 63
     local.get $4
     i32.sub
     local.set $5
    end
    local.get $7
    i32.const 63
    i32.and
    local.set $6
    local.get $6
    i32.const 31
    i32.and
    local.set $4
    i32.const 32
    local.get $6
    i32.const 63
    i32.and
    i32.le_u
    if
     i32.const 0
     local.set $6
     local.get $1
     local.get $4
     i32.shr_u
     local.set $4
    else
     local.get $1
     local.get $4
     i32.shr_u
     local.set $6
     i32.const 1
     local.get $4
     i32.shl
     i32.const 1
     i32.sub
     local.get $1
     i32.and
     i32.const 32
     local.get $4
     i32.sub
     i32.shl
     local.get $0
     local.get $4
     i32.shr_u
     i32.or
     local.set $4
    end
    local.get $5
    i32.const 63
    i32.and
    local.set $8
    local.get $8
    i32.const 31
    i32.and
    local.set $5
    i32.const 32
    local.get $8
    i32.const 63
    i32.and
    i32.le_u
    if
     local.get $0
     local.get $5
     i32.shl
     local.set $1
     i32.const 0
     local.set $0
    else
     i32.const 1
     local.get $5
     i32.shl
     i32.const 1
     i32.sub
     local.get $0
     i32.const 32
     local.get $5
     i32.sub
     i32.shr_u
     i32.and
     local.get $1
     local.get $5
     i32.shl
     i32.or
     local.set $1
     local.get $0
     local.get $5
     i32.shl
     local.set $0
    end
    local.get $7
    if
     local.get $3
     i32.const -1
     i32.add
     local.set $8
     local.get $2
     i32.const -1
     i32.add
     local.set $5
     local.get $5
     i32.const -1
     i32.lt_u
     if
      local.get $8
      i32.const 1
      i32.add
      local.set $8
     end
     loop $label$15
      local.get $6
      i32.const 1
      i32.shl
      local.get $4
      i32.const 31
      i32.shr_u
      i32.or
      local.set $10
      local.get $4
      i32.const 1
      i32.shl
      local.get $1
      i32.const 31
      i32.shr_u
      i32.or
      local.set $6
      local.get $8
      local.get $10
      local.get $5
      local.get $6
      i32.lt_u
      i32.add
      i32.sub
      i32.const 31
      i32.shr_s
      local.set $9
      local.get $9
      local.get $2
      i32.and
      local.set $11
      local.get $6
      local.get $11
      i32.sub
      local.set $4
      local.get $10
      local.get $3
      local.get $9
      i32.and
      local.get $6
      local.get $11
      i32.lt_u
      i32.add
      i32.sub
      local.set $6
      local.get $1
      i32.const 1
      i32.shl
      local.get $0
      i32.const 31
      i32.shr_u
      i32.or
      local.set $1
      local.get $0
      i32.const 1
      i32.shl
      local.get $12
      i32.or
      local.set $0
      local.get $9
      i32.const 1
      i32.and
      local.set $12
      local.get $7
      i32.const -1
      i32.add
      local.set $7
      local.get $7
      br_if $label$15
     end
    end
    local.get $4
    local.get $6
    call $legalfunc$wasm2js_scratch_store_i64
    local.get $1
    i32.const 1
    i32.shl
    local.get $0
    i32.const 31
    i32.shr_u
    i32.or
    global.set $i64toi32_i32$HIGH_BITS
    return
   end
   local.get $0
   local.get $1
   call $legalfunc$wasm2js_scratch_store_i64
   i32.const 0
   local.set $1
  end
  local.get $1
  global.set $i64toi32_i32$HIGH_BITS
 )
 (func $__wasm_ctz_i32 (; 38 ;) (param $0 i32) (result i32)
  local.get $0
  if
   i32.const 31
   local.get $0
   i32.const -1
   i32.add
   local.get $0
   i32.xor
   i32.clz
   i32.sub
   return
  end
  i32.const 32
  return
 )
 (func $__wasm_i64_mul (; 39 ;) (param $0 i32) (param $1 i32) (param $2 i32) (param $3 i32) (result i32)
  local.get $0
  local.get $1
  local.get $2
  local.get $3
  call $_ZN17compiler_builtins3int3mul3Mul3mul17h070e9a1c69faec5bE
  return
 )
 (func $__wasm_i64_urem (; 40 ;) (param $0 i32) (param $1 i32) (param $2 i32) (param $3 i32) (result i32)
  local.get $0
  local.get $1
  local.get $2
  local.get $3
  call $_ZN17compiler_builtins3int4udiv10divmod_u6417h6026910b5ed08e40E
  call $legalimport$wasm2js_scratch_load_i64
  call $getTempRet0
  global.set $i64toi32_i32$HIGH_BITS
  return
 )
)
