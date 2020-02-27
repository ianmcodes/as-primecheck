(module
 (type $i32_i32_=>_none (func (param i32 i32)))
 (type $i32_i32_i32_i32_=>_i32 (func (param i32 i32 i32 i32) (result i32)))
 (type $i32_=>_none (func (param i32)))
 (type $none_=>_i32 (func (result i32)))
 (type $i32_=>_i32 (func (param i32) (result i32)))
 (type $i32_i32_=>_i32 (func (param i32 i32) (result i32)))
 (type $i32_i32_i32_=>_i32 (func (param i32 i32 i32) (result i32)))
 (type $none_=>_f64 (func (result f64)))
 (type $i32_i32_i32_i32_i32_i32_=>_i32 (func (param i32 i32 i32 i32 i32 i32) (result i32)))
 (type $none_=>_none (func))
 (type $i32_i32_i32_=>_none (func (param i32 i32 i32)))
 (type $i32_i32_i32_i32_=>_none (func (param i32 i32 i32 i32)))
 (import "env" "abort" (func $~lib/builtins/abort (param i32 i32 i32 i32)))
 (import "Date" "now" (func $~lib/bindings/Date/now (result f64)))
 (import "env" "wasm2js_scratch_store_i32" (func $wasm2js_scratch_store_i32 (param i32 i32)))
 (import "env" "wasm2js_scratch_load_f64" (func $wasm2js_scratch_load_f64 (result f64)))
 (import "env" "setTempRet0" (func $setTempRet0 (param i32)))
 (import "env" "getTempRet0" (func $getTempRet0 (result i32)))
 (import "env" "wasm2js_scratch_load_i64" (func $legalimport$wasm2js_scratch_load_i64 (result i32)))
 (import "env" "wasm2js_scratch_store_i64" (func $legalimport$wasm2js_scratch_store_i64 (param i32 i32)))
 (memory $0 1)
 (data (i32.const 16) "\1e\00\00\00\01\00\00\00\01\00\00\00\1e\00\00\00~\00l\00i\00b\00/\00r\00t\00/\00t\00l\00s\00f\00.\00t\00s\00")
 (data (i32.const 64) "(\00\00\00\01\00\00\00\01\00\00\00(\00\00\00a\00l\00l\00o\00c\00a\00t\00i\00o\00n\00 \00t\00o\00o\00 \00l\00a\00r\00g\00e\00")
 (data (i32.const 128) "\1e\00\00\00\01\00\00\00\01\00\00\00\1e\00\00\00~\00l\00i\00b\00/\00r\00t\00/\00p\00u\00r\00e\00.\00t\00s\00")
 (data (i32.const 176) "\18\00\00\00\01\00\00\00\01\00\00\00\18\00\00\00~\00l\00i\00b\00/\00m\00a\00t\00h\00.\00t\00s\00")
 (data (i32.const 224) "(\00\00\00\01\00\00\00\01\00\00\00(\00\00\00P\00R\00N\00G\00 \00m\00u\00s\00t\00 \00b\00e\00 \00s\00e\00e\00d\00e\00d\00.\00")
 (data (i32.const 288) "\03\00\00\00\10\00\00\00\00\00\00\00\10\00\00\00\00\00\00\00\10\00\00\00\00\00\00\00")
 (global $~lib/rt/tlsf/ROOT (mut i32) (i32.const 0))
 (global $~lib/rt/tlsf/collectLock (mut i32) (i32.const 0))
 (global $~lib/gc/gc.auto (mut i32) (i32.const 1))
 (global $~lib/math/random_seeded (mut i32) (i32.const 0))
 (global $~lib/math/random_state0_64 (mut i32) (i32.const 0))
 (global $~lib/math/random_state1_64 (mut i32) (i32.const 0))
 (global $~lib/math/random_state0_32 (mut i32) (i32.const 0))
 (global $~lib/math/random_state1_32 (mut i32) (i32.const 0))
 (global $~lib/rt/__rtti_base i32 (i32.const 288))
 (global $~lib/heap/__heap_base i32 (i32.const 316))
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
  (local $4 i32)
  (local $9 i32)
  (local $3 i32)
  (local $7 i32)
  (local $5 i32)
  (local $8 i32)
  (local $6 i32)
  (local $2 i32)
  (local $24 i32)
  (local $47 i32)
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
  i32.const 3
  i32.const -1
  i32.xor
  i32.and
  local.set $3
  local.get $3
  i32.const 16
  i32.ge_u
  if
   local.get $3
   i32.const 1073741808
   i32.lt_u
   local.set $24
  else
   i32.const 0
   local.set $24
  end
  local.get $24
  i32.eqz
  if
   i32.const 0
   i32.const 32
   i32.const 279
   i32.const 13
   call $~lib/builtins/abort
   unreachable
  end
  local.get $3
  i32.const 256
  i32.lt_u
  if
   i32.const 0
   local.set $4
   local.get $3
   i32.const 4
   i32.shr_u
   local.set $5
  else
   i32.const 31
   local.get $3
   i32.clz
   i32.sub
   local.set $4
   local.get $3
   local.get $4
   i32.const 4
   i32.sub
   i32.shr_u
   i32.const 1
   i32.const 4
   i32.shl
   i32.xor
   local.set $5
   local.get $4
   i32.const 8
   i32.const 1
   i32.sub
   i32.sub
   local.set $4
  end
  local.get $4
  i32.const 23
  i32.lt_u
  if
   local.get $5
   i32.const 16
   i32.lt_u
   local.set $47
  else
   i32.const 0
   local.set $47
  end
  local.get $47
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
  i32.load offset=16
  local.set $6
  local.get $1
  i32.load offset=20
  local.set $7
  local.get $6
  if
   local.get $6
   local.get $7
   i32.store offset=20
  end
  local.get $7
  if
   local.get $7
   local.get $6
   i32.store offset=16
  end
  local.get $4
  local.set $9
  local.get $5
  local.set $8
  local.get $1
  local.get $0
  local.get $9
  i32.const 4
  i32.shl
  local.get $8
  i32.add
  i32.const 2
  i32.shl
  i32.add
  i32.load offset=96
  i32.eq
  if
   local.get $5
   local.set $9
   local.get $7
   local.set $8
   local.get $0
   local.get $4
   i32.const 4
   i32.shl
   local.get $9
   i32.add
   i32.const 2
   i32.shl
   i32.add
   local.get $7
   i32.store offset=96
   local.get $7
   i32.eqz
   if
    local.get $0
    local.set $9
    local.get $4
    local.set $8
    local.get $9
    local.get $8
    i32.const 2
    i32.shl
    i32.add
    i32.load offset=4
    local.set $9
    local.get $0
    local.set $8
    local.get $9
    i32.const 1
    local.get $5
    i32.shl
    i32.const -1
    i32.xor
    i32.and
    local.set $9
    local.get $0
    local.get $4
    i32.const 2
    i32.shl
    i32.add
    local.get $9
    i32.store offset=4
    local.get $9
    i32.eqz
    if
     local.get $0
     local.get $0
     i32.load
     i32.const 1
     local.get $4
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
  (local $3 i32)
  (local $6 i32)
  (local $9 i32)
  (local $2 i32)
  (local $4 i32)
  (local $7 i32)
  (local $8 i32)
  (local $10 i32)
  (local $5 i32)
  (local $11 i32)
  (local $107 i32)
  (local $140 i32)
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
  local.set $2
  local.get $2
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
  local.set $3
  local.get $3
  i32.const 16
  i32.add
  local.get $3
  i32.load
  i32.const 3
  i32.const -1
  i32.xor
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
   local.get $2
   i32.const 3
   i32.const -1
   i32.xor
   i32.and
   i32.const 16
   i32.add
   local.get $5
   i32.const 3
   i32.const -1
   i32.xor
   i32.and
   i32.add
   local.set $3
   local.get $3
   i32.const 1073741808
   i32.lt_u
   if
    local.get $0
    local.get $4
    call $~lib/rt/tlsf/removeBlock
    local.get $2
    i32.const 3
    i32.and
    local.get $3
    i32.or
    local.set $2
    local.get $1
    local.get $2
    i32.store
    local.get $1
    local.set $6
    local.get $6
    i32.const 16
    i32.add
    local.get $6
    i32.load
    i32.const 3
    i32.const -1
    i32.xor
    i32.and
    i32.add
    local.set $4
    local.get $4
    i32.load
    local.set $5
   end
  end
  local.get $2
  i32.const 2
  i32.and
  if
   local.get $1
   local.set $6
   local.get $6
   i32.const 4
   i32.sub
   i32.load
   local.set $6
   local.get $6
   i32.load
   local.set $3
   local.get $3
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
   local.get $3
   i32.const 3
   i32.const -1
   i32.xor
   i32.and
   i32.const 16
   i32.add
   local.get $2
   i32.const 3
   i32.const -1
   i32.xor
   i32.and
   i32.add
   local.set $7
   local.get $7
   i32.const 1073741808
   i32.lt_u
   if
    local.get $0
    local.get $6
    call $~lib/rt/tlsf/removeBlock
    local.get $3
    i32.const 3
    i32.and
    local.get $7
    i32.or
    local.set $2
    local.get $6
    local.get $2
    i32.store
    local.get $6
    local.set $1
   end
  end
  local.get $4
  local.get $5
  i32.const 2
  i32.or
  i32.store
  local.get $2
  i32.const 3
  i32.const -1
  i32.xor
  i32.and
  local.set $8
  local.get $8
  i32.const 16
  i32.ge_u
  if
   local.get $8
   i32.const 1073741808
   i32.lt_u
   local.set $107
  else
   i32.const 0
   local.set $107
  end
  local.get $107
  i32.eqz
  if
   i32.const 0
   i32.const 32
   i32.const 243
   i32.const 13
   call $~lib/builtins/abort
   unreachable
  end
  local.get $1
  i32.const 16
  i32.add
  local.get $8
  i32.add
  local.get $4
  i32.eq
  i32.eqz
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
  local.get $8
  i32.const 256
  i32.lt_u
  if
   i32.const 0
   local.set $9
   local.get $8
   i32.const 4
   i32.shr_u
   local.set $10
  else
   i32.const 31
   local.get $8
   i32.clz
   i32.sub
   local.set $9
   local.get $8
   local.get $9
   i32.const 4
   i32.sub
   i32.shr_u
   i32.const 1
   i32.const 4
   i32.shl
   i32.xor
   local.set $10
   local.get $9
   i32.const 8
   i32.const 1
   i32.sub
   i32.sub
   local.set $9
  end
  local.get $9
  i32.const 23
  i32.lt_u
  if
   local.get $10
   i32.const 16
   i32.lt_u
   local.set $140
  else
   i32.const 0
   local.set $140
  end
  local.get $140
  i32.eqz
  if
   i32.const 0
   i32.const 32
   i32.const 260
   i32.const 13
   call $~lib/builtins/abort
   unreachable
  end
  local.get $0
  local.set $7
  local.get $9
  local.set $3
  local.get $10
  local.set $6
  local.get $7
  local.get $3
  i32.const 4
  i32.shl
  local.get $6
  i32.add
  i32.const 2
  i32.shl
  i32.add
  i32.load offset=96
  local.set $11
  local.get $1
  i32.const 0
  i32.store offset=16
  local.get $1
  local.get $11
  i32.store offset=20
  local.get $11
  if
   local.get $11
   local.get $1
   i32.store offset=16
  end
  local.get $9
  local.set $7
  local.get $10
  local.set $3
  local.get $1
  local.set $6
  local.get $0
  local.get $9
  i32.const 4
  i32.shl
  local.get $3
  i32.add
  i32.const 2
  i32.shl
  i32.add
  local.get $1
  i32.store offset=96
  local.get $0
  local.get $0
  i32.load
  i32.const 1
  local.get $9
  i32.shl
  i32.or
  i32.store
  local.get $0
  local.set $3
  local.get $9
  local.set $6
  local.get $3
  local.get $6
  i32.const 2
  i32.shl
  i32.add
  i32.load offset=4
  i32.const 1
  local.get $10
  i32.shl
  i32.or
  local.set $7
  local.get $0
  local.get $9
  i32.const 2
  i32.shl
  i32.add
  local.get $7
  i32.store offset=4
 )
 (func $~lib/rt/tlsf/addMemory (; 10 ;) (param $0 i32) (param $1 i32) (param $2 i32) (result i32)
  (local $4 i32)
  (local $6 i32)
  (local $16 i32)
  (local $21 i32)
  (local $5 i32)
  local.get $1
  local.get $2
  i32.le_u
  if
   local.get $1
   i32.const 15
   i32.and
   i32.eqz
   local.set $16
  else
   i32.const 0
   local.set $16
  end
  local.get $16
  if
   local.get $2
   i32.const 15
   i32.and
   i32.eqz
   local.set $21
  else
   i32.const 0
   local.set $21
  end
  local.get $21
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
  local.set $4
  i32.const 0
  local.set $5
  local.get $4
  if
   local.get $1
   local.get $4
   i32.const 16
   i32.add
   i32.ge_u
   i32.eqz
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
   local.get $4
   i32.eq
   if
    local.get $1
    i32.const 16
    i32.sub
    local.set $1
    local.get $4
    i32.load
    local.set $5
   end
  else
   local.get $1
   local.get $0
   i32.const 1572
   i32.add
   i32.ge_u
   i32.eqz
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
  local.set $6
  local.get $6
  i32.const 48
  i32.lt_u
  if
   i32.const 0
   return
  end
  local.get $1
  local.get $6
  i32.const 16
  i32.const 1
  i32.shl
  i32.sub
  i32.const 1
  i32.or
  local.get $5
  i32.const 2
  i32.and
  i32.or
  i32.store
  local.get $1
  i32.const 0
  i32.store offset=16
  local.get $1
  i32.const 0
  i32.store offset=20
  local.get $1
  local.get $6
  i32.add
  i32.const 16
  i32.sub
  local.set $4
  local.get $4
  i32.const 0
  i32.const 2
  i32.or
  i32.store
  local.get $0
  local.get $4
  i32.store offset=1568
  local.get $0
  local.get $1
  call $~lib/rt/tlsf/insertBlock
  i32.const 1
  return
 )
 (func $~lib/rt/tlsf/maybeInitialize (; 11 ;) (result i32)
  (local $0 i32)
  (local $5 i32)
  (local $8 i32)
  (local $1 i32)
  (local $4 i32)
  (local $6 i32)
  (local $2 i32)
  (local $3 i32)
  (local $33 i32)
  global.get $~lib/rt/tlsf/ROOT
  local.set $0
  local.get $0
  i32.eqz
  if
   global.get $~lib/heap/__heap_base
   i32.const 15
   i32.add
   i32.const -16
   i32.and
   local.set $1
   memory.size
   local.set $2
   local.get $1
   i32.const 1572
   i32.add
   i32.const 65535
   i32.add
   i32.const 65535
   i32.const -1
   i32.xor
   i32.and
   i32.const 16
   i32.shr_u
   local.set $3
   local.get $3
   local.get $2
   i32.gt_s
   if
    local.get $3
    local.get $2
    i32.sub
    memory.grow
    i32.const 0
    i32.lt_s
    local.set $33
   else
    i32.const 0
    local.set $33
   end
   local.get $33
   if
    unreachable
   end
   local.get $1
   local.set $0
   local.get $0
   i32.const 0
   i32.store
   local.get $0
   local.set $5
   i32.const 0
   local.set $4
   local.get $0
   local.get $4
   i32.store offset=1568
   i32.const 0
   local.set $5
   loop $for-loop|0
    local.get $5
    i32.const 23
    i32.lt_u
    local.set $4
    local.get $4
    if
     local.get $0
     local.set $8
     i32.const 0
     local.set $6
     local.get $0
     local.get $5
     i32.const 2
     i32.shl
     i32.add
     local.get $6
     i32.store offset=4
     i32.const 0
     local.set $8
     loop $for-loop|1
      local.get $8
      i32.const 16
      i32.lt_u
      if
       i32.const 0
       local.set $6
       local.get $0
       local.get $5
       i32.const 4
       i32.shl
       local.get $8
       i32.add
       i32.const 2
       i32.shl
       i32.add
       local.get $6
       i32.store offset=96
       local.get $8
       i32.const 1
       i32.add
       local.set $8
       br $for-loop|1
      end
     end
     local.get $5
     i32.const 1
     i32.add
     local.set $5
     br $for-loop|0
    end
   end
   local.get $0
   local.get $1
   i32.const 1572
   i32.add
   i32.const 15
   i32.add
   i32.const 15
   i32.const -1
   i32.xor
   i32.and
   memory.size
   i32.const 16
   i32.shl
   call $~lib/rt/tlsf/addMemory
   drop
   local.get $0
   global.set $~lib/rt/tlsf/ROOT
  end
  local.get $0
  return
 )
 (func $~lib/rt/tlsf/prepareSize (; 12 ;) (param $0 i32) (result i32)
  (local $1 i32)
  (local $2 i32)
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
  i32.const 15
  i32.const -1
  i32.xor
  i32.and
  local.set $1
  i32.const 16
  local.set $2
  local.get $1
  local.get $2
  local.get $1
  local.get $2
  i32.gt_u
  select
  return
 )
 (func $~lib/rt/tlsf/searchBlock (; 13 ;) (param $0 i32) (param $1 i32) (result i32)
  (local $2 i32)
  (local $4 i32)
  (local $6 i32)
  (local $8 i32)
  (local $5 i32)
  (local $7 i32)
  (local $3 i32)
  (local $9 i32)
  (local $24 i32)
  (local $42 i32)
  local.get $1
  i32.const 256
  i32.lt_u
  if
   i32.const 0
   local.set $2
   local.get $1
   i32.const 4
   i32.shr_u
   local.set $3
  else
   local.get $1
   i32.const 536870904
   i32.lt_u
   if
    local.get $1
    i32.const 1
    i32.const 27
    local.get $1
    i32.clz
    i32.sub
    i32.shl
    i32.add
    i32.const 1
    i32.sub
    local.set $24
   else
    local.get $1
    local.set $24
   end
   local.get $24
   local.set $4
   i32.const 31
   local.get $4
   i32.clz
   i32.sub
   local.set $2
   local.get $4
   local.get $2
   i32.const 4
   i32.sub
   i32.shr_u
   i32.const 1
   i32.const 4
   i32.shl
   i32.xor
   local.set $3
   local.get $2
   i32.const 8
   i32.const 1
   i32.sub
   i32.sub
   local.set $2
  end
  local.get $2
  i32.const 23
  i32.lt_u
  if
   local.get $3
   i32.const 16
   i32.lt_u
   local.set $42
  else
   i32.const 0
   local.set $42
  end
  local.get $42
  i32.eqz
  if
   i32.const 0
   i32.const 32
   i32.const 338
   i32.const 13
   call $~lib/builtins/abort
   unreachable
  end
  local.get $0
  local.set $5
  local.get $2
  local.set $4
  local.get $5
  local.get $4
  i32.const 2
  i32.shl
  i32.add
  i32.load offset=4
  i32.const 0
  i32.const -1
  i32.xor
  local.get $3
  i32.shl
  i32.and
  local.set $6
  i32.const 0
  local.set $7
  local.get $6
  i32.eqz
  if
   local.get $0
   i32.load
   i32.const 0
   i32.const -1
   i32.xor
   local.get $2
   i32.const 1
   i32.add
   i32.shl
   i32.and
   local.set $5
   local.get $5
   i32.eqz
   if
    i32.const 0
    local.set $7
   else
    local.get $5
    call $__wasm_ctz_i32
    local.set $2
    local.get $0
    local.set $8
    local.get $2
    local.set $4
    local.get $8
    local.get $4
    i32.const 2
    i32.shl
    i32.add
    i32.load offset=4
    local.set $6
    local.get $6
    i32.eqz
    if
     i32.const 0
     i32.const 32
     i32.const 351
     i32.const 17
     call $~lib/builtins/abort
     unreachable
    end
    local.get $0
    local.set $9
    local.get $2
    local.set $8
    local.get $6
    call $__wasm_ctz_i32
    local.set $4
    local.get $9
    local.get $8
    i32.const 4
    i32.shl
    local.get $4
    i32.add
    i32.const 2
    i32.shl
    i32.add
    i32.load offset=96
    local.set $7
   end
  else
   local.get $0
   local.set $9
   local.get $2
   local.set $8
   local.get $6
   call $__wasm_ctz_i32
   local.set $4
   local.get $9
   local.get $8
   i32.const 4
   i32.shl
   local.get $4
   i32.add
   i32.const 2
   i32.shl
   i32.add
   i32.load offset=96
   local.set $7
  end
  local.get $7
  return
 )
 (func $~lib/rt/tlsf/growMemory (; 14 ;) (param $0 i32) (param $1 i32)
  (local $2 i32)
  (local $4 i32)
  local.get $1
  i32.const 536870904
  i32.lt_u
  if
   local.get $1
   i32.const 1
   i32.const 27
   local.get $1
   i32.clz
   i32.sub
   i32.shl
   i32.const 1
   i32.sub
   i32.add
   local.set $1
  end
  memory.size
  local.set $2
  local.get $1
  i32.const 16
  local.get $2
  i32.const 16
  i32.shl
  i32.const 16
  i32.sub
  local.get $0
  i32.load offset=1568
  i32.ne
  i32.shl
  i32.add
  local.set $1
  local.get $1
  i32.const 65535
  i32.add
  i32.const 65535
  i32.const -1
  i32.xor
  i32.and
  i32.const 16
  i32.shr_u
  local.set $4
  local.get $2
  local.get $4
  local.get $2
  local.get $4
  i32.gt_s
  select
  memory.grow
  i32.const 0
  i32.lt_s
  if
   local.get $4
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
  drop
 )
 (func $~lib/rt/tlsf/prepareBlock (; 15 ;) (param $0 i32) (param $1 i32) (param $2 i32)
  (local $5 i32)
  (local $3 i32)
  (local $4 i32)
  (local $47 i32)
  local.get $1
  i32.load
  local.set $3
  local.get $2
  i32.const 15
  i32.and
  i32.eqz
  i32.eqz
  if
   i32.const 0
   i32.const 32
   i32.const 365
   i32.const 13
   call $~lib/builtins/abort
   unreachable
  end
  local.get $3
  i32.const 3
  i32.const -1
  i32.xor
  i32.and
  local.get $2
  i32.sub
  local.set $4
  local.get $4
  i32.const 32
  i32.ge_u
  if
   local.get $1
   local.get $2
   local.get $3
   i32.const 2
   i32.and
   i32.or
   i32.store
   local.get $1
   i32.const 16
   i32.add
   local.get $2
   i32.add
   local.set $5
   local.get $5
   local.get $4
   i32.const 16
   i32.sub
   i32.const 1
   i32.or
   i32.store
   local.get $0
   local.get $5
   call $~lib/rt/tlsf/insertBlock
  else
   local.get $1
   local.get $3
   i32.const 1
   i32.const -1
   i32.xor
   i32.and
   i32.store
   local.get $1
   local.set $5
   local.get $5
   i32.const 16
   i32.add
   local.get $5
   i32.load
   i32.const 3
   i32.const -1
   i32.xor
   i32.and
   i32.add
   local.set $47
   local.get $1
   local.set $5
   local.get $47
   local.get $5
   i32.const 16
   i32.add
   local.get $5
   i32.load
   i32.const 3
   i32.const -1
   i32.xor
   i32.and
   i32.add
   i32.load
   i32.const 2
   i32.const -1
   i32.xor
   i32.and
   i32.store
  end
 )
 (func $~lib/rt/tlsf/allocateBlock (; 16 ;) (param $0 i32) (param $1 i32) (param $2 i32) (result i32)
  (local $4 i32)
  (local $3 i32)
  global.get $~lib/rt/tlsf/collectLock
  i32.eqz
  i32.eqz
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
  local.set $3
  local.get $0
  local.get $3
  call $~lib/rt/tlsf/searchBlock
  local.set $4
  local.get $4
  i32.eqz
  if
   global.get $~lib/gc/gc.auto
   if
    i32.const 1
    global.set $~lib/rt/tlsf/collectLock
    call $~lib/rt/pure/__collect
    i32.const 0
    global.set $~lib/rt/tlsf/collectLock
    local.get $0
    local.get $3
    call $~lib/rt/tlsf/searchBlock
    local.set $4
    local.get $4
    i32.eqz
    if
     local.get $0
     local.get $3
     call $~lib/rt/tlsf/growMemory
     local.get $0
     local.get $3
     call $~lib/rt/tlsf/searchBlock
     local.set $4
     local.get $4
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
   else
    local.get $0
    local.get $3
    call $~lib/rt/tlsf/growMemory
    local.get $0
    local.get $3
    call $~lib/rt/tlsf/searchBlock
    local.set $4
    local.get $4
    i32.eqz
    if
     i32.const 0
     i32.const 32
     i32.const 507
     i32.const 17
     call $~lib/builtins/abort
     unreachable
    end
   end
  end
  local.get $4
  i32.load
  i32.const -4
  i32.and
  local.get $3
  i32.ge_u
  i32.eqz
  if
   i32.const 0
   i32.const 32
   i32.const 510
   i32.const 13
   call $~lib/builtins/abort
   unreachable
  end
  local.get $4
  i32.const 0
  i32.store offset=4
  local.get $4
  local.get $2
  i32.store offset=8
  local.get $4
  local.get $1
  i32.store offset=12
  local.get $0
  local.get $4
  call $~lib/rt/tlsf/removeBlock
  local.get $0
  local.get $4
  local.get $3
  call $~lib/rt/tlsf/prepareBlock
  local.get $4
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
  i32.eq
  i32.eqz
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
  i32.eqz
  i32.eqz
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
  global.get $~lib/heap/__heap_base
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
  global.get $~lib/heap/__heap_base
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
 (func $assembly/index/modpow (; 22 ;) (param $0 i32) (param $0$hi i32) (param $1 i32) (param $1$hi i32) (param $2 i32) (param $2$hi i32) (result i32)
  (local $i64toi32_i32$3 i32)
  (local $i64toi32_i32$0 i32)
  (local $i64toi32_i32$2 i32)
  (local $i64toi32_i32$1 i32)
  (local $i64toi32_i32$4 i32)
  (local $3$hi i32)
  (local $3 i32)
  (local $15 i32)
  (local $18$hi i32)
  (local $16 i32)
  (local $25$hi i32)
  (local $17 i32)
  local.get $2$hi
  local.set $i64toi32_i32$0
  local.get $2
  local.set $i64toi32_i32$2
  i32.const 0
  local.set $i64toi32_i32$1
  i32.const 1
  local.set $i64toi32_i32$3
  local.get $i64toi32_i32$2
  local.get $i64toi32_i32$3
  i32.eq
  local.get $i64toi32_i32$0
  local.get $i64toi32_i32$1
  i32.eq
  i32.and
  if
   i32.const 0
   local.set $i64toi32_i32$2
   i32.const 0
   local.set $i64toi32_i32$0
   local.get $i64toi32_i32$2
   global.set $i64toi32_i32$HIGH_BITS
   local.get $i64toi32_i32$0
   return
  end
  i32.const 0
  local.set $i64toi32_i32$0
  i32.const 1
  local.set $3
  local.get $i64toi32_i32$0
  local.set $3$hi
  local.get $0$hi
  local.set $i64toi32_i32$0
  local.get $2$hi
  local.set $i64toi32_i32$0
  local.get $0$hi
  local.set $i64toi32_i32$0
  local.get $2$hi
  local.set $i64toi32_i32$2
  local.get $0
  local.get $i64toi32_i32$0
  local.get $2
  local.get $i64toi32_i32$2
  call $__wasm_i64_urem
  local.set $i64toi32_i32$2
  global.get $i64toi32_i32$HIGH_BITS
  local.set $i64toi32_i32$0
  local.get $i64toi32_i32$2
  local.set $0
  local.get $i64toi32_i32$0
  local.set $0$hi
  loop $while-continue|0
   local.get $1$hi
   local.set $i64toi32_i32$0
   local.get $1
   local.set $i64toi32_i32$3
   i32.const 0
   local.set $i64toi32_i32$2
   i32.const 0
   local.set $i64toi32_i32$1
   local.get $i64toi32_i32$0
   local.get $i64toi32_i32$2
   i32.gt_u
   local.get $i64toi32_i32$0
   local.get $i64toi32_i32$2
   i32.eq
   local.get $i64toi32_i32$3
   local.get $i64toi32_i32$1
   i32.gt_u
   i32.and
   i32.or
   if
    local.get $1$hi
    local.set $i64toi32_i32$3
    i32.const 0
    local.set $i64toi32_i32$0
    local.get $1
    local.get $i64toi32_i32$3
    i32.const 2
    local.get $i64toi32_i32$0
    call $__wasm_i64_urem
    local.set $i64toi32_i32$0
    global.get $i64toi32_i32$HIGH_BITS
    local.set $i64toi32_i32$3
    local.get $i64toi32_i32$0
    local.set $i64toi32_i32$1
    i32.const 0
    local.set $i64toi32_i32$0
    i32.const 1
    local.set $i64toi32_i32$2
    local.get $i64toi32_i32$1
    local.get $i64toi32_i32$2
    i32.eq
    local.get $i64toi32_i32$3
    local.get $i64toi32_i32$0
    i32.eq
    i32.and
    if
     local.get $3$hi
     local.set $i64toi32_i32$1
     local.get $0$hi
     local.set $i64toi32_i32$1
     local.get $3$hi
     local.set $i64toi32_i32$1
     local.get $0$hi
     local.set $i64toi32_i32$3
     local.get $3
     local.get $i64toi32_i32$1
     local.get $0
     local.get $i64toi32_i32$3
     call $__wasm_i64_mul
     local.set $i64toi32_i32$3
     global.get $i64toi32_i32$HIGH_BITS
     local.set $i64toi32_i32$1
     local.get $i64toi32_i32$1
     local.set $18$hi
     local.get $2$hi
     local.set $i64toi32_i32$1
     local.get $18$hi
     local.set $i64toi32_i32$1
     local.get $i64toi32_i32$3
     local.set $16
     local.get $2$hi
     local.set $i64toi32_i32$3
     local.get $16
     local.get $i64toi32_i32$1
     local.get $2
     local.get $i64toi32_i32$3
     call $__wasm_i64_urem
     local.set $i64toi32_i32$3
     global.get $i64toi32_i32$HIGH_BITS
     local.set $i64toi32_i32$1
     local.get $i64toi32_i32$3
     local.set $3
     local.get $i64toi32_i32$1
     local.set $3$hi
    end
    local.get $1$hi
    local.set $i64toi32_i32$1
    local.get $1
    local.set $i64toi32_i32$2
    i32.const 0
    local.set $i64toi32_i32$3
    i32.const 1
    local.set $i64toi32_i32$0
    local.get $i64toi32_i32$0
    i32.const 31
    i32.and
    local.set $i64toi32_i32$4
    i32.const 32
    local.get $i64toi32_i32$0
    i32.const 63
    i32.and
    i32.le_u
    if
     i32.const 0
     local.set $i64toi32_i32$3
     local.get $i64toi32_i32$1
     local.get $i64toi32_i32$4
     i32.shr_u
     local.set $15
    else
     local.get $i64toi32_i32$1
     local.get $i64toi32_i32$4
     i32.shr_u
     local.set $i64toi32_i32$3
     i32.const 1
     local.get $i64toi32_i32$4
     i32.shl
     i32.const 1
     i32.sub
     local.get $i64toi32_i32$1
     i32.and
     i32.const 32
     local.get $i64toi32_i32$4
     i32.sub
     i32.shl
     local.get $i64toi32_i32$2
     local.get $i64toi32_i32$4
     i32.shr_u
     i32.or
     local.set $15
    end
    local.get $15
    local.set $1
    local.get $i64toi32_i32$3
    local.set $1$hi
    local.get $0$hi
    local.set $i64toi32_i32$3
    local.get $i64toi32_i32$3
    local.set $i64toi32_i32$2
    local.get $0
    local.get $i64toi32_i32$3
    local.get $0
    local.get $i64toi32_i32$3
    call $__wasm_i64_mul
    local.set $i64toi32_i32$2
    global.get $i64toi32_i32$HIGH_BITS
    local.set $i64toi32_i32$3
    local.get $i64toi32_i32$3
    local.set $25$hi
    local.get $2$hi
    local.set $i64toi32_i32$3
    local.get $25$hi
    local.set $i64toi32_i32$3
    local.get $i64toi32_i32$2
    local.set $17
    local.get $2$hi
    local.set $i64toi32_i32$2
    local.get $17
    local.get $i64toi32_i32$3
    local.get $2
    local.get $i64toi32_i32$2
    call $__wasm_i64_urem
    local.set $i64toi32_i32$2
    global.get $i64toi32_i32$HIGH_BITS
    local.set $i64toi32_i32$3
    local.get $i64toi32_i32$2
    local.set $0
    local.get $i64toi32_i32$3
    local.set $0$hi
    br $while-continue|0
   end
  end
  local.get $3$hi
  local.set $i64toi32_i32$3
  local.get $3
  local.set $i64toi32_i32$2
  local.get $i64toi32_i32$3
  global.set $i64toi32_i32$HIGH_BITS
  local.get $i64toi32_i32$2
  return
 )
 (func $~lib/math/murmurHash3 (; 23 ;) (param $0 i32) (param $0$hi i32) (result i32)
  (local $i64toi32_i32$2 i32)
  (local $i64toi32_i32$0 i32)
  (local $i64toi32_i32$1 i32)
  (local $i64toi32_i32$4 i32)
  (local $i64toi32_i32$3 i32)
  (local $16 i32)
  (local $17 i32)
  (local $18 i32)
  (local $1 i32)
  (local $1$hi i32)
  (local $3$hi i32)
  (local $7 i32)
  (local $7$hi i32)
  (local $9$hi i32)
  (local $13 i32)
  (local $13$hi i32)
  (local $15$hi i32)
  local.get $0$hi
  local.set $i64toi32_i32$0
  local.get $0
  local.set $1
  local.get $i64toi32_i32$0
  local.set $1$hi
  local.get $0
  local.set $i64toi32_i32$2
  i32.const 0
  local.set $i64toi32_i32$1
  i32.const 33
  local.set $i64toi32_i32$3
  local.get $i64toi32_i32$3
  i32.const 31
  i32.and
  local.set $i64toi32_i32$4
  i32.const 32
  local.get $i64toi32_i32$3
  i32.const 63
  i32.and
  i32.le_u
  if
   i32.const 0
   local.set $i64toi32_i32$1
   local.get $i64toi32_i32$0
   local.get $i64toi32_i32$4
   i32.shr_u
   local.set $16
  else
   local.get $i64toi32_i32$0
   local.get $i64toi32_i32$4
   i32.shr_u
   local.set $i64toi32_i32$1
   i32.const 1
   local.get $i64toi32_i32$4
   i32.shl
   i32.const 1
   i32.sub
   local.get $i64toi32_i32$0
   i32.and
   i32.const 32
   local.get $i64toi32_i32$4
   i32.sub
   i32.shl
   local.get $i64toi32_i32$2
   local.get $i64toi32_i32$4
   i32.shr_u
   i32.or
   local.set $16
  end
  local.get $i64toi32_i32$1
  local.set $3$hi
  local.get $1$hi
  local.set $i64toi32_i32$1
  local.get $1
  local.set $i64toi32_i32$0
  local.get $3$hi
  local.set $i64toi32_i32$2
  local.get $16
  local.set $i64toi32_i32$3
  local.get $i64toi32_i32$1
  local.get $i64toi32_i32$2
  i32.xor
  local.set $i64toi32_i32$2
  local.get $i64toi32_i32$0
  local.get $i64toi32_i32$3
  i32.xor
  local.set $0
  local.get $i64toi32_i32$2
  local.set $0$hi
  i32.const -11423785
  local.set $i64toi32_i32$0
  local.get $0
  local.get $i64toi32_i32$2
  i32.const -313160499
  local.get $i64toi32_i32$0
  call $__wasm_i64_mul
  local.set $i64toi32_i32$0
  global.get $i64toi32_i32$HIGH_BITS
  local.set $i64toi32_i32$2
  local.get $i64toi32_i32$0
  local.set $0
  local.get $i64toi32_i32$2
  local.set $0$hi
  local.get $i64toi32_i32$0
  local.set $7
  local.get $i64toi32_i32$2
  local.set $7$hi
  local.get $i64toi32_i32$0
  local.set $i64toi32_i32$1
  i32.const 0
  local.set $i64toi32_i32$0
  i32.const 33
  local.set $i64toi32_i32$3
  local.get $i64toi32_i32$3
  i32.const 31
  i32.and
  local.set $i64toi32_i32$4
  i32.const 32
  local.get $i64toi32_i32$3
  i32.const 63
  i32.and
  i32.le_u
  if
   i32.const 0
   local.set $i64toi32_i32$0
   local.get $i64toi32_i32$2
   local.get $i64toi32_i32$4
   i32.shr_u
   local.set $17
  else
   local.get $i64toi32_i32$2
   local.get $i64toi32_i32$4
   i32.shr_u
   local.set $i64toi32_i32$0
   i32.const 1
   local.get $i64toi32_i32$4
   i32.shl
   i32.const 1
   i32.sub
   local.get $i64toi32_i32$2
   i32.and
   i32.const 32
   local.get $i64toi32_i32$4
   i32.sub
   i32.shl
   local.get $i64toi32_i32$1
   local.get $i64toi32_i32$4
   i32.shr_u
   i32.or
   local.set $17
  end
  local.get $i64toi32_i32$0
  local.set $9$hi
  local.get $7$hi
  local.set $i64toi32_i32$0
  local.get $7
  local.set $i64toi32_i32$2
  local.get $9$hi
  local.set $i64toi32_i32$1
  local.get $17
  local.set $i64toi32_i32$3
  local.get $i64toi32_i32$0
  local.get $i64toi32_i32$1
  i32.xor
  local.set $i64toi32_i32$1
  local.get $i64toi32_i32$2
  local.get $i64toi32_i32$3
  i32.xor
  local.set $0
  local.get $i64toi32_i32$1
  local.set $0$hi
  i32.const -993084930
  local.set $i64toi32_i32$2
  local.get $0
  local.get $i64toi32_i32$1
  i32.const 444984403
  local.get $i64toi32_i32$2
  call $__wasm_i64_mul
  local.set $i64toi32_i32$2
  global.get $i64toi32_i32$HIGH_BITS
  local.set $i64toi32_i32$1
  local.get $i64toi32_i32$2
  local.set $0
  local.get $i64toi32_i32$1
  local.set $0$hi
  local.get $i64toi32_i32$2
  local.set $13
  local.get $i64toi32_i32$1
  local.set $13$hi
  local.get $i64toi32_i32$2
  local.set $i64toi32_i32$0
  i32.const 0
  local.set $i64toi32_i32$2
  i32.const 33
  local.set $i64toi32_i32$3
  local.get $i64toi32_i32$3
  i32.const 31
  i32.and
  local.set $i64toi32_i32$4
  i32.const 32
  local.get $i64toi32_i32$3
  i32.const 63
  i32.and
  i32.le_u
  if
   i32.const 0
   local.set $i64toi32_i32$2
   local.get $i64toi32_i32$1
   local.get $i64toi32_i32$4
   i32.shr_u
   local.set $18
  else
   local.get $i64toi32_i32$1
   local.get $i64toi32_i32$4
   i32.shr_u
   local.set $i64toi32_i32$2
   i32.const 1
   local.get $i64toi32_i32$4
   i32.shl
   i32.const 1
   i32.sub
   local.get $i64toi32_i32$1
   i32.and
   i32.const 32
   local.get $i64toi32_i32$4
   i32.sub
   i32.shl
   local.get $i64toi32_i32$0
   local.get $i64toi32_i32$4
   i32.shr_u
   i32.or
   local.set $18
  end
  local.get $i64toi32_i32$2
  local.set $15$hi
  local.get $13$hi
  local.set $i64toi32_i32$2
  local.get $13
  local.set $i64toi32_i32$1
  local.get $15$hi
  local.set $i64toi32_i32$0
  local.get $18
  local.set $i64toi32_i32$3
  local.get $i64toi32_i32$2
  local.get $i64toi32_i32$0
  i32.xor
  local.set $i64toi32_i32$0
  local.get $i64toi32_i32$1
  local.get $i64toi32_i32$3
  i32.xor
  local.set $0
  local.get $i64toi32_i32$0
  local.set $0$hi
  local.get $0
  local.set $i64toi32_i32$1
  local.get $i64toi32_i32$0
  global.set $i64toi32_i32$HIGH_BITS
  local.get $i64toi32_i32$1
  return
 )
 (func $~lib/math/splitMix32 (; 24 ;) (param $0 i32) (result i32)
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
  return
 )
 (func $~lib/math/NativeMath.seedRandom (; 25 ;) (param $0 i32) (param $0$hi i32)
  (local $i64toi32_i32$0 i32)
  (local $i64toi32_i32$2 i32)
  (local $i64toi32_i32$1 i32)
  (local $i64toi32_i32$3 i32)
  (local $15 i32)
  (local $19 i32)
  (local $23 i32)
  i32.const 1
  global.set $~lib/math/random_seeded
  local.get $0$hi
  local.set $i64toi32_i32$0
  local.get $0
  local.get $i64toi32_i32$0
  call $~lib/math/murmurHash3
  local.set $i64toi32_i32$0
  global.get $i64toi32_i32$HIGH_BITS
  local.set $i64toi32_i32$1
  local.get $i64toi32_i32$0
  global.set $~lib/math/random_state0_64
  local.get $i64toi32_i32$1
  global.set $~lib/math/random_state0_64$hi
  global.get $~lib/math/random_state0_64$hi
  local.set $i64toi32_i32$1
  global.get $~lib/math/random_state0_64
  local.set $i64toi32_i32$2
  i32.const -1
  local.set $i64toi32_i32$0
  i32.const -1
  local.set $i64toi32_i32$3
  local.get $i64toi32_i32$1
  local.get $i64toi32_i32$0
  i32.xor
  local.set $i64toi32_i32$0
  local.get $i64toi32_i32$2
  local.get $i64toi32_i32$3
  i32.xor
  local.get $i64toi32_i32$0
  call $~lib/math/murmurHash3
  local.set $i64toi32_i32$0
  global.get $i64toi32_i32$HIGH_BITS
  local.set $i64toi32_i32$2
  local.get $i64toi32_i32$0
  global.set $~lib/math/random_state1_64
  local.get $i64toi32_i32$2
  global.set $~lib/math/random_state1_64$hi
  local.get $0$hi
  local.set $i64toi32_i32$2
  local.get $0
  call $~lib/math/splitMix32
  global.set $~lib/math/random_state0_32
  global.get $~lib/math/random_state0_32
  call $~lib/math/splitMix32
  global.set $~lib/math/random_state1_32
  global.get $~lib/math/random_state0_64$hi
  local.set $i64toi32_i32$2
  global.get $~lib/math/random_state0_64
  local.set $i64toi32_i32$1
  i32.const 0
  local.set $i64toi32_i32$0
  i32.const 0
  local.set $i64toi32_i32$3
  local.get $i64toi32_i32$1
  local.get $i64toi32_i32$3
  i32.ne
  local.get $i64toi32_i32$2
  local.get $i64toi32_i32$0
  i32.ne
  i32.or
  if
   global.get $~lib/math/random_state1_64$hi
   local.set $i64toi32_i32$1
   global.get $~lib/math/random_state1_64
   local.set $i64toi32_i32$3
   i32.const 0
   local.set $i64toi32_i32$2
   i32.const 0
   local.set $i64toi32_i32$0
   local.get $i64toi32_i32$3
   local.get $i64toi32_i32$0
   i32.ne
   local.get $i64toi32_i32$1
   local.get $i64toi32_i32$2
   i32.ne
   i32.or
   local.set $15
  else
   i32.const 0
   local.set $15
  end
  local.get $15
  if
   global.get $~lib/math/random_state0_32
   i32.const 0
   i32.ne
   local.set $19
  else
   i32.const 0
   local.set $19
  end
  local.get $19
  if
   global.get $~lib/math/random_state1_32
   i32.const 0
   i32.ne
   local.set $23
  else
   i32.const 0
   local.set $23
  end
  local.get $23
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
  (local $i64toi32_i32$0 i32)
  (local $i64toi32_i32$2 i32)
  (local $i64toi32_i32$1 i32)
  (local $i64toi32_i32$4 i32)
  (local $i64toi32_i32$3 i32)
  (local $0 i32)
  (local $0$hi i32)
  (local $1$hi i32)
  (local $1 i32)
  (local $18 i32)
  (local $20 i32)
  (local $21 i32)
  (local $22 i32)
  (local $8 i32)
  (local $8$hi i32)
  (local $10$hi i32)
  (local $12 i32)
  (local $12$hi i32)
  (local $14$hi i32)
  (local $19 i32)
  (local $19$hi i32)
  (local $21$hi i32)
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
  global.get $~lib/math/random_state0_64$hi
  local.set $i64toi32_i32$0
  global.get $~lib/math/random_state0_64
  local.set $0
  local.get $i64toi32_i32$0
  local.set $0$hi
  global.get $~lib/math/random_state1_64$hi
  local.set $i64toi32_i32$0
  global.get $~lib/math/random_state1_64
  local.set $1
  local.get $i64toi32_i32$0
  local.set $1$hi
  local.get $1
  global.set $~lib/math/random_state0_64
  local.get $i64toi32_i32$0
  global.set $~lib/math/random_state0_64$hi
  local.get $0$hi
  local.set $i64toi32_i32$0
  local.get $0
  local.set $8
  local.get $i64toi32_i32$0
  local.set $8$hi
  local.get $0
  local.set $i64toi32_i32$2
  i32.const 0
  local.set $i64toi32_i32$1
  i32.const 23
  local.set $i64toi32_i32$3
  local.get $i64toi32_i32$3
  i32.const 31
  i32.and
  local.set $i64toi32_i32$4
  i32.const 32
  local.get $i64toi32_i32$3
  i32.const 63
  i32.and
  i32.le_u
  if
   local.get $i64toi32_i32$2
   local.get $i64toi32_i32$4
   i32.shl
   local.set $i64toi32_i32$1
   i32.const 0
   local.set $18
  else
   i32.const 1
   local.get $i64toi32_i32$4
   i32.shl
   i32.const 1
   i32.sub
   local.get $i64toi32_i32$2
   i32.const 32
   local.get $i64toi32_i32$4
   i32.sub
   i32.shr_u
   i32.and
   local.get $i64toi32_i32$0
   local.get $i64toi32_i32$4
   i32.shl
   i32.or
   local.set $i64toi32_i32$1
   local.get $i64toi32_i32$2
   local.get $i64toi32_i32$4
   i32.shl
   local.set $18
  end
  local.get $i64toi32_i32$1
  local.set $10$hi
  local.get $8$hi
  local.set $i64toi32_i32$1
  local.get $8
  local.set $i64toi32_i32$0
  local.get $10$hi
  local.set $i64toi32_i32$2
  local.get $18
  local.set $i64toi32_i32$3
  local.get $i64toi32_i32$1
  local.get $i64toi32_i32$2
  i32.xor
  local.set $i64toi32_i32$2
  local.get $i64toi32_i32$0
  local.get $i64toi32_i32$3
  i32.xor
  local.set $0
  local.get $i64toi32_i32$2
  local.set $0$hi
  local.get $0
  local.set $12
  local.get $i64toi32_i32$2
  local.set $12$hi
  local.get $0
  local.set $i64toi32_i32$1
  i32.const 0
  local.set $i64toi32_i32$0
  i32.const 17
  local.set $i64toi32_i32$3
  local.get $i64toi32_i32$3
  i32.const 31
  i32.and
  local.set $i64toi32_i32$4
  i32.const 32
  local.get $i64toi32_i32$3
  i32.const 63
  i32.and
  i32.le_u
  if
   i32.const 0
   local.set $i64toi32_i32$0
   local.get $i64toi32_i32$2
   local.get $i64toi32_i32$4
   i32.shr_u
   local.set $20
  else
   local.get $i64toi32_i32$2
   local.get $i64toi32_i32$4
   i32.shr_u
   local.set $i64toi32_i32$0
   i32.const 1
   local.get $i64toi32_i32$4
   i32.shl
   i32.const 1
   i32.sub
   local.get $i64toi32_i32$2
   i32.and
   i32.const 32
   local.get $i64toi32_i32$4
   i32.sub
   i32.shl
   local.get $i64toi32_i32$1
   local.get $i64toi32_i32$4
   i32.shr_u
   i32.or
   local.set $20
  end
  local.get $i64toi32_i32$0
  local.set $14$hi
  local.get $12$hi
  local.set $i64toi32_i32$0
  local.get $12
  local.set $i64toi32_i32$2
  local.get $14$hi
  local.set $i64toi32_i32$1
  local.get $20
  local.set $i64toi32_i32$3
  local.get $i64toi32_i32$0
  local.get $i64toi32_i32$1
  i32.xor
  local.set $i64toi32_i32$1
  local.get $i64toi32_i32$2
  local.get $i64toi32_i32$3
  i32.xor
  local.set $0
  local.get $i64toi32_i32$1
  local.set $0$hi
  local.get $1$hi
  local.set $i64toi32_i32$1
  local.get $0$hi
  local.set $i64toi32_i32$1
  local.get $0
  local.set $i64toi32_i32$0
  local.get $1$hi
  local.set $i64toi32_i32$2
  local.get $1
  local.set $i64toi32_i32$3
  local.get $i64toi32_i32$1
  local.get $i64toi32_i32$2
  i32.xor
  local.set $i64toi32_i32$2
  local.get $i64toi32_i32$0
  local.get $i64toi32_i32$3
  i32.xor
  local.set $0
  local.get $i64toi32_i32$2
  local.set $0$hi
  local.get $0
  local.set $19
  local.get $i64toi32_i32$2
  local.set $19$hi
  local.get $1$hi
  local.set $i64toi32_i32$2
  local.get $i64toi32_i32$3
  local.set $i64toi32_i32$1
  i32.const 0
  local.set $i64toi32_i32$0
  i32.const 26
  local.set $i64toi32_i32$3
  local.get $i64toi32_i32$3
  i32.const 31
  i32.and
  local.set $i64toi32_i32$4
  i32.const 32
  local.get $i64toi32_i32$3
  i32.const 63
  i32.and
  i32.le_u
  if
   i32.const 0
   local.set $i64toi32_i32$0
   local.get $i64toi32_i32$2
   local.get $i64toi32_i32$4
   i32.shr_u
   local.set $21
  else
   local.get $i64toi32_i32$2
   local.get $i64toi32_i32$4
   i32.shr_u
   local.set $i64toi32_i32$0
   i32.const 1
   local.get $i64toi32_i32$4
   i32.shl
   i32.const 1
   i32.sub
   local.get $i64toi32_i32$2
   i32.and
   i32.const 32
   local.get $i64toi32_i32$4
   i32.sub
   i32.shl
   local.get $i64toi32_i32$1
   local.get $i64toi32_i32$4
   i32.shr_u
   i32.or
   local.set $21
  end
  local.get $i64toi32_i32$0
  local.set $21$hi
  local.get $19$hi
  local.set $i64toi32_i32$0
  local.get $19
  local.set $i64toi32_i32$2
  local.get $21$hi
  local.set $i64toi32_i32$1
  local.get $21
  local.set $i64toi32_i32$3
  local.get $i64toi32_i32$0
  local.get $i64toi32_i32$1
  i32.xor
  local.set $i64toi32_i32$1
  local.get $i64toi32_i32$2
  local.get $i64toi32_i32$3
  i32.xor
  local.set $0
  local.get $i64toi32_i32$1
  local.set $0$hi
  local.get $0
  global.set $~lib/math/random_state1_64
  local.get $i64toi32_i32$1
  global.set $~lib/math/random_state1_64$hi
  local.get $1$hi
  local.set $i64toi32_i32$1
  local.get $1
  local.set $i64toi32_i32$0
  i32.const 0
  local.set $i64toi32_i32$2
  i32.const 12
  local.set $i64toi32_i32$3
  local.get $i64toi32_i32$3
  i32.const 31
  i32.and
  local.set $i64toi32_i32$4
  i32.const 32
  local.get $i64toi32_i32$3
  i32.const 63
  i32.and
  i32.le_u
  if
   i32.const 0
   local.set $i64toi32_i32$2
   local.get $i64toi32_i32$1
   local.get $i64toi32_i32$4
   i32.shr_u
   local.set $22
  else
   local.get $i64toi32_i32$1
   local.get $i64toi32_i32$4
   i32.shr_u
   local.set $i64toi32_i32$2
   i32.const 1
   local.get $i64toi32_i32$4
   i32.shl
   i32.const 1
   i32.sub
   local.get $i64toi32_i32$1
   i32.and
   i32.const 32
   local.get $i64toi32_i32$4
   i32.sub
   i32.shl
   local.get $i64toi32_i32$0
   local.get $i64toi32_i32$4
   i32.shr_u
   i32.or
   local.set $22
  end
  local.get $22
  local.set $i64toi32_i32$1
  i32.const 1072693248
  local.set $i64toi32_i32$0
  i32.const 0
  local.set $i64toi32_i32$3
  local.get $i64toi32_i32$2
  local.get $i64toi32_i32$0
  i32.or
  local.set $i64toi32_i32$0
  i32.const 0
  local.get $i64toi32_i32$1
  local.get $i64toi32_i32$3
  i32.or
  call $wasm2js_scratch_store_i32
  i32.const 1
  local.get $i64toi32_i32$0
  call $wasm2js_scratch_store_i32
  call $wasm2js_scratch_load_f64
  f64.const 1
  f64.sub
  return
 )
 (func $assembly/index/rng_gen_range (; 27 ;) (param $0 i32) (param $0$hi i32) (param $1 i32) (param $1$hi i32) (result i32)
  (local $i64toi32_i32$0 f64)
  (local $i64toi32_i32$1 i32)
  (local $i64toi32_i32$6 i32)
  (local $i64toi32_i32$5 i32)
  (local $i64toi32_i32$4 i32)
  (local $i64toi32_i32$3 i32)
  (local $i64toi32_i32$2 i32)
  (local $12 i32)
  (local $13 i32)
  (local $14 i32)
  (local $15 i32)
  (local $2 f64)
  call $~lib/bindings/Date/now
  local.set $i64toi32_i32$0
  local.get $i64toi32_i32$0
  f64.abs
  f64.const 1
  f64.ge
  if
   local.get $i64toi32_i32$0
   f64.const 0
   f64.gt
   if
    local.get $i64toi32_i32$0
    f64.const 4294967296
    f64.div
    f64.floor
    f64.const 4294967296
    f64.const 1
    f64.sub
    f64.min
    i32.trunc_f64_u
    local.set $13
   else
    local.get $i64toi32_i32$0
    local.get $i64toi32_i32$0
    i32.trunc_f64_u
    f64.convert_i32_u
    f64.sub
    f64.const 4294967296
    f64.div
    f64.ceil
    i32.trunc_f64_u
    local.set $13
   end
   local.get $13
   local.set $14
  else
   i32.const 0
   local.set $14
  end
  local.get $14
  local.set $i64toi32_i32$1
  local.get $i64toi32_i32$0
  i32.trunc_f64_u
  local.get $i64toi32_i32$1
  call $~lib/math/NativeMath.seedRandom
  local.get $1$hi
  local.set $i64toi32_i32$1
  local.get $0$hi
  local.set $i64toi32_i32$1
  local.get $1$hi
  local.set $i64toi32_i32$1
  local.get $1
  local.set $i64toi32_i32$3
  local.get $0$hi
  local.set $i64toi32_i32$2
  local.get $0
  local.set $i64toi32_i32$4
  local.get $i64toi32_i32$3
  local.get $i64toi32_i32$4
  i32.sub
  local.set $i64toi32_i32$5
  local.get $i64toi32_i32$3
  local.get $i64toi32_i32$4
  i32.lt_u
  local.get $0$hi
  i32.add
  local.set $i64toi32_i32$6
  local.get $i64toi32_i32$1
  local.get $i64toi32_i32$6
  i32.sub
  local.set $i64toi32_i32$6
  local.get $i64toi32_i32$5
  local.set $i64toi32_i32$3
  i32.const 0
  local.set $i64toi32_i32$1
  local.get $i64toi32_i32$5
  f64.convert_i32_u
  f64.const 4294967296
  local.get $i64toi32_i32$6
  f64.convert_i32_u
  f64.mul
  f64.add
  local.set $2
  call $~lib/math/NativeMath.random
  local.get $2
  f64.mul
  f64.floor
  local.set $i64toi32_i32$0
  local.get $i64toi32_i32$0
  f64.abs
  f64.const 1
  f64.ge
  if
   local.get $i64toi32_i32$0
   f64.const 0
   f64.gt
   if
    local.get $i64toi32_i32$0
    f64.const 4294967296
    f64.div
    f64.floor
    f64.const 4294967296
    f64.const 1
    f64.sub
    f64.min
    i32.trunc_f64_u
    local.set $15
   else
    local.get $i64toi32_i32$0
    local.get $i64toi32_i32$0
    i32.trunc_f64_u
    f64.convert_i32_u
    f64.sub
    f64.const 4294967296
    f64.div
    f64.ceil
    i32.trunc_f64_u
    local.set $15
   end
   local.get $15
   local.set $12
  else
   i32.const 0
   local.set $12
  end
  local.get $12
  local.set $i64toi32_i32$6
  local.get $0$hi
  local.set $i64toi32_i32$6
  local.get $12
  local.set $i64toi32_i32$6
  local.get $i64toi32_i32$0
  i32.trunc_f64_u
  local.set $i64toi32_i32$1
  local.get $0$hi
  local.set $i64toi32_i32$3
  local.get $0
  local.set $i64toi32_i32$4
  local.get $i64toi32_i32$1
  local.get $i64toi32_i32$4
  i32.add
  local.set $i64toi32_i32$2
  local.get $i64toi32_i32$6
  local.get $0$hi
  i32.add
  local.set $i64toi32_i32$5
  local.get $i64toi32_i32$2
  local.get $i64toi32_i32$4
  i32.lt_u
  if
   local.get $i64toi32_i32$5
   i32.const 1
   i32.add
   local.set $i64toi32_i32$5
  end
  local.get $i64toi32_i32$2
  local.set $i64toi32_i32$1
  local.get $i64toi32_i32$5
  global.set $i64toi32_i32$HIGH_BITS
  local.get $i64toi32_i32$1
  return
 )
 (func $assembly/index/primeCheck (; 28 ;) (param $0 i32) (param $0$hi i32) (param $1 i32) (result i32)
  (local $i64toi32_i32$2 i32)
  (local $i64toi32_i32$1 i32)
  (local $i64toi32_i32$5 i32)
  (local $i64toi32_i32$0 i32)
  (local $i64toi32_i32$3 i32)
  (local $i64toi32_i32$4 i32)
  (local $i64toi32_i32$6 i32)
  (local $9 i32)
  (local $18$hi i32)
  (local $20 i32)
  (local $20$hi i32)
  (local $22$hi i32)
  local.get $0$hi
  local.set $i64toi32_i32$0
  local.get $0
  local.set $i64toi32_i32$2
  i32.const 0
  local.set $i64toi32_i32$1
  i32.const 1
  local.set $i64toi32_i32$3
  local.get $i64toi32_i32$2
  local.get $i64toi32_i32$3
  i32.eq
  local.get $i64toi32_i32$0
  local.get $i64toi32_i32$1
  i32.eq
  i32.and
  if
   i32.const 1
   local.set $9
  else
   local.get $0$hi
   local.set $i64toi32_i32$2
   local.get $0
   local.set $i64toi32_i32$3
   i32.const 0
   local.set $i64toi32_i32$0
   i32.const 3
   local.set $i64toi32_i32$1
   local.get $i64toi32_i32$3
   local.get $i64toi32_i32$1
   i32.eq
   local.get $i64toi32_i32$2
   local.get $i64toi32_i32$0
   i32.eq
   i32.and
   local.set $9
  end
  local.get $9
  if
   i32.const 1
   return
  else
   local.get $0$hi
   local.set $i64toi32_i32$3
   i32.const 0
   local.set $i64toi32_i32$2
   local.get $0
   local.get $i64toi32_i32$3
   i32.const 2
   local.get $i64toi32_i32$2
   call $__wasm_i64_urem
   local.set $i64toi32_i32$2
   global.get $i64toi32_i32$HIGH_BITS
   local.set $i64toi32_i32$3
   local.get $i64toi32_i32$2
   local.set $i64toi32_i32$1
   i32.const 0
   local.set $i64toi32_i32$2
   i32.const 0
   local.set $i64toi32_i32$0
   local.get $i64toi32_i32$1
   local.get $i64toi32_i32$0
   i32.eq
   local.get $i64toi32_i32$3
   local.get $i64toi32_i32$2
   i32.eq
   i32.and
   if
    i32.const 0
    return
   end
  end
  loop $while-continue|0
   local.get $1
   i32.const 0
   i32.gt_s
   if
    local.get $0$hi
    local.set $i64toi32_i32$1
    local.get $0
    local.set $i64toi32_i32$0
    i32.const 0
    local.set $i64toi32_i32$3
    i32.const 2
    local.set $i64toi32_i32$2
    local.get $i64toi32_i32$0
    local.get $i64toi32_i32$2
    i32.sub
    local.set $i64toi32_i32$4
    local.get $i64toi32_i32$0
    local.get $i64toi32_i32$2
    i32.lt_u
    local.set $i64toi32_i32$6
    local.get $i64toi32_i32$6
    local.get $i64toi32_i32$3
    i32.add
    local.set $i64toi32_i32$5
    local.get $i64toi32_i32$1
    local.get $i64toi32_i32$5
    i32.sub
    local.set $i64toi32_i32$5
    local.get $i64toi32_i32$5
    local.set $18$hi
    i32.const 0
    local.set $i64toi32_i32$5
    local.get $18$hi
    local.set $i64toi32_i32$0
    i32.const 2
    local.get $i64toi32_i32$5
    local.get $i64toi32_i32$4
    local.get $i64toi32_i32$0
    call $assembly/index/rng_gen_range
    local.set $i64toi32_i32$0
    global.get $i64toi32_i32$HIGH_BITS
    local.set $i64toi32_i32$5
    local.get $i64toi32_i32$0
    local.set $20
    local.get $i64toi32_i32$5
    local.set $20$hi
    local.get $i64toi32_i32$1
    local.set $i64toi32_i32$5
    local.get $i64toi32_i32$1
    local.set $i64toi32_i32$5
    local.get $0
    local.set $i64toi32_i32$1
    i32.const 0
    local.set $i64toi32_i32$0
    i32.const 1
    local.set $i64toi32_i32$2
    local.get $i64toi32_i32$1
    local.get $i64toi32_i32$2
    i32.sub
    local.set $i64toi32_i32$3
    local.get $i64toi32_i32$1
    local.get $i64toi32_i32$2
    i32.lt_u
    local.set $i64toi32_i32$6
    local.get $i64toi32_i32$6
    local.get $i64toi32_i32$0
    i32.add
    local.set $i64toi32_i32$4
    local.get $i64toi32_i32$5
    local.get $i64toi32_i32$4
    i32.sub
    local.set $i64toi32_i32$4
    local.get $i64toi32_i32$4
    local.set $22$hi
    local.get $i64toi32_i32$5
    local.set $i64toi32_i32$4
    local.get $20$hi
    local.set $i64toi32_i32$4
    local.get $22$hi
    local.set $i64toi32_i32$1
    local.get $20
    local.get $i64toi32_i32$4
    local.get $i64toi32_i32$3
    local.get $i64toi32_i32$1
    local.get $0
    local.get $i64toi32_i32$5
    call $assembly/index/modpow
    local.set $i64toi32_i32$5
    global.get $i64toi32_i32$HIGH_BITS
    local.set $i64toi32_i32$1
    local.get $i64toi32_i32$5
    local.set $i64toi32_i32$4
    i32.const 0
    local.set $i64toi32_i32$5
    i32.const 1
    local.set $i64toi32_i32$2
    local.get $i64toi32_i32$4
    local.get $i64toi32_i32$2
    i32.ne
    local.get $i64toi32_i32$1
    local.get $i64toi32_i32$5
    i32.ne
    i32.or
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
  return
 )
 (func $~lib/rt/pure/__collect (; 29 ;)
  return
 )
 (func $~lib/rt/tlsf/freeBlock (; 30 ;) (param $0 i32) (param $1 i32)
  local.get $1
  local.get $1
  i32.load
  i32.const 1
  i32.or
  i32.store
  local.get $0
  local.get $1
  call $~lib/rt/tlsf/insertBlock
 )
 (func $~lib/rt/pure/decrement (; 31 ;) (param $0 i32)
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
  i32.eqz
  i32.eqz
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
   i32.const 1
   call $~lib/rt/__visit_members
   local.get $1
   i32.const -2147483648
   i32.and
   i32.eqz
   i32.eqz
   if
    i32.const 0
    i32.const 144
    i32.const 126
    i32.const 17
    call $~lib/builtins/abort
    unreachable
   end
   global.get $~lib/rt/tlsf/ROOT
   local.get $0
   call $~lib/rt/tlsf/freeBlock
  else
   local.get $2
   i32.const 0
   i32.gt_u
   i32.eqz
   if
    i32.const 0
    i32.const 144
    i32.const 136
    i32.const 15
    call $~lib/builtins/abort
    unreachable
   end
   local.get $0
   local.get $1
   i32.const 268435455
   i32.const -1
   i32.xor
   i32.and
   local.get $2
   i32.const 1
   i32.sub
   i32.or
   i32.store offset=4
  end
 )
 (func $~lib/rt/pure/__visit (; 32 ;) (param $0 i32) (param $1 i32)
  local.get $0
  global.get $~lib/heap/__heap_base
  i32.lt_u
  if
   return
  end
  local.get $1
  i32.const 1
  i32.eq
  i32.eqz
  if
   i32.const 0
   i32.const 144
   i32.const 69
   i32.const 15
   call $~lib/builtins/abort
   unreachable
  end
  local.get $0
  i32.const 16
  i32.sub
  call $~lib/rt/pure/decrement
 )
 (func $~lib/rt/__visit_members (; 33 ;) (param $0 i32) (param $1 i32)
  (local $2 i32)
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
 (func $legalstub$assembly/index/modpow (; 34 ;) (param $0 i32) (param $1 i32) (param $2 i32) (param $3 i32) (param $4 i32) (param $5 i32) (result i32)
  (local $i64toi32_i32$2 i32)
  (local $i64toi32_i32$1 i32)
  (local $i64toi32_i32$0 i32)
  (local $i64toi32_i32$4 i32)
  (local $i64toi32_i32$3 i32)
  (local $28 i32)
  (local $29 i32)
  (local $30 i32)
  (local $31 i32)
  (local $8 i32)
  (local $8$hi i32)
  (local $11$hi i32)
  (local $12 i32)
  (local $12$hi i32)
  (local $14 i32)
  (local $14$hi i32)
  (local $17$hi i32)
  (local $18 i32)
  (local $18$hi i32)
  (local $20 i32)
  (local $20$hi i32)
  (local $23$hi i32)
  (local $24 i32)
  (local $24$hi i32)
  (local $6 i32)
  (local $6$hi i32)
  i32.const 0
  local.set $i64toi32_i32$0
  local.get $0
  local.set $8
  local.get $i64toi32_i32$0
  local.set $8$hi
  i32.const 0
  local.set $i64toi32_i32$0
  local.get $1
  local.set $i64toi32_i32$2
  i32.const 0
  local.set $i64toi32_i32$1
  i32.const 32
  local.set $i64toi32_i32$3
  local.get $i64toi32_i32$3
  i32.const 31
  i32.and
  local.set $i64toi32_i32$4
  i32.const 32
  local.get $i64toi32_i32$3
  i32.const 63
  i32.and
  i32.le_u
  if
   local.get $i64toi32_i32$2
   local.get $i64toi32_i32$4
   i32.shl
   local.set $i64toi32_i32$1
   i32.const 0
   local.set $28
  else
   i32.const 1
   local.get $i64toi32_i32$4
   i32.shl
   i32.const 1
   i32.sub
   local.get $i64toi32_i32$2
   i32.const 32
   local.get $i64toi32_i32$4
   i32.sub
   i32.shr_u
   i32.and
   local.get $i64toi32_i32$0
   local.get $i64toi32_i32$4
   i32.shl
   i32.or
   local.set $i64toi32_i32$1
   local.get $i64toi32_i32$2
   local.get $i64toi32_i32$4
   i32.shl
   local.set $28
  end
  local.get $i64toi32_i32$1
  local.set $11$hi
  local.get $8$hi
  local.set $i64toi32_i32$1
  local.get $8
  local.set $i64toi32_i32$0
  local.get $11$hi
  local.set $i64toi32_i32$2
  local.get $28
  local.set $i64toi32_i32$3
  local.get $i64toi32_i32$1
  local.get $i64toi32_i32$2
  i32.or
  local.set $i64toi32_i32$2
  local.get $i64toi32_i32$0
  local.get $i64toi32_i32$3
  i32.or
  local.set $12
  local.get $i64toi32_i32$2
  local.set $12$hi
  i32.const 0
  local.set $i64toi32_i32$2
  local.get $2
  local.set $14
  local.get $i64toi32_i32$2
  local.set $14$hi
  i32.const 0
  local.set $i64toi32_i32$2
  local.get $3
  local.set $i64toi32_i32$1
  i32.const 0
  local.set $i64toi32_i32$0
  i32.const 32
  local.set $i64toi32_i32$3
  local.get $i64toi32_i32$3
  i32.const 31
  i32.and
  local.set $i64toi32_i32$4
  i32.const 32
  local.get $i64toi32_i32$3
  i32.const 63
  i32.and
  i32.le_u
  if
   local.get $i64toi32_i32$1
   local.get $i64toi32_i32$4
   i32.shl
   local.set $i64toi32_i32$0
   i32.const 0
   local.set $29
  else
   i32.const 1
   local.get $i64toi32_i32$4
   i32.shl
   i32.const 1
   i32.sub
   local.get $i64toi32_i32$1
   i32.const 32
   local.get $i64toi32_i32$4
   i32.sub
   i32.shr_u
   i32.and
   local.get $i64toi32_i32$2
   local.get $i64toi32_i32$4
   i32.shl
   i32.or
   local.set $i64toi32_i32$0
   local.get $i64toi32_i32$1
   local.get $i64toi32_i32$4
   i32.shl
   local.set $29
  end
  local.get $i64toi32_i32$0
  local.set $17$hi
  local.get $14$hi
  local.set $i64toi32_i32$0
  local.get $14
  local.set $i64toi32_i32$2
  local.get $17$hi
  local.set $i64toi32_i32$1
  local.get $29
  local.set $i64toi32_i32$3
  local.get $i64toi32_i32$0
  local.get $i64toi32_i32$1
  i32.or
  local.set $i64toi32_i32$1
  local.get $i64toi32_i32$2
  local.get $i64toi32_i32$3
  i32.or
  local.set $18
  local.get $i64toi32_i32$1
  local.set $18$hi
  i32.const 0
  local.set $i64toi32_i32$1
  local.get $4
  local.set $20
  local.get $i64toi32_i32$1
  local.set $20$hi
  i32.const 0
  local.set $i64toi32_i32$1
  local.get $5
  local.set $i64toi32_i32$0
  i32.const 0
  local.set $i64toi32_i32$2
  i32.const 32
  local.set $i64toi32_i32$3
  local.get $i64toi32_i32$3
  i32.const 31
  i32.and
  local.set $i64toi32_i32$4
  i32.const 32
  local.get $i64toi32_i32$3
  i32.const 63
  i32.and
  i32.le_u
  if
   local.get $i64toi32_i32$0
   local.get $i64toi32_i32$4
   i32.shl
   local.set $i64toi32_i32$2
   i32.const 0
   local.set $30
  else
   i32.const 1
   local.get $i64toi32_i32$4
   i32.shl
   i32.const 1
   i32.sub
   local.get $i64toi32_i32$0
   i32.const 32
   local.get $i64toi32_i32$4
   i32.sub
   i32.shr_u
   i32.and
   local.get $i64toi32_i32$1
   local.get $i64toi32_i32$4
   i32.shl
   i32.or
   local.set $i64toi32_i32$2
   local.get $i64toi32_i32$0
   local.get $i64toi32_i32$4
   i32.shl
   local.set $30
  end
  local.get $i64toi32_i32$2
  local.set $23$hi
  local.get $20$hi
  local.set $i64toi32_i32$2
  local.get $20
  local.set $i64toi32_i32$1
  local.get $23$hi
  local.set $i64toi32_i32$0
  local.get $30
  local.set $i64toi32_i32$3
  local.get $i64toi32_i32$2
  local.get $i64toi32_i32$0
  i32.or
  local.set $i64toi32_i32$0
  local.get $i64toi32_i32$1
  local.get $i64toi32_i32$3
  i32.or
  local.set $24
  local.get $i64toi32_i32$0
  local.set $24$hi
  local.get $12$hi
  local.set $i64toi32_i32$0
  local.get $18$hi
  local.set $i64toi32_i32$1
  local.get $24$hi
  local.set $i64toi32_i32$2
  local.get $12
  local.get $i64toi32_i32$0
  local.get $18
  local.get $i64toi32_i32$1
  local.get $24
  local.get $i64toi32_i32$2
  call $assembly/index/modpow
  local.set $i64toi32_i32$2
  global.get $i64toi32_i32$HIGH_BITS
  local.set $i64toi32_i32$1
  local.get $i64toi32_i32$2
  local.set $6
  local.get $i64toi32_i32$1
  local.set $6$hi
  local.get $i64toi32_i32$2
  local.set $i64toi32_i32$0
  i32.const 0
  local.set $i64toi32_i32$2
  i32.const 32
  local.set $i64toi32_i32$3
  local.get $i64toi32_i32$3
  i32.const 31
  i32.and
  local.set $i64toi32_i32$4
  i32.const 32
  local.get $i64toi32_i32$3
  i32.const 63
  i32.and
  i32.le_u
  if
   i32.const 0
   local.set $i64toi32_i32$2
   local.get $i64toi32_i32$1
   local.get $i64toi32_i32$4
   i32.shr_u
   local.set $31
  else
   local.get $i64toi32_i32$1
   local.get $i64toi32_i32$4
   i32.shr_u
   local.set $i64toi32_i32$2
   i32.const 1
   local.get $i64toi32_i32$4
   i32.shl
   i32.const 1
   i32.sub
   local.get $i64toi32_i32$1
   i32.and
   i32.const 32
   local.get $i64toi32_i32$4
   i32.sub
   i32.shl
   local.get $i64toi32_i32$0
   local.get $i64toi32_i32$4
   i32.shr_u
   i32.or
   local.set $31
  end
  local.get $31
  call $setTempRet0
  local.get $6$hi
  local.set $i64toi32_i32$2
  local.get $6
  return
 )
 (func $legalstub$assembly/index/rng_gen_range (; 35 ;) (param $0 i32) (param $1 i32) (param $2 i32) (param $3 i32) (result i32)
  (local $i64toi32_i32$2 i32)
  (local $i64toi32_i32$1 i32)
  (local $i64toi32_i32$4 i32)
  (local $i64toi32_i32$0 i32)
  (local $i64toi32_i32$3 i32)
  (local $21 i32)
  (local $22 i32)
  (local $23 i32)
  (local $6 i32)
  (local $6$hi i32)
  (local $9$hi i32)
  (local $10 i32)
  (local $10$hi i32)
  (local $12 i32)
  (local $12$hi i32)
  (local $15$hi i32)
  (local $16 i32)
  (local $16$hi i32)
  (local $4 i32)
  (local $4$hi i32)
  i32.const 0
  local.set $i64toi32_i32$0
  local.get $0
  local.set $6
  local.get $i64toi32_i32$0
  local.set $6$hi
  i32.const 0
  local.set $i64toi32_i32$0
  local.get $1
  local.set $i64toi32_i32$2
  i32.const 0
  local.set $i64toi32_i32$1
  i32.const 32
  local.set $i64toi32_i32$3
  local.get $i64toi32_i32$3
  i32.const 31
  i32.and
  local.set $i64toi32_i32$4
  i32.const 32
  local.get $i64toi32_i32$3
  i32.const 63
  i32.and
  i32.le_u
  if
   local.get $i64toi32_i32$2
   local.get $i64toi32_i32$4
   i32.shl
   local.set $i64toi32_i32$1
   i32.const 0
   local.set $21
  else
   i32.const 1
   local.get $i64toi32_i32$4
   i32.shl
   i32.const 1
   i32.sub
   local.get $i64toi32_i32$2
   i32.const 32
   local.get $i64toi32_i32$4
   i32.sub
   i32.shr_u
   i32.and
   local.get $i64toi32_i32$0
   local.get $i64toi32_i32$4
   i32.shl
   i32.or
   local.set $i64toi32_i32$1
   local.get $i64toi32_i32$2
   local.get $i64toi32_i32$4
   i32.shl
   local.set $21
  end
  local.get $i64toi32_i32$1
  local.set $9$hi
  local.get $6$hi
  local.set $i64toi32_i32$1
  local.get $6
  local.set $i64toi32_i32$0
  local.get $9$hi
  local.set $i64toi32_i32$2
  local.get $21
  local.set $i64toi32_i32$3
  local.get $i64toi32_i32$1
  local.get $i64toi32_i32$2
  i32.or
  local.set $i64toi32_i32$2
  local.get $i64toi32_i32$0
  local.get $i64toi32_i32$3
  i32.or
  local.set $10
  local.get $i64toi32_i32$2
  local.set $10$hi
  i32.const 0
  local.set $i64toi32_i32$2
  local.get $2
  local.set $12
  local.get $i64toi32_i32$2
  local.set $12$hi
  i32.const 0
  local.set $i64toi32_i32$2
  local.get $3
  local.set $i64toi32_i32$1
  i32.const 0
  local.set $i64toi32_i32$0
  i32.const 32
  local.set $i64toi32_i32$3
  local.get $i64toi32_i32$3
  i32.const 31
  i32.and
  local.set $i64toi32_i32$4
  i32.const 32
  local.get $i64toi32_i32$3
  i32.const 63
  i32.and
  i32.le_u
  if
   local.get $i64toi32_i32$1
   local.get $i64toi32_i32$4
   i32.shl
   local.set $i64toi32_i32$0
   i32.const 0
   local.set $22
  else
   i32.const 1
   local.get $i64toi32_i32$4
   i32.shl
   i32.const 1
   i32.sub
   local.get $i64toi32_i32$1
   i32.const 32
   local.get $i64toi32_i32$4
   i32.sub
   i32.shr_u
   i32.and
   local.get $i64toi32_i32$2
   local.get $i64toi32_i32$4
   i32.shl
   i32.or
   local.set $i64toi32_i32$0
   local.get $i64toi32_i32$1
   local.get $i64toi32_i32$4
   i32.shl
   local.set $22
  end
  local.get $i64toi32_i32$0
  local.set $15$hi
  local.get $12$hi
  local.set $i64toi32_i32$0
  local.get $12
  local.set $i64toi32_i32$2
  local.get $15$hi
  local.set $i64toi32_i32$1
  local.get $22
  local.set $i64toi32_i32$3
  local.get $i64toi32_i32$0
  local.get $i64toi32_i32$1
  i32.or
  local.set $i64toi32_i32$1
  local.get $i64toi32_i32$2
  local.get $i64toi32_i32$3
  i32.or
  local.set $16
  local.get $i64toi32_i32$1
  local.set $16$hi
  local.get $10$hi
  local.set $i64toi32_i32$1
  local.get $16$hi
  local.set $i64toi32_i32$2
  local.get $10
  local.get $i64toi32_i32$1
  local.get $16
  local.get $i64toi32_i32$2
  call $assembly/index/rng_gen_range
  local.set $i64toi32_i32$2
  global.get $i64toi32_i32$HIGH_BITS
  local.set $i64toi32_i32$1
  local.get $i64toi32_i32$2
  local.set $4
  local.get $i64toi32_i32$1
  local.set $4$hi
  local.get $i64toi32_i32$2
  local.set $i64toi32_i32$0
  i32.const 0
  local.set $i64toi32_i32$2
  i32.const 32
  local.set $i64toi32_i32$3
  local.get $i64toi32_i32$3
  i32.const 31
  i32.and
  local.set $i64toi32_i32$4
  i32.const 32
  local.get $i64toi32_i32$3
  i32.const 63
  i32.and
  i32.le_u
  if
   i32.const 0
   local.set $i64toi32_i32$2
   local.get $i64toi32_i32$1
   local.get $i64toi32_i32$4
   i32.shr_u
   local.set $23
  else
   local.get $i64toi32_i32$1
   local.get $i64toi32_i32$4
   i32.shr_u
   local.set $i64toi32_i32$2
   i32.const 1
   local.get $i64toi32_i32$4
   i32.shl
   i32.const 1
   i32.sub
   local.get $i64toi32_i32$1
   i32.and
   i32.const 32
   local.get $i64toi32_i32$4
   i32.sub
   i32.shl
   local.get $i64toi32_i32$0
   local.get $i64toi32_i32$4
   i32.shr_u
   i32.or
   local.set $23
  end
  local.get $23
  call $setTempRet0
  local.get $4$hi
  local.set $i64toi32_i32$2
  local.get $4
  return
 )
 (func $legalstub$assembly/index/primeCheck (; 36 ;) (param $0 i32) (param $1 i32) (param $2 i32) (result i32)
  (local $i64toi32_i32$2 i32)
  (local $i64toi32_i32$0 i32)
  (local $i64toi32_i32$1 i32)
  (local $i64toi32_i32$4 i32)
  (local $i64toi32_i32$3 i32)
  (local $11 i32)
  (local $4 i32)
  (local $4$hi i32)
  (local $7$hi i32)
  i32.const 0
  local.set $i64toi32_i32$0
  local.get $0
  local.set $4
  local.get $i64toi32_i32$0
  local.set $4$hi
  i32.const 0
  local.set $i64toi32_i32$0
  local.get $1
  local.set $i64toi32_i32$2
  i32.const 0
  local.set $i64toi32_i32$1
  i32.const 32
  local.set $i64toi32_i32$3
  local.get $i64toi32_i32$3
  i32.const 31
  i32.and
  local.set $i64toi32_i32$4
  i32.const 32
  local.get $i64toi32_i32$3
  i32.const 63
  i32.and
  i32.le_u
  if
   local.get $i64toi32_i32$2
   local.get $i64toi32_i32$4
   i32.shl
   local.set $i64toi32_i32$1
   i32.const 0
   local.set $11
  else
   i32.const 1
   local.get $i64toi32_i32$4
   i32.shl
   i32.const 1
   i32.sub
   local.get $i64toi32_i32$2
   i32.const 32
   local.get $i64toi32_i32$4
   i32.sub
   i32.shr_u
   i32.and
   local.get $i64toi32_i32$0
   local.get $i64toi32_i32$4
   i32.shl
   i32.or
   local.set $i64toi32_i32$1
   local.get $i64toi32_i32$2
   local.get $i64toi32_i32$4
   i32.shl
   local.set $11
  end
  local.get $i64toi32_i32$1
  local.set $7$hi
  local.get $4$hi
  local.set $i64toi32_i32$1
  local.get $4
  local.set $i64toi32_i32$0
  local.get $7$hi
  local.set $i64toi32_i32$2
  local.get $11
  local.set $i64toi32_i32$3
  local.get $i64toi32_i32$1
  local.get $i64toi32_i32$2
  i32.or
  local.set $i64toi32_i32$2
  local.get $i64toi32_i32$0
  local.get $i64toi32_i32$3
  i32.or
  local.get $i64toi32_i32$2
  local.get $2
  call $assembly/index/primeCheck
  return
 )
 (func $legalfunc$wasm2js_scratch_load_i64 (; 37 ;) (result i32)
  (local $i64toi32_i32$0 i32)
  (local $i64toi32_i32$2 i32)
  (local $i64toi32_i32$1 i32)
  (local $i64toi32_i32$4 i32)
  (local $i64toi32_i32$3 i32)
  (local $10 i32)
  (local $0 i32)
  (local $1 i32)
  (local $1$hi i32)
  (local $2 i32)
  (local $4$hi i32)
  call $legalimport$wasm2js_scratch_load_i64
  local.set $0
  i32.const 0
  local.set $i64toi32_i32$0
  local.get $0
  local.set $1
  local.get $i64toi32_i32$0
  local.set $1$hi
  call $getTempRet0
  local.set $2
  i32.const 0
  local.set $i64toi32_i32$0
  local.get $2
  local.set $i64toi32_i32$2
  i32.const 0
  local.set $i64toi32_i32$1
  i32.const 32
  local.set $i64toi32_i32$3
  local.get $i64toi32_i32$3
  i32.const 31
  i32.and
  local.set $i64toi32_i32$4
  i32.const 32
  local.get $i64toi32_i32$3
  i32.const 63
  i32.and
  i32.le_u
  if
   local.get $i64toi32_i32$2
   local.get $i64toi32_i32$4
   i32.shl
   local.set $i64toi32_i32$1
   i32.const 0
   local.set $10
  else
   i32.const 1
   local.get $i64toi32_i32$4
   i32.shl
   i32.const 1
   i32.sub
   local.get $i64toi32_i32$2
   i32.const 32
   local.get $i64toi32_i32$4
   i32.sub
   i32.shr_u
   i32.and
   local.get $i64toi32_i32$0
   local.get $i64toi32_i32$4
   i32.shl
   i32.or
   local.set $i64toi32_i32$1
   local.get $i64toi32_i32$2
   local.get $i64toi32_i32$4
   i32.shl
   local.set $10
  end
  local.get $i64toi32_i32$1
  local.set $4$hi
  local.get $1$hi
  local.set $i64toi32_i32$1
  local.get $1
  local.set $i64toi32_i32$0
  local.get $4$hi
  local.set $i64toi32_i32$2
  local.get $10
  local.set $i64toi32_i32$3
  local.get $i64toi32_i32$1
  local.get $i64toi32_i32$2
  i32.or
  local.set $i64toi32_i32$2
  local.get $i64toi32_i32$0
  local.get $i64toi32_i32$3
  i32.or
  local.set $i64toi32_i32$0
  local.get $i64toi32_i32$2
  global.set $i64toi32_i32$HIGH_BITS
  local.get $i64toi32_i32$0
  return
 )
 (func $legalfunc$wasm2js_scratch_store_i64 (; 38 ;) (param $0 i32) (param $0$hi i32)
  (local $i64toi32_i32$4 i32)
  (local $i64toi32_i32$0 i32)
  (local $i64toi32_i32$1 i32)
  (local $i64toi32_i32$3 i32)
  (local $8 i32)
  (local $2 i32)
  (local $i64toi32_i32$2 i32)
  local.get $0$hi
  local.set $i64toi32_i32$0
  local.get $0
  local.set $2
  local.get $0
  local.set $i64toi32_i32$2
  i32.const 0
  local.set $i64toi32_i32$1
  i32.const 32
  local.set $i64toi32_i32$3
  local.get $i64toi32_i32$3
  i32.const 31
  i32.and
  local.set $i64toi32_i32$4
  i32.const 32
  local.get $i64toi32_i32$3
  i32.const 63
  i32.and
  i32.le_u
  if
   i32.const 0
   local.set $i64toi32_i32$1
   local.get $i64toi32_i32$0
   local.get $i64toi32_i32$4
   i32.shr_u
   local.set $8
  else
   local.get $i64toi32_i32$0
   local.get $i64toi32_i32$4
   i32.shr_u
   local.set $i64toi32_i32$1
   i32.const 1
   local.get $i64toi32_i32$4
   i32.shl
   i32.const 1
   i32.sub
   local.get $i64toi32_i32$0
   i32.and
   i32.const 32
   local.get $i64toi32_i32$4
   i32.sub
   i32.shl
   local.get $i64toi32_i32$2
   local.get $i64toi32_i32$4
   i32.shr_u
   i32.or
   local.set $8
  end
  local.get $2
  local.get $8
  call $legalimport$wasm2js_scratch_store_i64
 )
 (func $_ZN17compiler_builtins3int3mul3Mul3mul17h070e9a1c69faec5bE (; 39 ;) (param $var$0 i32) (param $var$0$hi i32) (param $var$1 i32) (param $var$1$hi i32) (result i32)
  (local $i64toi32_i32$4 i32)
  (local $i64toi32_i32$0 i32)
  (local $i64toi32_i32$1 i32)
  (local $var$2 i32)
  (local $i64toi32_i32$2 i32)
  (local $i64toi32_i32$3 i32)
  (local $var$3 i32)
  (local $var$4 i32)
  (local $var$5 i32)
  (local $21 i32)
  (local $22 i32)
  (local $var$6 i32)
  (local $24 i32)
  (local $17 i32)
  (local $18 i32)
  (local $23 i32)
  (local $29 i32)
  (local $45 i32)
  (local $56$hi i32)
  (local $62$hi i32)
  local.get $var$1$hi
  local.set $i64toi32_i32$0
  local.get $var$1
  local.set $var$2
  local.get $var$2
  i32.const 16
  i32.shr_u
  local.set $var$4
  local.get $var$0$hi
  local.set $i64toi32_i32$0
  local.get $var$0
  local.set $var$3
  local.get $var$3
  i32.const 16
  i32.shr_u
  local.set $var$5
  local.get $var$4
  local.get $var$5
  i32.mul
  local.set $17
  local.get $var$2
  local.set $18
  local.get $var$3
  local.set $i64toi32_i32$2
  i32.const 0
  local.set $i64toi32_i32$1
  i32.const 32
  local.set $i64toi32_i32$3
  local.get $i64toi32_i32$3
  i32.const 31
  i32.and
  local.set $i64toi32_i32$4
  i32.const 32
  local.get $i64toi32_i32$3
  i32.const 63
  i32.and
  i32.le_u
  if
   i32.const 0
   local.set $i64toi32_i32$1
   local.get $i64toi32_i32$0
   local.get $i64toi32_i32$4
   i32.shr_u
   local.set $21
  else
   local.get $i64toi32_i32$0
   local.get $i64toi32_i32$4
   i32.shr_u
   local.set $i64toi32_i32$1
   i32.const 1
   local.get $i64toi32_i32$4
   i32.shl
   i32.const 1
   i32.sub
   local.get $i64toi32_i32$0
   i32.and
   i32.const 32
   local.get $i64toi32_i32$4
   i32.sub
   i32.shl
   local.get $i64toi32_i32$2
   local.get $i64toi32_i32$4
   i32.shr_u
   i32.or
   local.set $21
  end
  local.get $17
  local.get $18
  local.get $21
  i32.mul
  i32.add
  local.set $23
  local.get $var$1$hi
  local.set $i64toi32_i32$1
  local.get $var$1
  local.set $i64toi32_i32$0
  i32.const 0
  local.set $i64toi32_i32$2
  i32.const 32
  local.set $i64toi32_i32$3
  local.get $i64toi32_i32$3
  i32.const 31
  i32.and
  local.set $i64toi32_i32$4
  i32.const 32
  local.get $i64toi32_i32$3
  i32.const 63
  i32.and
  i32.le_u
  if
   i32.const 0
   local.set $i64toi32_i32$2
   local.get $i64toi32_i32$1
   local.get $i64toi32_i32$4
   i32.shr_u
   local.set $22
  else
   local.get $i64toi32_i32$1
   local.get $i64toi32_i32$4
   i32.shr_u
   local.set $i64toi32_i32$2
   i32.const 1
   local.get $i64toi32_i32$4
   i32.shl
   i32.const 1
   i32.sub
   local.get $i64toi32_i32$1
   i32.and
   i32.const 32
   local.get $i64toi32_i32$4
   i32.sub
   i32.shl
   local.get $i64toi32_i32$0
   local.get $i64toi32_i32$4
   i32.shr_u
   i32.or
   local.set $22
  end
  local.get $23
  local.get $22
  local.get $var$3
  i32.mul
  i32.add
  local.set $29
  local.get $var$2
  i32.const 65535
  i32.and
  local.set $var$2
  local.get $var$3
  i32.const 65535
  i32.and
  local.set $var$3
  local.get $var$2
  local.get $var$3
  i32.mul
  local.set $var$6
  local.get $var$6
  i32.const 16
  i32.shr_u
  local.get $var$2
  local.get $var$5
  i32.mul
  i32.add
  local.set $var$2
  local.get $29
  local.get $var$2
  i32.const 16
  i32.shr_u
  i32.add
  local.set $45
  local.get $var$2
  i32.const 65535
  i32.and
  local.get $var$4
  local.get $var$3
  i32.mul
  i32.add
  local.set $var$2
  i32.const 0
  local.set $i64toi32_i32$2
  local.get $45
  local.get $var$2
  i32.const 16
  i32.shr_u
  i32.add
  local.set $i64toi32_i32$1
  i32.const 0
  local.set $i64toi32_i32$0
  i32.const 32
  local.set $i64toi32_i32$3
  local.get $i64toi32_i32$3
  i32.const 31
  i32.and
  local.set $i64toi32_i32$4
  i32.const 32
  local.get $i64toi32_i32$3
  i32.const 63
  i32.and
  i32.le_u
  if
   local.get $i64toi32_i32$1
   local.get $i64toi32_i32$4
   i32.shl
   local.set $i64toi32_i32$0
   i32.const 0
   local.set $24
  else
   i32.const 1
   local.get $i64toi32_i32$4
   i32.shl
   i32.const 1
   i32.sub
   local.get $i64toi32_i32$1
   i32.const 32
   local.get $i64toi32_i32$4
   i32.sub
   i32.shr_u
   i32.and
   local.get $i64toi32_i32$2
   local.get $i64toi32_i32$4
   i32.shl
   i32.or
   local.set $i64toi32_i32$0
   local.get $i64toi32_i32$1
   local.get $i64toi32_i32$4
   i32.shl
   local.set $24
  end
  local.get $i64toi32_i32$0
  local.set $56$hi
  i32.const 0
  local.set $i64toi32_i32$0
  local.get $i64toi32_i32$0
  local.set $62$hi
  local.get $56$hi
  local.set $i64toi32_i32$0
  local.get $24
  local.set $i64toi32_i32$2
  local.get $62$hi
  local.set $i64toi32_i32$1
  local.get $var$2
  i32.const 16
  i32.shl
  local.get $var$6
  i32.const 65535
  i32.and
  i32.or
  local.set $i64toi32_i32$3
  local.get $i64toi32_i32$0
  local.get $i64toi32_i32$1
  i32.or
  local.set $i64toi32_i32$1
  local.get $i64toi32_i32$2
  local.get $i64toi32_i32$3
  i32.or
  local.set $i64toi32_i32$2
  local.get $i64toi32_i32$1
  global.set $i64toi32_i32$HIGH_BITS
  local.get $i64toi32_i32$2
  return
 )
 (func $_ZN17compiler_builtins3int4udiv10divmod_u6417h6026910b5ed08e40E (; 40 ;) (param $var$0 i32) (param $var$0$hi i32) (param $var$1 i32) (param $var$1$hi i32) (result i32)
  (local $i64toi32_i32$2 i32)
  (local $i64toi32_i32$3 i32)
  (local $i64toi32_i32$4 i32)
  (local $i64toi32_i32$1 i32)
  (local $i64toi32_i32$0 i32)
  (local $i64toi32_i32$5 i32)
  (local $var$2 i32)
  (local $var$3 i32)
  (local $var$4 i32)
  (local $var$5 i32)
  (local $var$5$hi i32)
  (local $var$6 i32)
  (local $var$6$hi i32)
  (local $i64toi32_i32$6 i32)
  (local $39 i32)
  (local $40 i32)
  (local $41 i32)
  (local $42 i32)
  (local $43 i32)
  (local $44 i32)
  (local $45 i32)
  (local $46 i32)
  (local $var$8$hi i32)
  (local $47 i32)
  (local $48 i32)
  (local $49 i32)
  (local $50 i32)
  (local $var$7$hi i32)
  (local $51 i32)
  (local $63$hi i32)
  (local $65 i32)
  (local $65$hi i32)
  (local $70 i32)
  (local $119 i32)
  (local $120$hi i32)
  (local $129$hi i32)
  (local $134$hi i32)
  (local $var$8 i32)
  (local $140 i32)
  (local $140$hi i32)
  (local $142$hi i32)
  (local $144 i32)
  (local $144$hi i32)
  (local $151 i32)
  (local $151$hi i32)
  (local $154$hi i32)
  (local $var$7 i32)
  (local $165$hi i32)
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
            local.get $var$0$hi
            local.set $i64toi32_i32$0
            local.get $var$0
            local.set $i64toi32_i32$2
            i32.const 0
            local.set $i64toi32_i32$1
            i32.const 32
            local.set $i64toi32_i32$3
            local.get $i64toi32_i32$3
            i32.const 31
            i32.and
            local.set $i64toi32_i32$4
            i32.const 32
            local.get $i64toi32_i32$3
            i32.const 63
            i32.and
            i32.le_u
            if
             i32.const 0
             local.set $i64toi32_i32$1
             local.get $i64toi32_i32$0
             local.get $i64toi32_i32$4
             i32.shr_u
             local.set $39
            else
             local.get $i64toi32_i32$0
             local.get $i64toi32_i32$4
             i32.shr_u
             local.set $i64toi32_i32$1
             i32.const 1
             local.get $i64toi32_i32$4
             i32.shl
             i32.const 1
             i32.sub
             local.get $i64toi32_i32$0
             i32.and
             i32.const 32
             local.get $i64toi32_i32$4
             i32.sub
             i32.shl
             local.get $i64toi32_i32$2
             local.get $i64toi32_i32$4
             i32.shr_u
             i32.or
             local.set $39
            end
            local.get $39
            local.set $var$2
            local.get $var$2
            if
             local.get $var$1$hi
             local.set $i64toi32_i32$1
             local.get $var$1
             local.set $var$3
             local.get $var$3
             i32.eqz
             br_if $label$11
             local.get $var$1$hi
             local.set $i64toi32_i32$1
             local.get $var$1
             local.set $i64toi32_i32$0
             i32.const 0
             local.set $i64toi32_i32$2
             i32.const 32
             local.set $i64toi32_i32$3
             local.get $i64toi32_i32$3
             i32.const 31
             i32.and
             local.set $i64toi32_i32$4
             i32.const 32
             local.get $i64toi32_i32$3
             i32.const 63
             i32.and
             i32.le_u
             if
              i32.const 0
              local.set $i64toi32_i32$2
              local.get $i64toi32_i32$1
              local.get $i64toi32_i32$4
              i32.shr_u
              local.set $40
             else
              local.get $i64toi32_i32$1
              local.get $i64toi32_i32$4
              i32.shr_u
              local.set $i64toi32_i32$2
              i32.const 1
              local.get $i64toi32_i32$4
              i32.shl
              i32.const 1
              i32.sub
              local.get $i64toi32_i32$1
              i32.and
              i32.const 32
              local.get $i64toi32_i32$4
              i32.sub
              i32.shl
              local.get $i64toi32_i32$0
              local.get $i64toi32_i32$4
              i32.shr_u
              i32.or
              local.set $40
             end
             local.get $40
             local.set $var$4
             local.get $var$4
             i32.eqz
             br_if $label$9
             local.get $var$4
             i32.clz
             local.get $var$2
             i32.clz
             i32.sub
             local.set $var$2
             local.get $var$2
             i32.const 31
             i32.le_u
             br_if $label$8
             br $label$2
            end
            local.get $var$1$hi
            local.set $i64toi32_i32$2
            local.get $var$1
            local.set $i64toi32_i32$1
            i32.const 1
            local.set $i64toi32_i32$0
            i32.const 0
            local.set $i64toi32_i32$3
            local.get $i64toi32_i32$2
            local.get $i64toi32_i32$0
            i32.gt_u
            local.get $i64toi32_i32$2
            local.get $i64toi32_i32$0
            i32.eq
            local.get $i64toi32_i32$1
            local.get $i64toi32_i32$3
            i32.ge_u
            i32.and
            i32.or
            br_if $label$2
            local.get $var$0$hi
            local.set $i64toi32_i32$1
            local.get $var$0
            local.set $var$2
            local.get $var$1$hi
            local.set $i64toi32_i32$1
            local.get $var$1
            local.set $var$3
            local.get $var$2
            local.get $var$3
            i32.div_u
            local.set $var$2
            i32.const 0
            local.set $i64toi32_i32$1
            local.get $var$0
            local.get $var$2
            local.get $var$3
            i32.mul
            i32.sub
            local.get $i64toi32_i32$1
            call $legalfunc$wasm2js_scratch_store_i64
            i32.const 0
            local.set $i64toi32_i32$1
            local.get $var$2
            local.set $i64toi32_i32$2
            local.get $i64toi32_i32$1
            global.set $i64toi32_i32$HIGH_BITS
            local.get $i64toi32_i32$2
            return
           end
           local.get $var$1$hi
           local.set $i64toi32_i32$2
           local.get $var$1
           local.set $i64toi32_i32$3
           i32.const 0
           local.set $i64toi32_i32$1
           i32.const 32
           local.set $i64toi32_i32$0
           local.get $i64toi32_i32$0
           i32.const 31
           i32.and
           local.set $i64toi32_i32$4
           i32.const 32
           local.get $i64toi32_i32$0
           i32.const 63
           i32.and
           i32.le_u
           if
            i32.const 0
            local.set $i64toi32_i32$1
            local.get $i64toi32_i32$2
            local.get $i64toi32_i32$4
            i32.shr_u
            local.set $41
           else
            local.get $i64toi32_i32$2
            local.get $i64toi32_i32$4
            i32.shr_u
            local.set $i64toi32_i32$1
            i32.const 1
            local.get $i64toi32_i32$4
            i32.shl
            i32.const 1
            i32.sub
            local.get $i64toi32_i32$2
            i32.and
            i32.const 32
            local.get $i64toi32_i32$4
            i32.sub
            i32.shl
            local.get $i64toi32_i32$3
            local.get $i64toi32_i32$4
            i32.shr_u
            i32.or
            local.set $41
           end
           local.get $41
           local.set $var$3
           local.get $var$0$hi
           local.set $i64toi32_i32$1
           local.get $var$0
           i32.eqz
           br_if $label$7
           local.get $var$3
           i32.eqz
           br_if $label$6
           local.get $var$3
           i32.const -1
           i32.add
           local.set $var$4
           local.get $var$4
           local.get $var$3
           i32.and
           br_if $label$6
           i32.const 0
           local.set $i64toi32_i32$1
           local.get $var$4
           local.get $var$2
           i32.and
           local.set $i64toi32_i32$2
           i32.const 0
           local.set $i64toi32_i32$3
           i32.const 32
           local.set $i64toi32_i32$0
           local.get $i64toi32_i32$0
           i32.const 31
           i32.and
           local.set $i64toi32_i32$4
           i32.const 32
           local.get $i64toi32_i32$0
           i32.const 63
           i32.and
           i32.le_u
           if
            local.get $i64toi32_i32$2
            local.get $i64toi32_i32$4
            i32.shl
            local.set $i64toi32_i32$3
            i32.const 0
            local.set $42
           else
            i32.const 1
            local.get $i64toi32_i32$4
            i32.shl
            i32.const 1
            i32.sub
            local.get $i64toi32_i32$2
            i32.const 32
            local.get $i64toi32_i32$4
            i32.sub
            i32.shr_u
            i32.and
            local.get $i64toi32_i32$1
            local.get $i64toi32_i32$4
            i32.shl
            i32.or
            local.set $i64toi32_i32$3
            local.get $i64toi32_i32$2
            local.get $i64toi32_i32$4
            i32.shl
            local.set $42
           end
           local.get $i64toi32_i32$3
           local.set $63$hi
           local.get $var$0$hi
           local.set $i64toi32_i32$3
           local.get $var$0
           local.set $i64toi32_i32$1
           i32.const 0
           local.set $i64toi32_i32$2
           i32.const -1
           local.set $i64toi32_i32$0
           local.get $i64toi32_i32$3
           local.get $i64toi32_i32$2
           i32.and
           local.set $i64toi32_i32$2
           local.get $i64toi32_i32$1
           local.get $i64toi32_i32$0
           i32.and
           local.set $65
           local.get $i64toi32_i32$2
           local.set $65$hi
           local.get $63$hi
           local.set $i64toi32_i32$2
           local.get $42
           local.set $i64toi32_i32$3
           local.get $65$hi
           local.set $i64toi32_i32$1
           local.get $65
           local.set $i64toi32_i32$0
           local.get $i64toi32_i32$2
           local.get $i64toi32_i32$1
           i32.or
           local.set $i64toi32_i32$1
           local.get $i64toi32_i32$3
           local.get $i64toi32_i32$0
           i32.or
           local.get $i64toi32_i32$1
           call $legalfunc$wasm2js_scratch_store_i64
           local.get $var$3
           call $__wasm_ctz_i32
           i32.const 31
           i32.and
           local.set $70
           i32.const 0
           local.set $i64toi32_i32$1
           local.get $var$2
           local.get $70
           i32.shr_u
           local.set $i64toi32_i32$3
           local.get $i64toi32_i32$1
           global.set $i64toi32_i32$HIGH_BITS
           local.get $i64toi32_i32$3
           return
          end
          local.get $var$3
          i32.const -1
          i32.add
          local.set $var$4
          local.get $var$4
          local.get $var$3
          i32.and
          i32.eqz
          br_if $label$5
          local.get $var$3
          i32.clz
          i32.const 33
          i32.add
          local.get $var$2
          i32.clz
          i32.sub
          local.set $var$2
          i32.const 0
          local.get $var$2
          i32.sub
          local.set $var$3
          br $label$3
         end
         i32.const 63
         local.get $var$2
         i32.sub
         local.set $var$3
         local.get $var$2
         i32.const 1
         i32.add
         local.set $var$2
         br $label$3
        end
        local.get $var$2
        local.get $var$3
        i32.div_u
        local.set $var$4
        i32.const 0
        local.set $i64toi32_i32$3
        local.get $var$2
        local.get $var$4
        local.get $var$3
        i32.mul
        i32.sub
        local.set $i64toi32_i32$2
        i32.const 0
        local.set $i64toi32_i32$1
        i32.const 32
        local.set $i64toi32_i32$0
        local.get $i64toi32_i32$0
        i32.const 31
        i32.and
        local.set $i64toi32_i32$4
        i32.const 32
        local.get $i64toi32_i32$0
        i32.const 63
        i32.and
        i32.le_u
        if
         local.get $i64toi32_i32$2
         local.get $i64toi32_i32$4
         i32.shl
         local.set $i64toi32_i32$1
         i32.const 0
         local.set $43
        else
         i32.const 1
         local.get $i64toi32_i32$4
         i32.shl
         i32.const 1
         i32.sub
         local.get $i64toi32_i32$2
         i32.const 32
         local.get $i64toi32_i32$4
         i32.sub
         i32.shr_u
         i32.and
         local.get $i64toi32_i32$3
         local.get $i64toi32_i32$4
         i32.shl
         i32.or
         local.set $i64toi32_i32$1
         local.get $i64toi32_i32$2
         local.get $i64toi32_i32$4
         i32.shl
         local.set $43
        end
        local.get $43
        local.get $i64toi32_i32$1
        call $legalfunc$wasm2js_scratch_store_i64
        i32.const 0
        local.set $i64toi32_i32$1
        local.get $var$4
        local.set $i64toi32_i32$2
        local.get $i64toi32_i32$1
        global.set $i64toi32_i32$HIGH_BITS
        local.get $i64toi32_i32$2
        return
       end
       local.get $var$3
       i32.clz
       local.get $var$2
       i32.clz
       i32.sub
       local.set $var$2
       local.get $var$2
       i32.const 31
       i32.lt_u
       br_if $label$4
       br $label$2
      end
      local.get $var$0$hi
      local.set $i64toi32_i32$2
      i32.const 0
      local.set $i64toi32_i32$2
      local.get $var$4
      local.get $var$0
      i32.and
      local.get $i64toi32_i32$2
      call $legalfunc$wasm2js_scratch_store_i64
      local.get $var$3
      i32.const 1
      i32.eq
      br_if $label$1
      local.get $var$0$hi
      local.set $i64toi32_i32$2
      local.get $var$3
      call $__wasm_ctz_i32
      local.set $119
      i32.const 0
      local.set $i64toi32_i32$2
      local.get $i64toi32_i32$2
      local.set $120$hi
      local.get $var$0$hi
      local.set $i64toi32_i32$2
      local.get $var$0
      local.set $i64toi32_i32$3
      local.get $120$hi
      local.set $i64toi32_i32$1
      local.get $119
      local.set $i64toi32_i32$0
      local.get $i64toi32_i32$0
      i32.const 31
      i32.and
      local.set $i64toi32_i32$4
      i32.const 32
      local.get $i64toi32_i32$0
      i32.const 63
      i32.and
      i32.le_u
      if
       i32.const 0
       local.set $i64toi32_i32$1
       local.get $i64toi32_i32$2
       local.get $i64toi32_i32$4
       i32.shr_u
       local.set $44
      else
       local.get $i64toi32_i32$2
       local.get $i64toi32_i32$4
       i32.shr_u
       local.set $i64toi32_i32$1
       i32.const 1
       local.get $i64toi32_i32$4
       i32.shl
       i32.const 1
       i32.sub
       local.get $i64toi32_i32$2
       i32.and
       i32.const 32
       local.get $i64toi32_i32$4
       i32.sub
       i32.shl
       local.get $i64toi32_i32$3
       local.get $i64toi32_i32$4
       i32.shr_u
       i32.or
       local.set $44
      end
      local.get $44
      local.set $i64toi32_i32$3
      local.get $i64toi32_i32$1
      global.set $i64toi32_i32$HIGH_BITS
      local.get $i64toi32_i32$3
      return
     end
     i32.const 63
     local.get $var$2
     i32.sub
     local.set $var$3
     local.get $var$2
     i32.const 1
     i32.add
     local.set $var$2
    end
    local.get $var$0$hi
    local.set $i64toi32_i32$3
    i32.const 0
    local.set $i64toi32_i32$3
    local.get $i64toi32_i32$3
    local.set $129$hi
    local.get $var$0$hi
    local.set $i64toi32_i32$3
    local.get $var$0
    local.set $i64toi32_i32$2
    local.get $129$hi
    local.set $i64toi32_i32$1
    local.get $var$2
    i32.const 63
    i32.and
    local.set $i64toi32_i32$0
    local.get $i64toi32_i32$0
    i32.const 31
    i32.and
    local.set $i64toi32_i32$4
    i32.const 32
    local.get $i64toi32_i32$0
    i32.const 63
    i32.and
    i32.le_u
    if
     i32.const 0
     local.set $i64toi32_i32$1
     local.get $i64toi32_i32$3
     local.get $i64toi32_i32$4
     i32.shr_u
     local.set $45
    else
     local.get $i64toi32_i32$3
     local.get $i64toi32_i32$4
     i32.shr_u
     local.set $i64toi32_i32$1
     i32.const 1
     local.get $i64toi32_i32$4
     i32.shl
     i32.const 1
     i32.sub
     local.get $i64toi32_i32$3
     i32.and
     i32.const 32
     local.get $i64toi32_i32$4
     i32.sub
     i32.shl
     local.get $i64toi32_i32$2
     local.get $i64toi32_i32$4
     i32.shr_u
     i32.or
     local.set $45
    end
    local.get $45
    local.set $var$5
    local.get $i64toi32_i32$1
    local.set $var$5$hi
    local.get $var$0$hi
    local.set $i64toi32_i32$1
    i32.const 0
    local.set $i64toi32_i32$1
    local.get $i64toi32_i32$1
    local.set $134$hi
    local.get $var$0$hi
    local.set $i64toi32_i32$1
    local.get $var$0
    local.set $i64toi32_i32$3
    local.get $134$hi
    local.set $i64toi32_i32$2
    local.get $var$3
    i32.const 63
    i32.and
    local.set $i64toi32_i32$0
    local.get $i64toi32_i32$0
    i32.const 31
    i32.and
    local.set $i64toi32_i32$4
    i32.const 32
    local.get $i64toi32_i32$0
    i32.const 63
    i32.and
    i32.le_u
    if
     local.get $i64toi32_i32$3
     local.get $i64toi32_i32$4
     i32.shl
     local.set $i64toi32_i32$2
     i32.const 0
     local.set $46
    else
     i32.const 1
     local.get $i64toi32_i32$4
     i32.shl
     i32.const 1
     i32.sub
     local.get $i64toi32_i32$3
     i32.const 32
     local.get $i64toi32_i32$4
     i32.sub
     i32.shr_u
     i32.and
     local.get $i64toi32_i32$1
     local.get $i64toi32_i32$4
     i32.shl
     i32.or
     local.set $i64toi32_i32$2
     local.get $i64toi32_i32$3
     local.get $i64toi32_i32$4
     i32.shl
     local.set $46
    end
    local.get $46
    local.set $var$0
    local.get $i64toi32_i32$2
    local.set $var$0$hi
    block $label$13
     local.get $var$2
     if
      local.get $var$1$hi
      local.set $i64toi32_i32$2
      local.get $var$1
      local.set $i64toi32_i32$1
      i32.const -1
      local.set $i64toi32_i32$3
      i32.const -1
      local.set $i64toi32_i32$0
      local.get $i64toi32_i32$1
      local.get $i64toi32_i32$0
      i32.add
      local.set $i64toi32_i32$4
      local.get $i64toi32_i32$2
      local.get $i64toi32_i32$3
      i32.add
      local.set $i64toi32_i32$5
      local.get $i64toi32_i32$4
      local.get $i64toi32_i32$0
      i32.lt_u
      if
       local.get $i64toi32_i32$5
       i32.const 1
       i32.add
       local.set $i64toi32_i32$5
      end
      local.get $i64toi32_i32$4
      local.set $var$8
      local.get $i64toi32_i32$5
      local.set $var$8$hi
      loop $label$15
       local.get $var$5$hi
       local.set $i64toi32_i32$5
       local.get $var$5
       local.set $i64toi32_i32$2
       i32.const 0
       local.set $i64toi32_i32$1
       i32.const 1
       local.set $i64toi32_i32$0
       local.get $i64toi32_i32$0
       i32.const 31
       i32.and
       local.set $i64toi32_i32$3
       i32.const 32
       local.get $i64toi32_i32$0
       i32.const 63
       i32.and
       i32.le_u
       if
        local.get $i64toi32_i32$2
        local.get $i64toi32_i32$3
        i32.shl
        local.set $i64toi32_i32$1
        i32.const 0
        local.set $47
       else
        i32.const 1
        local.get $i64toi32_i32$3
        i32.shl
        i32.const 1
        i32.sub
        local.get $i64toi32_i32$2
        i32.const 32
        local.get $i64toi32_i32$3
        i32.sub
        i32.shr_u
        i32.and
        local.get $i64toi32_i32$5
        local.get $i64toi32_i32$3
        i32.shl
        i32.or
        local.set $i64toi32_i32$1
        local.get $i64toi32_i32$2
        local.get $i64toi32_i32$3
        i32.shl
        local.set $47
       end
       local.get $47
       local.set $140
       local.get $i64toi32_i32$1
       local.set $140$hi
       local.get $var$0$hi
       local.set $i64toi32_i32$1
       local.get $var$0
       local.set $i64toi32_i32$5
       i32.const 0
       local.set $i64toi32_i32$2
       i32.const 63
       local.set $i64toi32_i32$0
       local.get $i64toi32_i32$0
       i32.const 31
       i32.and
       local.set $i64toi32_i32$3
       i32.const 32
       local.get $i64toi32_i32$0
       i32.const 63
       i32.and
       i32.le_u
       if
        i32.const 0
        local.set $i64toi32_i32$2
        local.get $i64toi32_i32$1
        local.get $i64toi32_i32$3
        i32.shr_u
        local.set $48
       else
        local.get $i64toi32_i32$1
        local.get $i64toi32_i32$3
        i32.shr_u
        local.set $i64toi32_i32$2
        i32.const 1
        local.get $i64toi32_i32$3
        i32.shl
        i32.const 1
        i32.sub
        local.get $i64toi32_i32$1
        i32.and
        i32.const 32
        local.get $i64toi32_i32$3
        i32.sub
        i32.shl
        local.get $i64toi32_i32$5
        local.get $i64toi32_i32$3
        i32.shr_u
        i32.or
        local.set $48
       end
       local.get $i64toi32_i32$2
       local.set $142$hi
       local.get $140$hi
       local.set $i64toi32_i32$2
       local.get $140
       local.set $i64toi32_i32$1
       local.get $142$hi
       local.set $i64toi32_i32$5
       local.get $48
       local.set $i64toi32_i32$0
       local.get $i64toi32_i32$2
       local.get $i64toi32_i32$5
       i32.or
       local.set $i64toi32_i32$5
       local.get $i64toi32_i32$1
       local.get $i64toi32_i32$0
       i32.or
       local.set $var$5
       local.get $i64toi32_i32$5
       local.set $var$5$hi
       local.get $var$5
       local.set $144
       local.get $i64toi32_i32$5
       local.set $144$hi
       local.get $var$8$hi
       local.set $i64toi32_i32$5
       local.get $var$5$hi
       local.set $i64toi32_i32$5
       local.get $var$8$hi
       local.set $i64toi32_i32$5
       local.get $var$8
       local.set $i64toi32_i32$2
       local.get $var$5$hi
       local.set $i64toi32_i32$1
       local.get $var$5
       local.set $i64toi32_i32$0
       local.get $i64toi32_i32$2
       local.get $i64toi32_i32$0
       i32.sub
       local.set $i64toi32_i32$3
       local.get $i64toi32_i32$2
       local.get $i64toi32_i32$0
       i32.lt_u
       local.set $i64toi32_i32$6
       local.get $i64toi32_i32$6
       local.get $i64toi32_i32$1
       i32.add
       local.set $i64toi32_i32$4
       local.get $i64toi32_i32$5
       local.get $i64toi32_i32$4
       i32.sub
       local.set $i64toi32_i32$4
       local.get $i64toi32_i32$3
       local.set $i64toi32_i32$5
       i32.const 0
       local.set $i64toi32_i32$2
       i32.const 63
       local.set $i64toi32_i32$0
       local.get $i64toi32_i32$0
       i32.const 31
       i32.and
       local.set $i64toi32_i32$1
       i32.const 32
       local.get $i64toi32_i32$0
       i32.const 63
       i32.and
       i32.le_u
       if
        local.get $i64toi32_i32$4
        i32.const 31
        i32.shr_s
        local.set $i64toi32_i32$2
        local.get $i64toi32_i32$4
        local.get $i64toi32_i32$1
        i32.shr_s
        local.set $49
       else
        local.get $i64toi32_i32$4
        local.get $i64toi32_i32$1
        i32.shr_s
        local.set $i64toi32_i32$2
        i32.const 1
        local.get $i64toi32_i32$1
        i32.shl
        i32.const 1
        i32.sub
        local.get $i64toi32_i32$4
        i32.and
        i32.const 32
        local.get $i64toi32_i32$1
        i32.sub
        i32.shl
        local.get $i64toi32_i32$5
        local.get $i64toi32_i32$1
        i32.shr_u
        i32.or
        local.set $49
       end
       local.get $49
       local.set $var$6
       local.get $i64toi32_i32$2
       local.set $var$6$hi
       local.get $var$1$hi
       local.set $i64toi32_i32$2
       local.get $var$6$hi
       local.set $i64toi32_i32$2
       local.get $var$6
       local.set $i64toi32_i32$4
       local.get $var$1$hi
       local.set $i64toi32_i32$5
       local.get $var$1
       local.set $i64toi32_i32$0
       local.get $i64toi32_i32$2
       local.get $i64toi32_i32$5
       i32.and
       local.set $i64toi32_i32$5
       local.get $i64toi32_i32$4
       local.get $i64toi32_i32$0
       i32.and
       local.set $151
       local.get $i64toi32_i32$5
       local.set $151$hi
       local.get $144$hi
       local.set $i64toi32_i32$5
       local.get $144
       local.set $i64toi32_i32$2
       local.get $151$hi
       local.set $i64toi32_i32$4
       local.get $151
       local.set $i64toi32_i32$0
       local.get $i64toi32_i32$2
       local.get $i64toi32_i32$0
       i32.sub
       local.set $i64toi32_i32$1
       local.get $i64toi32_i32$2
       local.get $i64toi32_i32$0
       i32.lt_u
       local.set $i64toi32_i32$6
       local.get $i64toi32_i32$6
       local.get $i64toi32_i32$4
       i32.add
       local.set $i64toi32_i32$3
       local.get $i64toi32_i32$5
       local.get $i64toi32_i32$3
       i32.sub
       local.set $i64toi32_i32$3
       local.get $i64toi32_i32$1
       local.set $var$5
       local.get $i64toi32_i32$3
       local.set $var$5$hi
       local.get $var$0$hi
       local.set $i64toi32_i32$3
       local.get $var$0
       local.set $i64toi32_i32$5
       i32.const 0
       local.set $i64toi32_i32$2
       i32.const 1
       local.set $i64toi32_i32$0
       local.get $i64toi32_i32$0
       i32.const 31
       i32.and
       local.set $i64toi32_i32$4
       i32.const 32
       local.get $i64toi32_i32$0
       i32.const 63
       i32.and
       i32.le_u
       if
        local.get $i64toi32_i32$5
        local.get $i64toi32_i32$4
        i32.shl
        local.set $i64toi32_i32$2
        i32.const 0
        local.set $50
       else
        i32.const 1
        local.get $i64toi32_i32$4
        i32.shl
        i32.const 1
        i32.sub
        local.get $i64toi32_i32$5
        i32.const 32
        local.get $i64toi32_i32$4
        i32.sub
        i32.shr_u
        i32.and
        local.get $i64toi32_i32$3
        local.get $i64toi32_i32$4
        i32.shl
        i32.or
        local.set $i64toi32_i32$2
        local.get $i64toi32_i32$5
        local.get $i64toi32_i32$4
        i32.shl
        local.set $50
       end
       local.get $i64toi32_i32$2
       local.set $154$hi
       local.get $var$7$hi
       local.set $i64toi32_i32$2
       local.get $154$hi
       local.set $i64toi32_i32$2
       local.get $50
       local.set $i64toi32_i32$3
       local.get $var$7$hi
       local.set $i64toi32_i32$5
       local.get $var$7
       local.set $i64toi32_i32$0
       local.get $i64toi32_i32$2
       local.get $i64toi32_i32$5
       i32.or
       local.set $i64toi32_i32$5
       local.get $i64toi32_i32$3
       local.get $i64toi32_i32$0
       i32.or
       local.set $var$0
       local.get $i64toi32_i32$5
       local.set $var$0$hi
       local.get $var$6$hi
       local.set $i64toi32_i32$5
       local.get $var$6
       local.set $i64toi32_i32$2
       i32.const 0
       local.set $i64toi32_i32$3
       i32.const 1
       local.set $i64toi32_i32$0
       local.get $i64toi32_i32$5
       local.get $i64toi32_i32$3
       i32.and
       local.set $i64toi32_i32$3
       local.get $i64toi32_i32$2
       local.get $i64toi32_i32$0
       i32.and
       local.set $var$6
       local.get $i64toi32_i32$3
       local.set $var$6$hi
       local.get $var$6
       local.set $var$7
       local.get $i64toi32_i32$3
       local.set $var$7$hi
       local.get $var$2
       i32.const -1
       i32.add
       local.set $var$2
       local.get $var$2
       br_if $label$15
      end
      br $label$13
     end
    end
    local.get $var$5$hi
    local.set $i64toi32_i32$3
    local.get $var$5
    local.get $i64toi32_i32$3
    call $legalfunc$wasm2js_scratch_store_i64
    local.get $var$0$hi
    local.set $i64toi32_i32$3
    local.get $var$0
    local.set $i64toi32_i32$5
    i32.const 0
    local.set $i64toi32_i32$2
    i32.const 1
    local.set $i64toi32_i32$0
    local.get $i64toi32_i32$0
    i32.const 31
    i32.and
    local.set $i64toi32_i32$4
    i32.const 32
    local.get $i64toi32_i32$0
    i32.const 63
    i32.and
    i32.le_u
    if
     local.get $i64toi32_i32$5
     local.get $i64toi32_i32$4
     i32.shl
     local.set $i64toi32_i32$2
     i32.const 0
     local.set $51
    else
     i32.const 1
     local.get $i64toi32_i32$4
     i32.shl
     i32.const 1
     i32.sub
     local.get $i64toi32_i32$5
     i32.const 32
     local.get $i64toi32_i32$4
     i32.sub
     i32.shr_u
     i32.and
     local.get $i64toi32_i32$3
     local.get $i64toi32_i32$4
     i32.shl
     i32.or
     local.set $i64toi32_i32$2
     local.get $i64toi32_i32$5
     local.get $i64toi32_i32$4
     i32.shl
     local.set $51
    end
    local.get $i64toi32_i32$2
    local.set $165$hi
    local.get $var$6$hi
    local.set $i64toi32_i32$2
    local.get $165$hi
    local.set $i64toi32_i32$2
    local.get $51
    local.set $i64toi32_i32$3
    local.get $var$6$hi
    local.set $i64toi32_i32$5
    local.get $var$6
    local.set $i64toi32_i32$0
    local.get $i64toi32_i32$2
    local.get $i64toi32_i32$5
    i32.or
    local.set $i64toi32_i32$5
    local.get $i64toi32_i32$3
    local.get $i64toi32_i32$0
    i32.or
    local.set $i64toi32_i32$3
    local.get $i64toi32_i32$5
    global.set $i64toi32_i32$HIGH_BITS
    local.get $i64toi32_i32$3
    return
   end
   local.get $var$0$hi
   local.set $i64toi32_i32$3
   local.get $var$0
   local.get $i64toi32_i32$3
   call $legalfunc$wasm2js_scratch_store_i64
   i32.const 0
   local.set $i64toi32_i32$3
   i32.const 0
   local.set $var$0
   local.get $i64toi32_i32$3
   local.set $var$0$hi
  end
  local.get $var$0$hi
  local.set $i64toi32_i32$3
  local.get $var$0
  local.set $i64toi32_i32$5
  local.get $i64toi32_i32$3
  global.set $i64toi32_i32$HIGH_BITS
  local.get $i64toi32_i32$5
  return
 )
 (func $__wasm_ctz_i32 (; 41 ;) (param $var$0 i32) (result i32)
  local.get $var$0
  if
   i32.const 31
   local.get $var$0
   i32.const -1
   i32.add
   local.get $var$0
   i32.xor
   i32.clz
   i32.sub
   return
  end
  i32.const 32
  return
 )
 (func $__wasm_i64_mul (; 42 ;) (param $var$0 i32) (param $var$0$hi i32) (param $var$1 i32) (param $var$1$hi i32) (result i32)
  (local $i64toi32_i32$0 i32)
  (local $i64toi32_i32$1 i32)
  local.get $var$0$hi
  local.set $i64toi32_i32$0
  local.get $var$1$hi
  local.set $i64toi32_i32$0
  local.get $var$0$hi
  local.set $i64toi32_i32$0
  local.get $var$1$hi
  local.set $i64toi32_i32$1
  local.get $var$0
  local.get $i64toi32_i32$0
  local.get $var$1
  local.get $i64toi32_i32$1
  call $_ZN17compiler_builtins3int3mul3Mul3mul17h070e9a1c69faec5bE
  local.set $i64toi32_i32$1
  global.get $i64toi32_i32$HIGH_BITS
  local.set $i64toi32_i32$0
  local.get $i64toi32_i32$0
  global.set $i64toi32_i32$HIGH_BITS
  local.get $i64toi32_i32$1
  return
 )
 (func $__wasm_i64_urem (; 43 ;) (param $var$0 i32) (param $var$0$hi i32) (param $var$1 i32) (param $var$1$hi i32) (result i32)
  (local $i64toi32_i32$0 i32)
  (local $i64toi32_i32$1 i32)
  local.get $var$0$hi
  local.set $i64toi32_i32$0
  local.get $var$1$hi
  local.set $i64toi32_i32$0
  local.get $var$0$hi
  local.set $i64toi32_i32$0
  local.get $var$1$hi
  local.set $i64toi32_i32$1
  local.get $var$0
  local.get $i64toi32_i32$0
  local.get $var$1
  local.get $i64toi32_i32$1
  call $_ZN17compiler_builtins3int4udiv10divmod_u6417h6026910b5ed08e40E
  local.set $i64toi32_i32$1
  global.get $i64toi32_i32$HIGH_BITS
  local.set $i64toi32_i32$0
  call $legalfunc$wasm2js_scratch_load_i64
  local.set $i64toi32_i32$0
  global.get $i64toi32_i32$HIGH_BITS
  local.set $i64toi32_i32$1
  local.get $i64toi32_i32$1
  global.set $i64toi32_i32$HIGH_BITS
  local.get $i64toi32_i32$0
  return
 )
)
