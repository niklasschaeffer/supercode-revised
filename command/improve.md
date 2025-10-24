---
name: improve
description: DEPRECATED - Use /build instead for code improvement
---

# /improve $ARGUMENTS

⚠️ **DEPRECATED** - This command has been unified into `/build`. Please use `/build` instead.

## Migration

```bash
# Old command:
/improve src/api/

# New equivalent command:
/build --type improve src/api/
```

## Current Behavior

This command now redirects to `/build --type improve` with full backward compatibility.

## References

See [@build.md](./build.md) for complete unified functionality.

---

*This command will be removed in a future version. Please migrate to `/build`.*