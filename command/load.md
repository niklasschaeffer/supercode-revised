---
name: load
description: DEPRECATED - Use /context instead for context loading
---

# /load $ARGUMENTS

⚠️ **DEPRECATED** - This command has been unified into `/context`. Please use `/context` instead.

## Migration

```bash
# Old command:
/load
/load --refresh
/load --memory-only

# New equivalents:
/context
/context --load --refresh
/context --load --memory-only
```

## Current Behavior

This command now redirects to `/context --type load` with full backward compatibility.

## References

See [@context.md](./context.md) for complete unified functionality.

---

*This command will be removed in a future version. Please migrate to `/context`.*