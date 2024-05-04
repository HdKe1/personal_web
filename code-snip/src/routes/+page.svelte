<script lang="ts">
	import CodeSnippetCard from '../CodeSnippetCard.svelte';
	import { snippetStore } from '../SnippetStore';
	let formData: CodeSnippetInput = {
		title: '',
		language: 'html',
		code: ''
	};
</script>

<div class="flex justify-center">
	<div class="grid grid-cols-1 gap-4 min-w-full md:min-w-[750px]">
		<h3 class="text-center py-6 text-3xl">Create a Code snippet</h3>
		<div class="card p-4 w-full text-token space-y-4">
			<label class="label">
				<span>Snippet title</span>
				<input
					class="input"
					type="text"
					placeholder="Enter your title here...."
					bind:value={formData.title}
				/>
			</label>
			<label class="label">
				<span>Programming Language</span>
				<select class="select" bind:value={formData.language}>
					<option value="html">HTML</option>
					<option value="css">CSS</option>
					<option value="js">JS</option>
				</select>
			</label>
			<label class="label">
				<span>Code Snippet</span>
				<textarea
					class="textarea"
					rows="4"
					placeholder="Enter your code here..."
					bind:value={formData.code}
				></textarea>
			</label>
		</div>
		<div class="text-center py-6">
			<h1 class="text-3xl">My Code snippets</h1>
		</div>
		<CodeSnippetCard />
	</div>
</div>
