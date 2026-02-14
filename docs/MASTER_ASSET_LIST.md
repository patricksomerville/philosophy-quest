# Philosophy Quest: Master Asset List

**Complete inventory of all game assets — Existing and Needed**

**Last Updated**: February 14, 2026  
**Total Assets**: 32 (6 complete, 26 needed)

---

## 📊 SUMMARY

| Status | Count | Percentage |
|--------|-------|------------|
| ✅ Complete | 6 | 19% |
| 🔴 High Priority | 7 | 22% |
| 🟡 Medium Priority | 11 | 34% |
| 🟢 Low Priority | 8 | 25% |
| **TOTAL** | **32** | **100%** |

---

## ✅ COMPLETE ASSETS (July 2025)

These assets already exist from the original July 2025 work:

| ID | Name | Category | File | Size |
|----|------|----------|------|------|
| char_brad | Brad (Protagonist) | Character | char_brad.png | 144KB |
| char_prof_miller | Professor Miller | Character | char_prof_miller.png | 158KB |
| background_frat_party | Frat House | Background | background_frat_party.png | 188KB |
| background_prof_millers_office | Miller's Office | Background | background_prof_millers_office.png | 186KB |
| item_desk_key | Desk Key | Item | item_desk_key.png | 176KB |
| item_ethics_textbook | Ethics Textbook | Item | item_ethics_textbook.png | 150KB |

**Location**: `assets/original_july2025/`

---

## 🔴 HIGH PRIORITY (Phase 1: MVP)

**These 7 assets are essential for a playable demo.**

### Characters (3)

| ID | Name | Description | Dimensions | Status |
|----|------|-------------|------------|--------|
| char_alex | Alex Chen | Cute grad student, glasses, lavender cardigan | 832x1248 | 🔴 NEEDED |
| char_dj | DJ Jones | Former linebacker, philosophy PhD, Nietzsche tank | 832x1248 | 🔴 NEEDED |
| char_dean | Dean Harriet Thorne | Power suit, gray streak, authoritative | 832x1248 | 🔴 NEEDED |

### Backgrounds (3)

| ID | Name | Description | Dimensions | Status |
|----|------|-------------|------------|--------|
| background_campus_quad | Campus Quad | Central hub, fountain, founder statue w/ helmet | 1280x720 | 🔴 NEEDED |
| background_library | University Library | Night study scene, breakthrough moment | 1280x720 | 🔴 NEEDED |
| background_platos_cave | Plato's Cave | Shadow puppet theater, torchlit | 1280x720 | 🔴 NEEDED |

### Items (1)

| ID | Name | Description | Dimensions | Status |
|----|------|-------------|------------|--------|
| item_red_cup | Red Solo Cup | Iconic party cup, slightly crushed | 1024x1024 | 🔴 NEEDED |

**Phase 1 Total**: 7 assets  
**With existing**: 13/32 assets (41% of game complete)

---

## 🟡 MEDIUM PRIORITY (Phase 2: Complete Experience)

**These 11 assets round out the Four Philosophers and key locations.**

### Characters (4)

| ID | Name | Description | Dimensions | Status |
|----|------|-------------|------------|--------|
| char_plato | Plato (Shadow) | Shadow puppet silhouette, toga, beard | 832x1248 | 🟡 NEEDED |
| char_mill | John Stuart Mill | Victorian conductor, trolley lever | 832x1248 | 🟡 NEEDED |
| char_nietzsche | Coach/Nietzsche | 1980s track suit, intense eyes | 832x1248 | 🟡 NEEDED |
| char_sartre | Jean-Paul Sartre | Judgmental barista, apron | 832x1248 | 🟡 NEEDED |

### Backgrounds (3)

| ID | Name | Description | Dimensions | Status |
|----|------|-------------|------------|--------|
| background_trolley_station | Trolley Station | Red trolley, track lever, moral choice | 1280x720 | 🟡 NEEDED |
| background_gym | The Gym | Weight room, philosophy books as weights | 1280x720 | 🟡 NEEDED |
| background_coffee_shop | The Grounds of Being | Hipster coffee shop, espresso machine | 1280x720 | 🟡 NEEDED |

### Items (4)

| ID | Name | Description | Dimensions | Status |
|----|------|-------------|------------|--------|
| item_big_book | The Philosophy Playbook | Massive 3-ring binder, color tabs | 1024x1024 | 🟡 NEEDED |
| item_philosophy_books | Philosophy Books | Stack: Aesthetics, Logic, Ethics, Metaphysics, Hegel | 1024x1024 | 🟡 NEEDED |
| item_shadow_puppet | Shadow Puppet | Paper cutout, Plato silhouette | 1024x1024 | 🟡 NEEDED |
| item_trolley_lever | Trolley Lever | Brass Victorian track switch | 1024x1024 | 🟡 NEEDED |

**Phase 2 Total**: 11 assets  
**Cumulative**: 24/32 assets (75% of game complete)

---

## 🟢 LOW PRIORITY (Phase 3: Polish)

**These 8 assets complete the experience but aren't required for core gameplay.**

### Characters (2)

