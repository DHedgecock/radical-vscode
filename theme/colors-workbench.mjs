/**
 * Radical Theme Color Variables
 *
 * Theming with color variables should be handled by element groups. For example the
 * background value shouldn't be set individually for each option, instead theme
 * elements like 'Wells' should be identified, the variables for those elements
 * assigned here, and then the element theming variables should be used throughout
 * the theme, eg: `$wellBackground`.
 *
 * Ideally it should be possible to see the overall theming for everything in this
 * file and only this file would be updated when changing theme color values.
 *
 * Theme Reference: https://code.visualstudio.com/docs/getstarted/theme-color-reference
 * Typings: https://github.com/Microsoft/vscode/blob/master/src/vs/platform/theme/common/colorRegistry.ts
 */

import { alpha } from './utils'

//
// Theme colors
//

const PRIMARY = '#ff428e'
const SECONDARY = '#a8ffef'
const PRIMARY_HOVER = '#ff6ba6'
const SECONDARY_HOVER = '#b3fff1'

const BACKGROUND = '#201b24'
const DARK_BACKGROUND = '#201b28'
// Drag and drop background for theme, used primarily in list views
const BACKGROUND_DRAG_DROP = alpha(PRIMARY, 0.6)
// Shadows are show by items that are scrolled and under widgets
const SHADOW = alpha(PRIMARY, 0.5)
const BORDER = '#26303b'

const MITO_PURPLE = '#262b4b'
const MITO_PURPLE_BORDER = '#2c3258'
const MITO_PURPLE_HOVER = '#222745'
const VSCODE_PURPLE = '#602976'
const VSCODE_PURPLE_HOVER = '#913eb4'

const HUE_TEAL = '#78efc5'
const HUE_PURPLE = '#d043cf'

const FOREGROUND_GRAY = '#919ca8'
const FOREGROUND_TEAL = '#85a5a0' // ~ Provides accents

// Highlighting
const HIGHLIGHT_CURRENT_LINE = '#d043cf'
const HIGHLIGHT_RANGE = '#fd43cd'
const HIGHLIGHT_CURRENT_SELECTION = '#874df8'
const HIGHLIGHT_CURRENT_SELECTION_MATCH_BORDER = '#6e45c7'
const HIGHLIGHT_MATCH = '#9736c0'
const HIGHLIGHT_ADDL_MATCH = '#f179e1'
const HIGHLIGHT_READ_ACCESS = '#ff5300'
const HIGHLIGHT_WRITE_ACCESS = '#efe900'

// Git colors
const DIFF_ADDED = '#43fdd5'
const DIFF_REMOVED = '#fe6082'
const MERGE_CURRENT = '#fc86fe'
const MERGE_INCOMING = '#008fe9'
const MERGE_COMMON = '#ffd000'

const GIT_ADDED = '#a3ff57'
const GIT_MODIFIED = '#ffb000'
const GIT_DELETED = '#ff427b'
const GIT_UNTRACKED = '#c8ff00'
const GIT_IGNORED = '#405c5f'
const GIT_CONFLICTING = '#ff428a'
const GIT_SUBMODULE = '#cc6796'

// Status colors
const INFO = '#93E0E3'
const WARNING = '#ffd000'
const ERROR = '#ff1767'

// Transparent
const TRANSPARENT = '#0000'

// VSCode Radical theme 🎉
// ---------------------------------------------------------------------------

//
// High contrast
//

// This theme is not high contrast
const contrast = {
  contrastActiveBorder: null,
  contrastBorder: null,
}

//
// Base colors
//

const base = {
  focusBorder: TRANSPARENT, // Default to not showing focus borders
  foreground: FOREGROUND_TEAL,
  'widget.shadow': SHADOW,
  // Background for text selection inside of inputs and textareas
  // (Type into the find input and then select some text)
  'selection.background': alpha(HUE_TEAL, 0.1),
  // Incoming/Current merge conflict labels use this
  descriptionForeground: INFO,
  // Repro: Search for something with no matches using the find widget
  errorForeground: ERROR,
}

//
// Text
//

