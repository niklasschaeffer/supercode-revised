import { tool } from "@opencode-ai/plugin"

export default tool({
    description: "Parse flags from a string",
    args: {
        query: tool.schema.string().describe("The string to parse"),
    },
    async execute(args){
      return `Executed query: ${args.query}`
    },
})
