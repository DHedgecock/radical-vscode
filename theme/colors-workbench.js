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
 */

//
// Theme colors
//

const PRIMARY = '#fe6083'
const SECONDARY = '#befeee'
const SECONDARY_TRANSLUCENT = '#befeee80'

const BACKGROUND = '#212b36'
const BACKGROUND_100 = '#1c2b3b'
// Drag and drop background for theme, used primarily in list views
const BACKGROUND_DRAG_DROP = '#f86c8a99'
const BORDER = '#2c4344'
const BORDER_DARK = '#1c242c'

const MITO_PURPLE = '#262b4b'
const MITO_PURPLE_TRANSLUCENT = '#2a254aD9'
const VSCODE_PURPLE = '#602976'

const FOREGROUND = '#f0f0f0'
const FOREGROUND_SUBTLE = '#919ca8'
const FOREGROUND_INACTIVE = '#85a5a0'

// Git colors
const GIT_ADDED = '#a3ff57'
const GIT_MODIFIED = '#ffd000'
const GIT_DELETED = '#ff427b'

const GIT_UNTRACKED = '#c8ff00'
const GIT_IGNORED = '#405c5f'
const GIT_CONFLICTING = '#ff428a'
const GIT_SUBMODULE = '#cc6796'

// Status colors
const INFO = '#93E0E3'
const WARNING = '#FFC300'
const DANGER = '#ff427b'

//
// Grays
//

// Element grouping variables
// ---------------------------------------------------------------------------

// VSCode Radical theme 🎉
// ---------------------------------------------------------------------------

//
// Badges
//

const badge = {
  'badge.background': PRIMARY,
  'badge.foreground': SECONDARY,
}

//
// Inputs
//

const input = {
  'input.background': BACKGROUND_100,
  'input.border': SECONDARY_TRANSLUCENT,
}

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

// ========================================================
// Editor, Editor Groups and Editor Tabs
// ========================================================

const editor = {
  'editor.background': BACKGROUND,
  'editor.foreground': FOREGROUND,
  // Cursor: background styles the text underneath the cursor, which we leave as
  // is so regular token colors are applied. Foreground styles the cursor line
  // and cursor background which is really confusing (aka these are flipped to
  // what you would guess they are)
  'editorCursor.background': null,
  'editorCursor.foreground': PRIMARY,
}

// Editor groups contain editor instances, and each instance is represented by
// a tab
const editorGroup = {
  // Border applies to multiple editor groups
  'editorGroup.border': BORDER,
  // 'editorGroup.dropBackground'
  // 'editorGroup.emptyBackground'
  // 'editorGroup.focusedEmptyBorder'
  // 'editorGroupHeader.noTabsBackground',
  'editorGroupHeader.tabsBackground': BACKGROUND,
  'editorGroupHeader.tabsBorder': BORDER_DARK,
}

// Editor tabs
const tab = {
  'tab.activeBorder': PRIMARY,
  'tab.activeBackground': BACKGROUND,
  'tab.activeForeground': PRIMARY,
  'tab.inactiveBackground': BACKGROUND,
  'tab.inactiveForeground': FOREGROUND_INACTIVE,
}

// Editor decorations
const editorDecorations = {
  'editorRuler.foreground': BACKGROUND_DRAG_DROP,
}

// Editor gutter - contains the glyph margins and the line numbers
const editorGutter = {
  'editorGutter.background': null, // Defaults to editor bg
  'editorGutter.addedBackground': GIT_ADDED,
  'editorGutter.modifiedBackground': GIT_MODIFIED,
  'editorGutter.deletedBackground': GIT_DELETED,
}

// Overview ruler - located beneath scroll bar on right edge of editor and contains an
// overview of all editor decorations
const editorOverviewRuler = {
  // Status decorations (includes linter)
  'editorOverviewRuler.errorForeground': DANGER,
  'editorOverviewRuler.warningForeground': WARNING,
  'editorOverviewRuler.infoForeground': INFO,
  // Git decorations
  'editorOverviewRuler.modifiedForeground': GIT_MODIFIED,
  'editorOverviewRuler.addedForeground': GIT_ADDED,
  'editorOverviewRuler.deletedForeground': GIT_DELETED,
}

// Editor widgets
const editorWidget = {
  'editorWidget.background': MITO_PURPLE_TRANSLUCENT,
}

//
// Panel
//

// Panels are shown below the editor area and contain views like Output and
// Integrated Terminal.
const panel = {
  'panel.background': BACKGROUND,
  'panel.border': BORDER_DARK,
  // 'panel.dropBackground': BG_DRAG_DROP,
  // Panel title
  'panelTitle.activeBorder': PRIMARY,
  'panelTitle.activeForeground': PRIMARY,
  'panelTitle.inactiveForeground': FOREGROUND_INACTIVE,
}