const text = {
  'textBlockQuote.background': MITO_PURPLE,
  'textBlockQuote.border': FOREGROUND_TEAL,
  // Only showing inside of hover widget for code snippets (eg hover over chroma.hex())
  // It would be awesome if this showed inside READMEs code blocks...
  'textCodeBlock.background': VSCODE_PURPLE,
  // Includes link hover state
  'textLink.foreground': SECONDARY,
  'textLink.activeForeground': SECONDARY_HOVER,
  // Monospace font texts
  'textPreformat.foreground': PRIMARY,
  'textSeparator.foreground': null, // unknown
}

//
// Buttons
//

// Same as badges, but with hover
const button = {
  'button.background': PRIMARY,
  'button.foreground': SECONDARY,
  'button.hoverBackground': PRIMARY_HOVER,
}

//
// Dropdowns
//

const dropdown = {
  'dropdown.background': null,
  'dropdown.listBackground': null,
  'dropdown.border': null,
  'dropdown.foreground': null,
}

//
// Scroll bar controls
//

const scrollBarControl = {
  'scrollbar.shadow': SHADOW,
  // Scroll bar is primary with decreasing opacity
  'scrollbarSlider.background': alpha('#f86c8a', 0.1),
  'scrollbarSlider.hoverBackground': alpha('#f86c8a', 0.25),
  'scrollbarSlider.activeBackground': alpha('#f86c8a', 0.4),
}

//
// Badges
//

// Same as buttons
const badge = {
  'badge.background': PRIMARY,
  'badge.foreground': SECONDARY,
}

//
// Progress bar
//

const progressBar = {
  'progressBar.background': VSCODE_PURPLE,
}

//
// Lists and trees
//

const listsTrees = {
  // Mouse hover
  'list.hoverBackground': alpha('#f86c8a', 0.05),
  'list.hoverForeground': FOREGROUND_TEAL,
  // Keyboard focus - using slightly higher alpha to make selection more obvious,
  // this helps UX for things like project and command dropdown selection with
  // the keyboard
  'list.focusBackground': alpha('#f86c8a', 0.2),
  'list.focusForeground': SECONDARY,
  // Selected item when the list container is in focus
  'list.activeSelectionBackground': alpha('#f86c8a', 0.1),
  'list.activeSelectionForeground': SECONDARY,
  // Selected item when the list container is NOT in focus. (Currently assuming
  // this really only applies to file explorer view, where having the last file
  // that was selected have a background is distracting, especially if you don't
  // have VSCode focus the file you're viewing when you change files)
  'list.inactiveSelectionBackground': BACKGROUND,
  'list.inactiveSelectionForeground': SECONDARY,
  // Focused item when the list container is NOT in focus
  'list.inactiveFocusBackground': null, // unknown
  // Drag and drop background, shows when you hover a drag item over a droppable area
  'list.dropBackground': BACKGROUND_DRAG_DROP,
  // The text that matches a search term inside of lists
  'list.highlightForeground': SECONDARY,
  'list.errorForeground': ERROR,
  'list.warningForeground': WARNING,
  'list.invalidItemForeground': null,
}

//
// Inputs
//

const input = {
  'input.background': MITO_PURPLE,
  'input.border': FOREGROUND_TEAL,
  'input.foreground': FOREGROUND_TEAL,
  'input.placeholderForeground': FOREGROUND_TEAL,
  'inputOption.activeBorder': alpha('#f86c8a', 0.6),
  'inputValidation.errorBackground': ERROR,
  'inputValidation.errorBorder': ERROR,
  'inputValidation.infoBackground': INFO,
  'inputValidation.infoBorder': INFO,
  'inputValidation.warningBackground': WARNING,
  'inputValidation.warningBorder': WARNING,
}

// ========================================================
// Editor, Editor Groups and Editor Tabs
// ========================================================

// Editor groups contain editor instances, and each editor instance is
// represented by a tab
const editorGroup = {
  // Border applies to multiple editor groups
  'editorGroup.border': BORDER,
  'editorGroup.dropBackground': BACKGROUND_DRAG_DROP,
  // When all tabs are closed the editorGroup is empty, you would see this on
  // opening VSCode without a previous project, eg cmd+shift+n
  'editorGroup.emptyBackground': null,
  'editorGroup.focusedEmptyBorder': TRANSPARENT,
  // If you're not using tabs, show regular background, can't think of a better
  // color for that display
  'editorGroupHeader.noTabsBackground': null,
  'editorGroupHeader.tabsBackground': BACKGROUND,
  'editorGroupHeader.tabsBorder': BORDER,
}

