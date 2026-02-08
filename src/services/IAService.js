import { openRouter } from "@/lib/ia";
import { streamText } from "ai";

export default {
    async generarReceta(prompt) {
        const result = streamText({
            // model: openRouter('meta-llama/llama-3.3-70b-instruct:free'),
            // model: openRouter('stepfun/step-3.5-flash:free'),
            model: openRouter('nvidia/nemotron-3-nano-30b-a3b:free'),
            prompt
        });
        return result.textStream;
    }
}