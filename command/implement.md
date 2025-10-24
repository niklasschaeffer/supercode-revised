---
name: implement
description: DEPRECATED - Use /build instead for feature implementation
---

# /implement $ARGUMENTS

⚠️ **DEPRECATED** - This command has been unified into `/build`. Please use `/build` instead.

## Migration

```bash
# Old command:
/implement user profile component

# New equivalent command:
/build user profile component
# Or explicitly:
/build --type implement user profile component
```

## Current Behavior

This command now redirects to `/build --type implement` with full backward compatibility.

## References

See [@build.md](./build.md) for complete unified functionality.

---

*This command will be removed in a future version. Please migrate to `/build`.*