// Editor tabs
const tab = {
  // Border is *between* tabs, set to background so there isn't a border
  'tab.border': BACKGROUND,
  'tab.activeBorder': PRIMARY,
  'tab.activeBorderTop': null,
  'tab.activeBackground': BACKGROUND,
  'tab.activeForeground': SECONDARY,
  'tab.inactiveBackground': BACKGROUND,
  'tab.inactiveForeground': FOREGROUND_TEAL,
  // --- Hover
  'tab.hoverBackground': null,
  'tab.hoverBorder': PRIMARY,
  // --- Unfocused editor group tabs
  // default styles slightly darken tab colors and look good 👍
  'tab.unfocusedActiveBorder': null,
  'tab.unfocusedActiveBorderTop': null,
  'tab.unfocusedActiveForeground': null,
  'tab.unfocusedHoverBackground': null,
  'tab.unfocusedHoverBorder': null,
  'tab.unfocusedInactiveForeground': null,
}

const editor = {
  'editor.background': BACKGROUND,
  // The editor default foreground shows up in widgets, is the color of the
  // separators in merge conflicts
  'editor.foreground': FOREGROUND_TEAL,

  // --- Line number colors
  'editorLineNumber.foreground': FOREGROUND_GRAY,
  'editorLineNumber.activeForeground': PRIMARY,

  // Editor highlighting (#highlighting)
  // ------------------------------------
  // Highlighting is not exclusive, the highlighting features often overlay each
  // other.

  // --- Current line (#current_line_highlight)
  // nb: Current line is highlighted only when cursor focus is on that line, so
  // actions like switching to find widget removes current line highlight. The
  // highlight is also removed when making a selection.
  'editor.lineHighlightBackground': alpha(HIGHLIGHT_CURRENT_LINE, 0.07),
  'editor.lineHighlightBorder': TRANSPARENT, // ETOOMUCHBORDER

  // --- Range highlight (#current_range_highlight)
  // Highlights ranges of current matches, including the currently selected
  // match for find and currently selected symbol in Go to symbol. No border
  // because range highlight can match multiple lines for go to symbol and each
  // line gets a border ETOOMUCHCOLOR
  'editor.rangeHighlightBackground': alpha(HIGHLIGHT_RANGE, 0.07),
  'editor.rangeHighlightBorder': TRANSPARENT, // ETOOMUCHBORDER

  // --- Current selection (#current_selection_highlight)
  // nb: The additional matches of the current selection highlight border is an
  // opaque color because it is frequently overlain by the symbol access borders
  // and using an opaque color provides a better base for multiple highlights
  'editor.selectionBackground': alpha(HIGHLIGHT_CURRENT_SELECTION, 0.3),
  'editor.selectionForeground': null, // For high contrast themes
  'editor.inactiveSelectionBackground': null, // Default opacity adjust is 👍
  // Themes highlight of text matching the current selection, include a border
  // to make matches more obvious b/c they're frequently important!
  'editor.selectionHighlightBackground': alpha(HIGHLIGHT_CURRENT_SELECTION, 0.1),
  'editor.selectionHighlightBorder': HIGHLIGHT_CURRENT_SELECTION_MATCH_BORDER,

  // --- Find (#find_highlight)
  // The find editor widget and find panel both use these values, and can both
  // appear at the same time for different searches. The `findMatch` is the
  // currently selected find match, which is automatically selected when using
  // the find widget, but must actively be selected when using the find panel.
  'editor.findMatchBackground': TRANSPARENT,
  'editor.findMatchBorder': alpha(HIGHLIGHT_MATCH, 0.55),
  'editor.findMatchHighlightBackground': TRANSPARENT,
  'editor.findMatchHighlightBorder': alpha(HIGHLIGHT_ADDL_MATCH, 0.8),
  // (select text and type alt+cmd+L to toggle)
  'editor.findRangeHighlightBackground': alpha(HIGHLIGHT_RANGE, 0.07),
  'editor.findRangeHighlightBorder': null, // ETOOMUCHBORDER

  // --- Symbol access (#symbol_access_highlight)
  // Symbol (and word) access highlighting is shown when the cursor is inside a
  // symbol (although this seems to be mistakenly removed when keyboard is
  // used inside word).
  // nb: highlight is with opacity, this highlight shows up fairly often for
  // mouse users and overlays the other highights. Stronger theming adds a lot
  // of noise to the editor (overlays current line, current selection and find
  // highlights)
  'editor.wordHighlightBackground': alpha(HIGHLIGHT_READ_ACCESS, 0.05),
  'editor.wordHighlightBorder': alpha(HIGHLIGHT_READ_ACCESS, 0.25),
  'editor.wordHighlightStrongBackground': alpha(HIGHLIGHT_WRITE_ACCESS, 0.05),
  'editor.wordHighlightStrongBorder': alpha(HIGHLIGHT_WRITE_ACCESS, 0.25),

  // -- Symbol hover (#symbol_hover_highlight)
  // Highlights a symbol when hovering over it for intellisense
  'editor.hoverHighlightBackground': alpha(HIGHLIGHT_RANGE, 0.25),

  // Editor decorations
  // ------------------------------------

  // --- Editor cursor
  // Cursor: background styles the text underneath the cursor, which we leave as
  // is so regular token colors are applied. Foreground styles the cursor line
  // and cursor background which is really confusing (aka these are flipped to
  // what you would guess they are)
  'editorCursor.background': null,
  'editorCursor.foreground': PRIMARY,

  // --- Editor links colors
  'editorLink.activeForeground': SECONDARY,

  // --- Whitespace color
  'editorWhitespace.foreground': null, // Default gray color is muted enough 👍

  // --- Indent guides
  'editorIndentGuide.background': null, // Default gray color is muted enough 👍
  'editorIndentGuide.activeBackground': BACKGROUND_DRAG_DROP, // Mirror rulers

  // --- Ruler color
  'editorRuler.foreground': BACKGROUND_DRAG_DROP,

  // --- Code lens
  'editorCodeLens.foreground': alpha(HUE_PURPLE, 0.5),

  // --- Bracket match
  'editorBracketMatch.background': null,
  'editorBracketMatch.border': HUE_PURPLE,

  // --- Unused source code
  'editorUnnecessaryCode.border': null, // unknown
  'editorUnnecessaryCode.opacity': null, // unknown

  // --- Gutter colors
  'editorGutter.background': null, // Defaults to editor bg
  'editorGutter.addedBackground': GIT_ADDED,
  'editorGutter.modifiedBackground': GIT_MODIFIED,
  'editorGutter.deletedBackground': GIT_DELETED,

  // --- Status decorations
  'editorError.foreground': ERROR,
  'editorError.border': null,
  'editorWarning.foreground': WARNING,
  'editorWarning.border': null,
  'editorInfo.foreground': INFO,
  'editorInfo.border': null,
  'editorHint.foreground': null, // unknown
  'editorHint.border': null,
}

