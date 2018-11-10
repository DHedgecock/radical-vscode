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

const { alpha } = require('./utils')

//
// Theme colors
//

const PRIMARY = '#fe6083'
const PRIMARY_HOVER = '#e25777'
const SECONDARY = '#befeee'
const SECONDARY_HOVER = '#a4dcd0'

const BACKGROUND = '#212b36'
// Drag and drop background for theme, used primarily in list views
const BACKGROUND_DRAG_DROP = alpha('#f86c8a', 0.6)
// Really subtle opacity version of primary for shadows
const SHADOW = alpha('#f86c8a', 0.1)
const BORDER = '#1c242c'

const MITO_PURPLE = '#262b4b'
const MITO_PURPLE_HOVER = '#222745'
const VSCODE_PURPLE = '#602976'
const VSCODE_PURPLE_HOVER = '#913eb4'

const HUE_TEAL = '#78efc5'
const HUE_PINK = '#fd43cd'
const HUE_PURPLE = '#d043cf'

// const EIGHTIES_BLUE = '#7cfefd'
// const EIGHTIES_PINK = '#fc86fe'
// const EIGHTIES_PURPLE = '#874df8'

const FOREGROUND_GRAY = '#919ca8'
const FOREGROUND_TEAL = '#85a5a0' // ~ Provides accents

// Git colors
const DIFF_ADDED = '#43fdd5'
const DIFF_REMOVED = '#fe6082'

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
  focusBorder: '#0000', // Default to not showing focus borders
  foreground: FOREGROUND_TEAL,
  'widget.shadow': SHADOW,
  'selection.background': null, // unknown
  descriptionForeground: null, // unknown
  errorForeground: null, // unknown
}

//
// Text
//

const text = {
  'textBlockQuote.background': MITO_PURPLE,
  'textBlockQuote.border': FOREGROUND_TEAL,
  'textCodeBlock.background': null, // unknown
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
  'list.focusForeground': PRIMARY,
  // Selected item when the list container is in focus
  'list.activeSelectionBackground': alpha('#f86c8a', 0.1),
  'list.activeSelectionForeground': PRIMARY,
  // Selected item when the list container is NOT in focus. (Currently assuming
  // this really only applies to file explorer view, where having the last file
  // that was selected have a background is distracting, especially if you don't
  // have VSCode focus the file you're viewing when you change files)
  'list.inactiveSelectionBackground': BACKGROUND,
  'list.inactiveSelectionForeground': PRIMARY,
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
  'editorGroup.focusedEmptyBorder': '#0000',
  // If you're not using tabs, show regular background, can't think of a better
  // color for that display
  'editorGroupHeader.noTabsBackground': null,
  'editorGroupHeader.tabsBackground': BACKGROUND,
  'editorGroupHeader.tabsBorder': BORDER,
}

// Editor tabs
const tab = {
  // Border between tabs
  'tab.border': null,
  'tab.activeBorder': PRIMARY,
  'tab.activeBorderTop': null,
  'tab.activeBackground': BACKGROUND,
  'tab.activeForeground': PRIMARY,
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
  // --- Editor cursor
  // Cursor: background styles the text underneath the cursor, which we leave as
  // is so regular token colors are applied. Foreground styles the cursor line
  // and cursor background which is really confusing (aka these are flipped to
  // what you would guess they are)
  'editorCursor.background': null,
  'editorCursor.foreground': PRIMARY,
  // --- Selection colors
  'editor.selectionBackground': alpha('#f86c8a', 0.2),
  'editor.selectionForeground': null, // For high contrast themes
  'editor.inactiveSelectionBackground': null, // Default opacity adjust is 👍
  // Themes highlight of text matching the current selection, include a border
  // to make matches more obvious b/c they're frequently important!
  'editor.selectionHighlightBackground': alpha('#f86c8a', 0.2),
  'editor.selectionHighlightBorder': alpha('#fe6083', 0.4),
  // --- Word highlight colors
  // Word highlights are triggered by clicking a symbol (keyboard actions seem
  // to remove word highlights ¯\_(ツ)_/¯ ). The wordHighlight is read access of
  // a symbol (teal for less attention b/c it's more common).
  // wordHighlightStrong is write access of a symbol (pink to grab attention for
  // write actions!)
  'editor.wordHighlightBackground': alpha(HUE_TEAL, 0.2),
  'editor.wordHighlightBorder': alpha(HUE_TEAL, 0.4),
  'editor.wordHighlightStrongBackground': alpha(HUE_PINK, 0.3),
  'editor.wordHighlightStrongBorder': alpha(HUE_PINK, 0.4),
  // --- Find colors (see notes)
  'editor.findMatchBackground': alpha(HUE_TEAL, 0.2),
  'editor.findMatchBorder': alpha(HUE_TEAL, 0.4),
  'editor.findMatchHighlightBackground': alpha(PRIMARY, 0.2),
  'editor.findMatchHighlightBorder': alpha(PRIMARY, 0.4),
  'editor.findRangeHighlightBackground': alpha(HUE_TEAL, 0.2),
  'editor.findRangeHighlightBorder': null, // Every line in range gets a border which is tooo much
  // -- Hover symbol colors
  // Highlights a symbol when hovering over it for intellisense
  'editor.hoverHighlightBackground': alpha(PRIMARY, 0.4),
  // --- Current line colors
  'editor.lineHighlightBackground': alpha(HUE_PURPLE, 0.15),
  'editor.lineHighlightBorder': '#0000',
  // --- Editor links colors
  'editorLink.activeForeground': SECONDARY,
  // --- Range highlight colors
  // Range highlight theming is activated when you click a search result in the
  // panel/side bar serach views
  'editor.rangeHighlightBackground': alpha(SECONDARY, 0.2),
  'editor.rangeHighlightBorder': '#0000',
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
  // Peek view that shows when stopping at an exception in debug
  'debugExceptionWidget.background': null,
  'debugExceptionWidget.border': null,
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
  'statusBar.background': MITO_PURPLE,
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
  'titleBar.activeBackground': MITO_PURPLE,
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
  // ℹ️ Diff borders get added around everything line by line and it's super
  // overwhelming to look at, so we disable them
  'diffEditor.insertedTextBackground': alpha(DIFF_ADDED, 0.075),
  'diffEditor.insertedTextBorder': null,
  'diffEditor.removedTextBackground': alpha(DIFF_REMOVED, 0.075),
  'diffEditor.removedTextBorder': null,
  'diffEditor.border': BORDER,
}

//
// Merge conflicts
//

const mergeConflicts = {
  'merge.currentHeaderBackground': null,
  'merge.currentContentBackground': null,
  'merge.incomingHeaderBackground': null,
  'merge.incomingContentBackground': null,
  'merge.border': null,
  'merge.commonContentBackground': null,
  'merge.commonHeaderBackground': null,
  'editorOverviewRuler.currentContentForeground': null,
  'editorOverviewRuler.incomingContentForeground': null,
  'editorOverviewRuler.commonContentForeground': null,
}

//
// Welcome page
//

const welcomePage = {
  'welcomePage.buttonBackground': MITO_PURPLE,
  'welcomePage.buttonHoverBackground': MITO_PURPLE_HOVER,
  'walkThrough.embeddedEditorBackground': '#1e2732',
}

module.exports = {
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
  ...welcomePage,
}
