# Philosophy Quest: N8N Asset Generation Pipeline

**Automated game asset generation using N8N workflows**

---

## Overview

These N8N workflows automatically generate the needed game assets (characters, backgrounds, items) for Philosophy Quest using AI image generation APIs.

## Workflows Included

### 1. `asset_generation_pipeline.json` (Primary)
**Service**: OpenAI DALL-E 3  
**Best For**: High-quality, consistent art style  
**Cost**: ~$0.04 per image  
**Speed**: Medium

**Generates**:
- 9 Characters (Alex, DJ, Dean, Plato, Mill, Nietzsche, Sartre, Chad, Trip)
- 10 Backgrounds (Campus Quad, Plato's Cave, Trolley Station, Gym, Coffee Shop, etc.)
- 7 Items (Red Cup, Shadow Puppet, Trolley Lever, Philosophy Books, etc.)

**Total**: 26 assets

### 2. `asset_generation_stability_ai.json` (Alternative)
**Service**: Stability AI  
**Best For**: Faster, cheaper generation  
**Cost**: ~$0.01 per image  
**Speed**: Fast

**Generates**: High-priority assets only (Alex, DJ, Campus Quad, Library)

---

## Prerequisites

### 1. N8N Installation

**Option A: Local Installation**
```bash
npm install -g n8n
n8n start
```
Access at: http://localhost:5678

**Option B: Docker**
```bash
docker run -it --rm \
  --name n8n \
  -p 5678:5678 \
  -v ~/.n8n:/home/node/.n8n \
  n8nio/n8n
```

**Option C: N8N Cloud**
Sign up at: https://n8n.io/cloud

### 2. API Keys Required

#### OpenAI (for DALL-E 3)
1. Get API key from: https://platform.openai.com/api-keys
2. In N8N: Settings → Credentials → Add Credential → OpenAI API

#### Stability AI (optional alternative)
1. Get API key from: https://platform.stability.ai/
2. In N8N: Settings → Credentials → Add Credential → HTTP Header Auth
   - Header Name: `Authorization`
   - Header Value: `Bearer YOUR_API_KEY`

---

## Setup Instructions

### Step 1: Import Workflow

1. Open N8N interface
2. Click "Workflows" → "Import from File"
3. Select `asset_generation_pipeline.json`
4. Click "Import"

### Step 2: Configure Credentials

1. In the workflow, find the "Generate Image (DALL-E)" node
2. Click on it
3. Under "Credential for HTTP Header Auth", select or create your OpenAI credential
4. Save

### Step 3: Update File Paths (if needed)

1. Find the "Save to Disk" node
2. Update the file path if your project is in a different location:
   ```
   /Users/patricksomerville/Projects/philosophy-quest/assets/generated/
   ```
3. Save

### Step 4: Create Output Directory

```bash
mkdir -p ~/Projects/philosophy-quest/assets/generated
```

---

## Running the Pipeline

### Option 1: Manual Trigger
1. Open the workflow in N8N
2. Click "Execute Workflow"
3. Wait for completion (26 assets, ~15-20 minutes)

### Option 2: Schedule Trigger (for updates)
Replace "Manual Trigger" node with "Schedule Trigger" to run weekly/monthly.

### Option 3: Webhook Trigger
Add a Webhook node to trigger generation via HTTP request:
```bash
curl -X POST https://your-n8n-instance.com/webhook/generate-assets
```

---

## Asset Priority System

Assets are tagged with priority levels:

| Priority | Assets | Generate First? |
|----------|--------|-----------------|
| **High** | Alex, DJ, Dean, Campus Quad, Library, Red Cup | ✅ Yes |
| **Medium** | Four Philosophers (Plato, Mill, Nietzsche, Sartre), Locations | ✅ Yes |
| **Low** | Chad, Trip, Remaining backgrounds | Optional |

---

## Prompt Engineering

All prompts follow the Art Style Guide specifications:
- **Style**: Comic book illustration
- **Colors**: Teal, Magenta, Mustard Yellow
- **Characters**: Transparent background, 832x1248px
- **Backgrounds**: 1280x720px
- **Items**: Transparent background, 1024x1024px

### Example Prompt Structure
```
[Subject description], comic book illustration style, 
bold outlines, [color palette], [lighting], 
[specific details], transparent background, [dimensions]
```

---

## Customization

### Adding New Assets

Edit the "Define Assets" code node:

```javascript
{
  id: "char_newcharacter",
  name: "New Character",
  type: "character",
  priority: "medium",
  prompt: "Description here..."
}
```

### Changing Art Style

Update all prompts in the "Define Assets" node to match your desired style.

### Using Different Image Service

Replace the "Generate Image" HTTP node with:
- **Midjourney**: Requires Discord bot integration
- **Leonardo AI**: Similar HTTP request structure
- **Replicate**: API-based model hosting

---

## Output Structure

Generated assets are saved as:
```
assets/generated/
├── char_alex.png
├── char_dj.png
├── char_dean.png
├── background_campus_quad.png
├── background_platos_cave.png
├── item_red_cup.png
└── _manifest.json
```

The `_manifest.json` contains metadata for all generated assets.

---

## Troubleshooting

### "Credential not found" Error
- Make sure you've set up OpenAI credentials in N8N
- Check the credential ID matches in the HTTP node

### "File path does not exist" Error
- Create the output directory first
- Update the path in "Save to Disk" node

### Rate Limiting
- OpenAI: 5 images/minute for DALL-E 3
- Add a "Wait" node between batches if needed (set to 12 seconds)

### Quality Issues
- DALL-E 3 produces best results
- Edit prompts to be more specific
- Add "highly detailed" or "professional quality" to prompts

---

## Cost Estimation

### DALL-E 3 (OpenAI)
- 26 assets × $0.04 = **~$1.04 per run**
- Quality: High
- Consistency: Good

### Stability AI
- 26 assets × $0.01 = **~$0.26 per run**
- Quality: Medium-High
- Consistency: Variable

### Midjourney (via API)
- ~$0.05 per image
- Quality: Very High
- Consistency: Excellent

---

## Integration with Game Build

After generation, assets need to be:

1. **Reviewed** for quality and consistency
2. **Renamed** if needed (remove "_generated" suffixes)
3. **Moved** to proper directories:
   ```bash
   mv assets/generated/char_*.png assets/characters/
   mv assets/generated/background_*.png assets/backgrounds/
   mv assets/generated/item_*.png assets/items/
   ```
4. **Optimized** (compress PNGs if needed)

---

## Advanced: Batch Processing

For large-scale generation, split into multiple workflows:

### Workflow 1: Characters Only
Filter in "Define Assets":
```javascript
const characters = assets.filter(a => a.type === 'character');
```

### Workflow 2: Backgrounds Only
```javascript
const backgrounds = assets.filter(a => a.type === 'background');
```

### Workflow 3: Items Only
```javascript
const items = assets.filter(a => a.type === 'item');
```

Run in parallel for faster completion.

---

## Security Notes

- Store API keys in N8N Credentials (encrypted)
- Never commit API keys to git
- Use environment variables for sensitive data
- Rotate API keys regularly

---

## Future Enhancements

- [ ] Add automatic image optimization
- [ ] Add similarity checking (ensure consistent style)
- [ ] Add automatic sprite sheet generation
- [ ] Add variant generation (A/B testing art styles)
- [ ] Integrate with GitHub Actions for CI/CD

---

**Questions?** Check the main project documentation in `/docs`