// Overview ruler - located beneath scroll bar on right edge of editor and contains an
// overview of all editor decorations
const editorOverviewRuler = {
  'editorOverviewRuler.border': null,
  'editorOverviewRuler.findMatchForeground': null,
  'editorOverviewRuler.rangeHighlightForeground': null,
  'editorOverviewRuler.selectionHighlightForeground': null,
  'editorOverviewRuler.wordHighlightForeground': null,
  'editorOverviewRuler.wordHighlightStrongForeground': null,
  'editorOverviewRuler.bracketMatchForeground': null,
  // Status decorations (includes linter)
  'editorOverviewRuler.errorForeground': ERROR,
  'editorOverviewRuler.warningForeground': WARNING,
  'editorOverviewRuler.infoForeground': INFO,
  // Git decorations
  'editorOverviewRuler.modifiedForeground': GIT_MODIFIED,
  'editorOverviewRuler.addedForeground': GIT_ADDED,
  'editorOverviewRuler.deletedForeground': GIT_DELETED,
}

// Editor widgets
const editorWidget = {
  'editorWidget.background': alpha('#262b4b', 0.9),
  'editorWidget.border': FOREGROUND_TEAL,
  'editorWidget.resizeBorder': PRIMARY_HOVER,
  // Suggest widget falls back to editor widget values which look good.
  'editorSuggestWidget.background': null,
  'editorSuggestWidget.border': null,
  'editorSuggestWidget.foreground': null,
  'editorSuggestWidget.highlightForeground': null,
  'editorSuggestWidget.selectedBackground': null,
  'editorHoverWidget.background': null,
  'editorHoverWidget.border': null,
  // Widget that shows when navigating between errors/warnings
  'editorMarkerNavigation.background': alpha('#262b4b', 0.9),
  // These actually style the borders of the marker navigation
  'editorMarkerNavigationError.background': ERROR,
  'editorMarkerNavigationWarning.background': WARNING,
  'editorMarkerNavigationInfo.background': INFO,
}