| ID | Name | Description | Dimensions | Status |
|----|------|-------------|------------|--------|
| char_chad | Chad | Loyal frat bro, confused, keg stand | 832x1248 | 🟢 NEEDED |
| char_trip | Trip | Stoner philosopher, understands Hegel | 832x1248 | 🟢 NEEDED |

### Backgrounds (4)

| ID | Name | Description | Dimensions | Status |
|----|------|-------------|------------|--------|
| background_philosophy_building | Philosophy Building | Grand hallway, philosopher portraits | 1280x720 | 🟢 NEEDED |
| background_dean_office | Dean's Office | Athletic director office, trophies | 1280x720 | 🟢 NEEDED |
| background_committee_room | Thesis Committee Room | Conference table, tribunal setup | 1280x720 | 🟢 NEEDED |
| background_stadium | The Stadium | Locker room, championship atmosphere | 1280x720 | 🟢 NEEDED |

### Items (2)

| ID | Name | Description | Dimensions | Status |
|----|------|-------------|------------|--------|
| item_latte_art | Latte Art | Abstract foam, existential chaos | 1024x1024 | 🟢 NEEDED |
| item_thesis_draft | Thesis Draft | Coffee-stained papers, corrections | 1024x1024 | 🟢 NEEDED |

**Phase 3 Total**: 8 assets  
**Final Total**: 32/32 assets (100% of game complete)

---

## 🎯 GENERATION WORKFLOW

### Using Nano Banana Pro (Recommended)

```bash
# Phase 1 - High Priority (~$0.21)
n8n execute --workflow=asset_generation_nano_banana --filter="priority=high"

# Phase 2 - Medium Priority (~$0.33)
n8n execute --workflow=asset_generation_nano_banana --filter="priority=medium"

# Phase 3 - Low Priority (~$0.24)
n8n execute --workflow=asset_generation_nano_banana --filter="priority=low"
```

**Total Cost**: ~$0.78 for all 26 assets

---

## 📁 FILE NAMING CONVENTION

| Category | Prefix | Example |
|----------|--------|---------|
| Characters | `char_` | char_alex.png |
| Backgrounds | `background_` | background_campus_quad.png |
| Items | `item_` | item_red_cup.png |
| UI | `ui_` | ui_parser_box.png |

---

## 🎨 ART SPECIFICATIONS

### Characters
- **Format**: PNG
- **Size**: 832x1248px
- **Background**: Transparent
- **Style**: Comic book illustration, bold outlines
- **Colors**: Teal, Magenta, Mustard accents

### Backgrounds
- **Format**: PNG
- **Size**: 1280x720px
- **Style**: Comic book illustration, detailed but not cluttered
- **Colors**: Teal/Magenta/Mustard palette

### Items
- **Format**: PNG
- **Size**: 1024x1024px
- **Background**: Transparent
- **Style**: Comic book illustration, readable at small sizes

---

## ✅ PRODUCTION CHECKLIST

### Phase 1 Checklist (MVP)
- [ ] char_alex
- [ ] char_dj
- [ ] char_dean
- [ ] background_campus_quad
- [ ] background_library
- [ ] background_platos_cave
- [ ] item_red_cup

### Phase 2 Checklist (Complete)
- [ ] char_plato
- [ ] char_mill
- [ ] char_nietzsche
- [ ] char_sartre
- [ ] background_trolley_station
- [ ] background_gym
- [ ] background_coffee_shop
- [ ] item_big_book
- [ ] item_philosophy_books
- [ ] item_shadow_puppet
- [ ] item_trolley_lever

### Phase 3 Checklist (Polish)
- [ ] char_chad
- [ ] char_trip
- [ ] background_philosophy_building
- [ ] background_dean_office
- [ ] background_committee_room
- [ ] background_stadium
- [ ] item_latte_art
- [ ] item_thesis_draft

---

## 🔍 QUICK REFERENCE

**Total Assets**: 32  
**Complete**: 6 (19%)  
**Needed**: 26 (81%)  

**By Category**:
- Characters: 9 total (1 complete, 8 needed)
- Backgrounds: 10 total (2 complete, 8 needed)
- Items: 7 total (2 complete, 5 needed)

**By Priority**:
- High: 7 needed (generate first)
- Medium: 11 needed
- Low: 8 needed

**Estimated Generation Time** (Nano Banana):
- Phase 1: ~4 minutes
- Phase 2: ~6 minutes
- Phase 3: ~5 minutes
- **Total**: ~15 minutes for all 26 assets

**Estimated Cost** (Nano Banana):
- Phase 1: ~$0.21
- Phase 2: ~$0.33
- Phase 3: ~$0.24
- **Total**: ~$0.78

---

## 📋 MANIFEST TEMPLATE

```json
{
  "project": "Philosophy Quest",
  "generatedAt": "2026-02-14T00:00:00Z",
  "generator": "nano_banana_pro",
  "assets": [
    {
      "id": "char_alex",
      "name": "Alex Chen",
      "category": "characters",
      "priority": "high",
      "status": "generated",
      "path": "assets/generated/nano_banana/char_alex.png"
    }
    // ... all assets
  ]
}
```

---

**Next Step**: Run Phase 1 generation to get the 7 high-priority assets needed for the MVP.
