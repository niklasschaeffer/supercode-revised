---
name: save
description: DEPRECATED - Use /context instead for context saving
---

# /save $ARGUMENTS

⚠️ **DEPRECATED** - This command has been unified into `/context`. Please use `/context` instead.

## Migration

```bash
# Old command:
/save
/save --checkpoint
/save --decision "Chose React"

# New equivalents:
/context --type save
/context --save --checkpoint
/context --save --decision "Chose React"
```

## Current Behavior

This command now redirects to `/context --type save` with full backward compatibility.

## References

See [@context.md](./context.md) for complete unified functionality.

---

*This command will be removed in a future version. Please migrate to `/context`.*