//
// Peek View
//

const peekView = {}

//
// Activity Bar
//

const activityBar = {
  'activityBar.background': BACKGROUND,
  'activityBar.dropBackground': BACKGROUND_DRAG_DROP,
  'activityBar.border': null,
  'activityBar.foreground': SECONDARY,
  // Badges
  'activityBarBadge.background': badge['badge.background'],
  'activityBarBadge.foreground': badge['badge.foreground'],
}

//
// Panel
//

// Panels are shown below the editor area and contain views like Output and
// Integrated Terminal.
const panel = {
  'panel.background': BACKGROUND,
  'panel.border': BORDER,
  'panel.dropBackground': BACKGROUND_DRAG_DROP,
  // Panel title
  'panelTitle.activeBorder': PRIMARY,
  'panelTitle.activeForeground': PRIMARY,
  'panelTitle.inactiveForeground': FOREGROUND_TEAL,
}

//
// Sidebar
//

// Contains the Explore/Debug/Extension/etc. views
const sideBar = {
  'sideBar.background': BACKGROUND,
  'sideBar.foreground': FOREGROUND_GRAY,
  'sideBar.border': BORDER,
  'sideBar.dropBackground': BACKGROUND_DRAG_DROP,
  // The title for the entire side bar, eg 'EXPLORER' or 'DEBUG'
  'sideBarTitle.foreground': FOREGROUND_TEAL,
  // Side bar sections for features
  'sideBarSectionHeader.background': BACKGROUND, // same bg for subtler headers
  'sideBarSectionHeader.foreground': FOREGROUND_TEAL,
}

//
// Status Bar
//

// Bar at bottom of application with current statuses and info
const statusBar = {
  'statusBar.background': DARK_BACKGROUND,
  'statusBar.foreground': FOREGROUND_TEAL,
  'statusBar.border': VSCODE_PURPLE,
  // DEBUGGING MODE
  'statusBar.debuggingBackground': MITO_PURPLE,
  'statusBar.debuggingForeground': SECONDARY,
  'statusBar.debuggingBorder': null,
  // NO FOLDER MODE
  'statusBar.noFolderBackground': MITO_PURPLE,
  'statusBar.noFolderForeground': FOREGROUND_TEAL,
  'statusBar.noFolderBorder': VSCODE_PURPLE,
  // ℹ️ You can only style the background of status bar items
  'statusBarItem.prominentBackground': VSCODE_PURPLE,
  'statusBarItem.prominentHoverBackground': VSCODE_PURPLE_HOVER,
  'statusBarItem.hoverBackground': VSCODE_PURPLE,
  'statusBarItem.activeBackground': VSCODE_PURPLE,
}

//
// Title Bar
//

// Bar at top of application with title of project
const titleBar = {
  'titleBar.activeBackground': DARK_BACKGROUND,
  'titleBar.activeForeground': PRIMARY,
  'titleBar.border': VSCODE_PURPLE,
  // Title bar is slightly darkened on blur by default and looks good
  'titleBar.inactiveBackground': null,
  'titleBar.inactiveForeground': null,
}

//
// Menu bar
//

const menuBar = {
  'menubar.selectionForeground': null,
  'menubar.selectionBackground': null,
  'menubar.selectionBorder': null,
  'menu.foreground': null,
  'menu.background': null,
  'menu.selectionForeground': null,
  'menu.selectionBackground': null,
  'menu.selectionBorder': null,
}

//
// Extensions
//

const extension = {
  'extensionButton.prominentForeground': SECONDARY,
  'extensionButton.prominentBackground': PRIMARY,
  'extensionButton.prominentHoverBackground': PRIMARY_HOVER,
}

//
// Git
//