//
// Sidebar
//

// Contains the Explore/Debug/Extension/etc. views
const sideBar = {
  'sideBar.background': BACKGROUND,
  'sideBar.foreground': FOREGROUND_SUBTLE,
  'sideBar.border': BORDER_DARK,
  // 'sideBar.dropBackground': BG_DRAG_DROP,
  // The title for the entire side bar, eg 'EXPLORER' or 'DEBUG'
  'sideBarTitle.foreground': FOREGROUND_INACTIVE,
  // Side bar sections for features
  'sideBarSectionHeader.background': BACKGROUND, // same bg for subtler headers
  'sideBarSectionHeader.foreground': FOREGROUND_INACTIVE,
}

//
// Status Bar
//

// Bar at bottom of application with current statuses and info
const statusBar = {
  'statusBar.background': MITO_PURPLE,
  'statusBar.foreground': FOREGROUND_INACTIVE,
  'statusBar.border': VSCODE_PURPLE,
  // DEBUGGING MODE
  'statusBar.debuggingBackground': MITO_PURPLE,
  'statusBar.debuggingForeground': SECONDARY,
  'statusBar.debuggingBorder': null,
  //   // NO FOLDER MODE
  //   'statusBar.noFolderBackground': WELL_BG,
  //   'statusBar.noFolderForeground': TEXT_PRIMARY,
  //   'statusBar.noFolderBorder': BORDER
  //   // 😢 Unfortunately, you can only style the background of status bar items, it
  //   // would nice to instead style the foreground, but until then style background
  //   'statusBarItem.activeBackground': DECORATION_BG,
  //   'statusBarItem.hoverBackground': DECORATION_BG,
  //   'statusBarItem.prominentBackground': DECORATION_BG,
  //   'statusBarItem.prominentHoverBackground': DECORATION_BG,
}

//
// Title Bar
//

