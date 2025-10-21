# SuperCode Component Approval Criteria

This document defines the criteria and standards for approving components in the SuperCode framework.

## 🎯 Approval Categories

### ✅ Full Approval
Component meets all criteria and is ready for production use.

### ⚠️ Conditional Approval
Component meets most criteria but requires minor modifications or monitoring.

### ❌ Rejected
Component fails critical criteria and requires significant changes before reconsideration.

## 📋 Universal Criteria (All Components)

### Framework Integration
- **MUST** Be properly registered in appropriate index file (AGENTS.md, COMMANDS.md)
- **MUST** Follow project naming conventions (lowercase-with-hyphens)
- **MUST** Be placed in correct directory structure
- **MUST** Follow appropriate template structure

### Documentation Quality
- **MUST** Be under 100 lines in length
- **MUST** Include complete YAML frontmatter
- **MUST** Use direct voice ("I do X") for agents
- **MUST** Include concrete examples, not abstract concepts
- **MUST** Have clear boundary definitions (WILL/WILL NOT)

### Technical Standards
- **MUST** Follow established patterns and conventions
- **MUST** Have appropriate tool selections
- **MUST** Include measurable success metrics
- **MUST** Maintain compatibility with existing components

## 🤖 Agent-Specific Criteria

### Core Requirements
- **MUST** Have well-defined triggers
- **MUST** Have comprehensive focus areas
- **MUST** Include appropriate MCP integrations
- **MUST** Have clear success metrics (>70% specificity)

### Capability Assessment
- **MUST** Demonstrate clear domain specialization
- **MUST** Avoid scope overlap with existing agents
- **MUST** Provide complementary capabilities
- **MUST** Have appropriate tool boundaries

### Integration Quality
- **MUST** Integrate cleanly with existing agents
- **MUST** Follow established tool patterns
- **MUST** Maintain framework coherence
- **MUST** Support modular architecture

## ⚡ Command-Specific Criteria

### Command Structure
- **MUST** Follow established command pattern
- **MUST** Have clear parameter specifications
- **MUST** Include appropriate error handling
- **MUST** Coordinate properly with agents

### Usability Standards
- **MUST** Have clear, concise descriptions
- **MUST** Include practical usage examples
- **MUST** Handle edge cases appropriately
- **MUST** Provide helpful error messages

### Integration Requirements
- **MUST** Integrate with appropriate agents
- **MUST** Follow command execution patterns
- **MUST** Maintain data flow consistency
- **MUST** Support framework workflows

## 🔌 MCP-Specific Criteria

### Documentation Standards
- **MUST** Have clear server descriptions
- **MUST** Document all tools comprehensively
- **MUST** Include practical usage examples
- **MUST** Follow MCP documentation patterns

### Technical Requirements
- **MUST** Have accurate tool descriptions
- **MUST** Include appropriate use cases
- **MUST** Specify integration requirements
- **MUST** Document limitations clearly

## 📊 Quality Metrics

### Quantitative Measures
- **Line Count**: Must be < 100 lines
- **Section Completeness**: 100% of required sections present
- **Example Specificity**: >80% concrete examples
- **Metric Measurability**: >70% of success metrics measurable

### Qualitative Assessments
- **Clarity**: Clear, unambiguous language
- **Consistency**: Follows established patterns
- **Completeness**: All required information present
- **Maintainability**: Easy to understand and modify

## 🚫 Blocking Issues

### Critical Failures (Automatic Rejection)
- Missing required sections or frontmatter
- Violation of framework conventions
- Security vulnerabilities or unsafe practices
- Breaking changes to existing functionality
- Inappropriate tool selections or usage

### Major Issues (Conditional Approval)
- Unclear or incomplete documentation
- Insufficient examples or guidance
- Minor framework inconsistencies
- Suboptimal tool selections
- Missing edge case handling

## ✅ Approval Process

### 1. Initial Review
- Check all universal criteria
- Verify component-specific requirements
- Assess documentation quality
- Identify any blocking issues

### 2. Technical Validation
- Test component integration
- Verify tool functionality
- Check compatibility with existing components
- Assess performance impact

### 3. Final Assessment
- Compile review findings
- Determine approval category
- Document conditions (if any)
- Provide improvement recommendations

### 4. Approval Decision
- **Full Approval**: Component ready for production
- **Conditional Approval**: Component ready with specified conditions
- **Rejection**: Component requires significant changes

## 📈 Continuous Improvement

### Metrics Tracking
- Approval rates by component type
- Common rejection reasons
- Quality improvement trends
- Framework evolution impact

### Standards Evolution
- Regular criteria review and updates
- Framework pattern integration
- Community feedback incorporation
- Industry best practice alignment

## 🔍 Review Checklist

### Pre-Approval Validation
- [ ] All universal criteria met
- [ ] Component-specific criteria satisfied
- [ ] Documentation quality standards met
- [ ] Technical requirements fulfilled
- [ ] No blocking issues identified

### Quality Assurance
- [ ] Examples are concrete and actionable
- [ ] Success metrics are measurable
- [ ] Tool selections are appropriate
- [ ] Integration points are clear
- [ ] Framework patterns are followed

### Final Sign-off
- [ ] Review completed thoroughly
- [ ] All issues documented
- [ ] Approval category determined
- [ ] Conditions specified (if applicable)
- [ ] Improvement recommendations provided