const gitDecoration = {
  'gitDecoration.addedResourceForeground': GIT_ADDED,
  'gitDecoration.modifiedResourceForeground': GIT_MODIFIED,
  'gitDecoration.deletedResourceForeground': GIT_DELETED,
  'gitDecoration.untrackedResourceForeground': GIT_UNTRACKED,
  'gitDecoration.ignoredResourceForeground': GIT_IGNORED,
  'gitDecoration.conflictingResourceForeground': GIT_CONFLICTING,
  'gitDecoration.submoduleResourceForeground': GIT_SUBMODULE,
}

//
// Diff editor
//

const diffEditor = {
  // nb: diff borders get added to every line and are too noisy
  'diffEditor.insertedTextBackground': alpha(DIFF_ADDED, 0.09),
  'diffEditor.insertedTextBorder': null, // ETOOMUCHBORDER
  'diffEditor.removedTextBackground': alpha(DIFF_REMOVED, 0.09),
  'diffEditor.removedTextBorder': null, // ETOOMUCHBORDER
  'diffEditor.border': BORDER,
}

//
// Merge conflicts
//

const mergeConflicts = {
  'merge.currentHeaderBackground': alpha(MERGE_CURRENT, 0.2),
  'merge.currentContentBackground': alpha(MERGE_CURRENT, 0.075),
  'merge.incomingHeaderBackground': alpha(MERGE_INCOMING, 0.2),
  'merge.incomingContentBackground': alpha(MERGE_INCOMING, 0.075),
  'merge.border': MITO_PURPLE_BORDER,
  'merge.commonContentBackground': alpha(MERGE_COMMON, 0.075),
  'merge.commonHeaderBackground': alpha(MERGE_COMMON, 0.2),
  'editorOverviewRuler.currentContentForeground': alpha(MERGE_CURRENT, 0.3),
  'editorOverviewRuler.incomingContentForeground': alpha(MERGE_INCOMING, 0.3),
  'editorOverviewRuler.commonContentForeground': alpha(MERGE_COMMON, 0.3),
}

//
// Debug
//

const debug = {
  // --- Debug status toolbar
  'debugToolBar.background': alpha(MITO_PURPLE_BORDER, 0.87),
  'debugToolBar.border': TRANSPARENT,

  // --- Breakpoint highlighting
  // Highlight shows on breakpoint stop line
  'editor.stackFrameHighlightBackground': alpha(HIGHLIGHT_READ_ACCESS, 0.12),
  // Highlight shows when selecting frame in stack trace after stopping on breakpoint
  'editor.focusedStackFrameHighlightBackground': alpha(HIGHLIGHT_WRITE_ACCESS, 0.1),

  // --- Debug exception widget
  // Shows when connected to a debug session and an exception is encounered
  'debugExceptionWidget.background': alpha(GIT_CONFLICTING, 0.45), // #ff428a73
  'debugExceptionWidget.border': ERROR,
}

//
// Welcome page
//

const welcomePage = {
  'welcomePage.buttonBackground': MITO_PURPLE,
  'welcomePage.buttonHoverBackground': MITO_PURPLE_HOVER,
  'walkThrough.embeddedEditorBackground': '#1e2732',
}

//
// Breadcrumbs
//

// By default breadcrumbs look good, they have the foreground gray with the
// alpha mito purple and primary accent colors
const breadcrumbs = {
  'breadcrumb.foreground': null,
  'breadcrumb.focusForeground': null,
  'breadcrumb.activeSelectionForeground': null,
  'breadcrumbPicker.background': null, // This should be the mito purple transparent widget bg
}

export default {
  ...activityBar,
  ...badge,
  ...base,
  ...button,
  ...contrast,
  ...diffEditor,
  ...dropdown,
  ...editor,
  ...editorGroup,
  ...editorOverviewRuler,
  ...editorWidget,
  ...extension,
  ...gitDecoration,
  ...input,
  ...listsTrees,
  ...mergeConflicts,
  ...menuBar,
  ...panel,
  ...peekView,
  ...progressBar,
  ...scrollBarControl,
  ...sideBar,
  ...statusBar,
  ...tab,
  ...text,
  ...titleBar,
  ...debug,
  ...welcomePage,
  ...breadcrumbs,
}

export { BACKGROUND, BORDER, PRIMARY }