// Bar at top of application with title of project
const titleBar = {
  'titleBar.activeBackground': MITO_PURPLE,
  'titleBar.activeForeground': PRIMARY,
  'titleBar.border': VSCODE_PURPLE
  //   'titleBar.inactiveBackground': TITLE_BG,
  //   'titleBar.inactiveForeground': TITLE_FG,
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

const diffEditor = {
  'diffEditor.insertedTextBackground': '#43fdd533',
  'diffEditor.insertedTextBorder': null,
  'diffEditor.removedTextBackground': '#fe608233',
  'diffEditor.removedTextBorder': null,
  // ℹ️ Diff borders get added around everything line by line and it's super
  // overwhelming to look at, so we disable them
}

module.exports = {
  ...badge,
  ...activityBar,
  ...diffEditor,
  ...editor,
  ...editorGroup,
  ...editorDecorations,
  ...editorGutter,
  ...editorOverviewRuler,
  ...editorWidget,
  ...gitDecoration,
  ...input,
  ...panel,
  ...sideBar,
  ...statusBar,
  ...tab,
  ...titleBar,
}

// "button.background": PRIMARY,
// "button.foreground": SECONDARY,

// LEGACY REFERENCE
// ---------------------------------------------------------------------------

// //
// // Contrast
// //

// // High contrast theme options, this theme is not high contrast

// module.exports.contrast = {
//   contrastActiveBorder: null,
//   contrastBorder: null
// }

// //
// // Text colors
// //

// // Styles for text documents, eg extension pages, welcome page
// // 🤔 Most of these don't seem to do anything...
// module.exports.text = {
//   'textBlockQuote.background': EDITOR_BG,
//   'textBlockQuote.border': PRIMARY,
//   'textCodeBlock.background': EDITOR_BG,
//   'textLink.activeForeground': PRIMARY,
//   'textLink.foreground': PRIMARY
//   // 'textPreformat.foreground': ???,
//   // 'textSeparator.foreground': ???,
// }

// //
// // Base colors
// //

// // ℹ️ Defaults for editor elements, will be used if not set by a specific component
// module.exports.base = {
//   focusBorder: BORDER,
//   foreground: TEXT_PRIMARY,
//   'widget.shadow': TRANSPARENT,
//   'selection.background': HIGHLIGHT_SELECTION, // Selection background inside text inputs
//   descriptionForeground: INFO,
//   errorForeground: DANGER
// }

// //
// // Buttons
// //

// module.exports.buttons = {
//   'button.background': ACTION_BG,
//   'button.foreground': ACTION_FG,
//   'button.hoverBackground': ACTION_HOVER_BG
// }

// //
// // Dropdowns
// //

// module.exports.dropdowns = {
//   'dropdown.background': EDITOR_BG,
//   'dropdown.listBackground': EDITOR_BG,
//   'dropdown.foreground': EDITOR_FG,
//   'dropdown.border': BORDER
// }

// //
// // Inputs
// //

// module.exports.inputs = {
//   'input.background': EDITOR_BG,
//   'input.foreground': EDITOR_FG,
//   'input.border': TRANSPARENT,
//   'input.placeholderForeground': TEXT_SECONDARY,
//   // Border around input options being used, eg regex or case sensitive
//   'inputOption.activeBorder': BORDER_THEMED,
//   // Validtions
//   'inputValidation.errorBackground': DANGER,
//   'inputValidation.errorBorder': DANGER,
//   'inputValidation.infoBackground': INFO,
//   'inputValidation.infoBorder': INFO,
//   'inputValidation.warningBackground': WARNING,
//   'inputValidation.warningBorder': WARNING
// }

// //
// // Badges
// //

// module.exports.badges = {
//   'badge.background': DECORATION_BG,
//   'badge.foreground': DECORATION_FG
// }

// //
// // Progress bars
// //

// // Shown for long running operations
// module.exports.progressBars = {
//   'progressBar.background': PRIMARY
// }

// //
// // Lists and trees
// //

// // Lists and trees include file explorer and ....
// module.exports.listsAndTrees = {
//   // Mouse hover
//   'list.hoverBackground': WELL_BG,
//   'list.hoverForeground': INFO,
//   // Keyboard focus
//   'list.focusBackground': WELL_BG,
//   'list.focusForeground': TEXT_THEMED,
//   // Drag and drop background, shows when you hover a drag item over a droppable area
//   'list.dropBackground': BG_DRAG_DROP,
//   // Selected item when the list container is in focus
//   'list.activeSelectionBackground': WELL_BG,
//   'list.activeSelectionForeground': INFO,
//   // Selected item when the list container is NOT in focus
//   'list.inactiveSelectionBackground': WELL_BG,
//   'list.inactiveSelectionForeground': INFO,
//   // The text that matches a search term inside of lists
//   'list.highlightForeground': INFO
// }

// //
// // Scrollbars
// //

// // Scrollbars should use transparent colors so that mini-map is visible underneath
// module.exports.scrollbar = {
//   // The scrollbar shadow is and decorative info indicator shown in elements that have
//   // been scrolled, theme uses a very subtle translucent PRIMARY
//   'scrollbar.shadow': PRIMARY_TRANSLUCENT_100,
//   // The slider control element
//   'scrollbarSlider.background': PRIMARY_TRANSLUCENT_100,
//   'scrollbarSlider.activeBackground': PRIMARY_TRANSLUCENT_300,
//   'scrollbarSlider.hoverBackground': PRIMARY_TRANSLUCENT_200
// }

// module.exports.merge = {
//   'merge.border': EDITOR_BG,
//   'merge.currentHeaderBackground': '#703268',
//   'merge.currentContentBackground': '#8c568648',
//   'merge.incomingHeaderBackground': '#1E4751',
//   'merge.incomingContentBackground': '#5c9fcb33'
// }

// // ---------------------------------------------------------------------------
// // Editor
// // ---------------------------------------------------------------------------

// //
// // Editor groups and tabs
// //

// // Editor *groups* are containers of multiple editors, and multiple groups can be
// // created using the 'Split Editor' action.

// // Editor *tabs* are containers of individual editors

// module.exports.editorGroupsTabs = {
//   // EDITOR TABS
//   'tab.border': EDITOR_BG,
//   'tab.activeBorder': TEXT_THEMED,
//   'tab.hoverBackground': EDITOR_BG,
//   // Currently active tab
//   'tab.activeBackground': EDITOR_BG,
//   'tab.activeForeground': TEXT_THEMED,
//   // Remaining tabs inside active editor group
//   'tab.inactiveBackground': EDITOR_BG,
//   'tab.inactiveForeground': TEXT_SECONDARY,
//   // Tabs within an inactive editor group
//   'tab.unfocusedActiveBorder': WELL_BG,
//   'tab.unfocusedActiveForeground': EDITOR_BG,
//   'tab.unfocusedHoverBackground': WELL_BG,
//   'tab.unfocusedHoverBorder': WELL_BG,
//   'tab.unfocusedInactiveForeground': WELL_FG
// }

// //
// // Editor controls
// //

// module.exports.editor = {
//   'editor.background': EDITOR_BG,
//   'editor.foreground': EDITOR_FG,

//   // DECORATIONS
//   'editorLineNumber.foreground': TEXT_THEMED_SUBTLE,
//   /* editorCursor.background */
//   'editorCursor.foreground': CURSOR,
//   'editorRuler.foreground': PRIMARY_TRANSLUCENT_200,
//   'editor.lineHighlightBackground': HIGHLIGHT_LINE, // Currently active line background
//   /* editor.lineHighlightBorder */
//   /* editorBracketMatch.background */
//   'editorBracketMatch.border': PRIMARY,
//   'editorCodeLens.foreground': TEXT_TRANSLUCENT,
//   /* editorWhitespace.foreground */
//   'editorIndentGuide.background': BORDER,

//   // SELECTIONS
//   // When selecting characters the selection highlights are applied, all matching
//   // characters in editor are also highlighted
//   'editor.selectionBackground': HIGHLIGHT_SELECTION,
//   /* editor.selectionForeground */
//   'editor.inactiveSelectionBackground': HIGHLIGHT_SELECTION,
//   'editor.selectionHighlightBackground': HIGHLIGHT_SELECTION,
//   /* editor.selectionHighlightBorder */

//   // WORD HIGHLIGHT
//   // Word highlight settings are used when the cursor is inside of a symbol and will
//   // automatically highlight all other occurences of that symbol (with the option for
//   // different colors for read vs write access of symbol). Note that this overrides
//   // the selection background after double clicking a symbol to select, but not when
//   // selecting with keyboard
//   // TODO: Make these more subtle, they're distracting
//   'editor.wordHighlightBackground': TEXT_TRANSLUCENT, // During read access, like console.log
//   /* editor.wordHighlightBorder */
//   'editor.wordHighlightStrongBackground': HIGHLIGHT_SELECTION, // During write access, like const =
//   /* editor.wordHighlightStrongBorder */

//   // FIND MATCH
//   // Find match settings are triggered by current find/replace dialong in top right
//   'editor.findMatchBackground': TEXT_TRANSLUCENT,
//   /* editor.findMatchBorder */
//   'editor.findMatchHighlightBackground': HIGHLIGHT_SELECTION,
//   /* editor.findMatchHighlightBorder */

//   // RANGES
//   // What is findRange??
//   /* editor.findRangeHighlightBackground */
//   /* editor.findRangeHighlightBorder */

//   // HOVER HIGHLIGHT
//   // Shown hen hovering over a symbol
//   /* editor.hoverHighlightBackground TODO! */

//   // LINKS
//   // Visible when clicking on a link in the editor (hold cmd)
//   'editorLink.activeForeground': TEXT_ANCHOR
// }

// //
// // Editor overview ruler
// //

// module.exports.editorOverviewRuler = {
//   // Merge conflict decorations
//   'editorOverviewRuler.currentContentForeground': '#703268', // TODO: variable
//   'editorOverviewRuler.incomingContentForeground': '#1E4751' // TODO: variable
//   // 'editorOverviewRuler.commonContentForeground':  //  TODO: find example,
// }

// //
// // Editor statuses
// //

// // Themes the squiggly+borders underneath linter errors, foreground is the squiggly
// // lines, use just the borders, it looks nicer
// module.exports.editorStatus = {
//   'editorError.foreground': DANGER,
//   'editorError.border': DANGER,
//   'editorWarning.foreground': WARNING,
//   'editorWarning.border': WARNING,
//   'editorInfo.foreground': INFO,
//   'editorInfo.border': INFO
// }

// //
// // Editor widgets
// //

// // Editor widgets are controls shown in front of the editor, eg find/replace dialog,
// // suggestions dropdown, and intellisense hover dialog
// module.exports.editorWidgets = {
//   // General defaults for editor widgets
//   'editorWidget.background': EDITOR_BG,
//   'editorWidget.border': BORDER,
//   // This sets the background for suggestions complete currently selected element
//   'editorSuggestWidget.background': EDITOR_BG,
//   'editorSuggestWidget.border': BORDER,
//   'editorSuggestWidget.foreground': EDITOR_FG,
//   'editorSuggestWidget.selectedBackground': ACTION_HOVER_BG, // line that has active focus
//   'editorSuggestWidget.highlightForeground': INFO, // text that matches what was typed
//   // Intellisense dialog that appears on hover of methods, vars, etc.
//   'editorHoverWidget.background': EDITOR_BG,
//   'editorHoverWidget.border': BORDER,
//   // Peek view shown when editor stops at an exception
//   'debugExceptionWidget.background': EDITOR_BG,
//   'debugExceptionWidget.border': BORDER,
//   // View shows when navigating to errors/warnings/info in the editor (using f8 key
//   // command). The backgrounds are actually border colors of the view
//   'editorMarkerNavigation.background': EDITOR_BG,
//   'editorMarkerNavigationError.background': DANGER,
//   'editorMarkerNavigationWarning.background': WARNING,
//   'editorMarkerNavigationInfo.background': INFO
// }

// //
// // Extensions
// //

// module.exports.extensions = {
//   'extensionButton.prominentBackground': ACTION_BG,
//   'extensionButton.prominentForeground': ACTION_FG,
//   'extensionButton.prominentHoverBackground': ACTION_HOVER_BG
// }

// //
// // Debug
// //

// module.exports.debug = {
//   'debugToolBar.background': WELL_BG // TODO: WIT?
// }
