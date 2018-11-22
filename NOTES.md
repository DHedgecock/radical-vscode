## Highlighting

- selection
- find
- symbol access // least priority, but very useful
- current line // lowest priority

- editor.lineHighlightBackground: #ff55fd@10%

// Selection

- editor.selectionBackground: #f600bb@15%
- editor.selectionHighlightBackground: #f600bb@7.5%
- editor.selectionHighlightBorder: #f600bb@20%

// Symbol access

- editor.wordHighlightBackground: #874df8
- editor.wordHighlightBorder: #874df8
- editor.wordHighlightStrongBackground #f600bb
- editor.wordHighlightStrongBorder #f600bb

// Find matches, selected and other

- editor.findMatchBackground
- editor.findMatchBorder
- editor.findMatchHighlightBackground
- editor.findMatchHighlightBorder

// This is the background of the current match for find widget, or the
background // for a selected match from the find dialog

- editor.rangeHighlightBackground
- editor.rangeHighlightBorder

// Range limiting the search

- editor.findRangeHighlightBackground
- editor.findRangeHighlightBorder

// Misc

// symbol hover is triggered a LOT

- editor.hoverHighlightBackground: #ff55fd@20%
- selection.background:#78efc5@10%

// List

# Search

- #f600bb
- #ff00fc
- #fd43cd
- #d043cf
- #ba01ff
- #ff55fd // line highlight @10%

- #874df8

# Editor

- #efe900
- #ffc400
- #ff8200
- #ff5300

# Inverse

- #78efc5 @10% (use for highlighting in purple based backgrounds)

Git->

- Git added/removed Green+Red highlight
- Merge conflicts Purple+Blue

Editor (5 colors) ->

!! The highlight backgrounds frequently overlay each other, so the opacity is
bucketed by importance of the highlight

The current line highlight shows for the current line, but is suppressed when a
selection is made...

The symbol access backgrounds are included along with the both the current line
and selection backgrounds.

!The current selection/current selection matches and symbol access highlight
colors are often overlain b/c they match the same things

!The symbol access and find/search backgrounds are overlain on each other

Find widget && dialog - same used for both, but the `findMatch` which is the
current match is automatically highlighted with find widget, but not with find
dialog until clicked They can also BOTH be active at the same time!

- Current line
- Current selection
- Matches of current selection
- Symbol access highlight
- Inputs `selection.background` (text selection inside inputs or text areas)
  :wat:

Search ->

- Search match (current selection) highlight
- Search match current selection line background
- Search match (others) highlight
- Search find-range highlight (constraint for search)
- Range highlight (color when selecting a search result)

Meta ->

- Symbol hover (on hover of symbol)

Peek view ->

- Match highlight

Snippets ->

## TODO
