import type { TaskDataCustom } from "..";

const taskData: TaskDataCustom = {
	datasets: [
		{
			// TODO write proper description
			description: "Instructions composed of image and text.",
			id: "liuhaotian/LLaVA-Instruct-150K",
		},
		{
			// TODO write proper description
			description: "Conversation turns where questions involve image and text",
			id: "liuhaotian/LLaVA-Pretrain",
		},
	],
	demo: {
		inputs: [
			{
				filename: "mask-generation-input.png",
				type: "img",
			},
			{
				label: "Text Prompt",
				content: "Describe the position of the bee in detail.",
				type: "text",
			},
		],
		outputs: [
			{
				label: "Answer",
				content: "The bee is sitting on a pink flower, surrounded by other flowers. The bee is positioned in the center of the flower, with its head and front legs sticking out.",
				type: "text",
			},
		],
	},
	metrics: [],
	models: [
		{
			description: "A powerful and grounded vision language model that can also localize concepts in images.",
			id: "microsoft/kosmos-2-patch14-224",
		},
		{
			description: "A strong vision language model that can also localize texts in images.",
			id: "adept/fuyu-8b",
		},
        {
			description: "A strong document understanding model.",
			id: "microsoft/udop-large",
		},
		{
			description: "A powerful model that lets you have a conversation with the image.",
			id: "llava-hf/llava-1.5-7b-hf",
		},
	],
	spaces: [
		{
			description: "Leaderboard to evaluate vision language models.",
			id: "opencompass/open_vlm_leaderboard",
		},
        {
			description: "Vision language models arena, where models are ranked by votes of users.",
			id: "WildVision/vision-arena",
		},
        {
			description: "An application to compare variants of a document vision language model.",
			id: "merve/pix2struct",
		},
        {
			description: "An application to compare outputs of different vision language models.",
			id: "merve/compare_VLMs",
		},
	],
	summary:
		"Image-text-to-text models take in an image and text prompt and output text. These models are also called vision language models. The difference from image-to-text models is that these models take an additional text input, not restricting model to certain use cases like image captioning.",
	widgetModels: ["microsoft/kosmos-2-patch14-224"],
	youtubeId: "",
};

export default taskData;
