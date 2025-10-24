---
name: spawn
description: DEPRECATED - Use /build instead for task orchestration
---

# /spawn $ARGUMENTS

⚠️ **DEPRECATED** - This command has been unified into `/build`. Please use `/build` instead.

## Migration

```bash
# Old command:
/spawn "Build full-stack authentication system"

# New equivalent command:
/build "Build full-stack authentication system"
# Or explicitly:
/build --type orchestrate "Build full-stack authentication system"
```

## Current Behavior

This command now redirects to `/build --type orchestrate` with full backward compatibility.

## References

See [@build.md](./build.md) for complete unified functionality.

---

*This command will be removed in a future version. Please migrate to `/build`.*