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

const BACKGROUND = '#212b36'
// Drag and drop background for theme, used primarily in list views
const BACKGROUND_DRAG_DROP = '#f86c8a99'
const BORDER = '#1c242c'

const MITO_PURPLE = '#262b4b'
const MITO_PURPLE_TRANSLUCENT = '#2a254aD9'
const VSCODE_PURPLE = '#602976'

const FOREGROUND_GRAY = '#919ca8'
const FOREGROUND_TEAL = '#85a5a0'

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
  'input.background': '#1c2b3b',
  'input.border': '#befeee80',
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
  // The editor default foreground shows up in widgets, is the color of the
  // separators in merge conflicts
  'editor.foreground': FOREGROUND_TEAL,
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
  'editorGroupHeader.tabsBorder': BORDER,
}

// Editor tabs
const tab = {
  'tab.activeBorder': PRIMARY,
  'tab.activeBackground': BACKGROUND,
  'tab.activeForeground': PRIMARY,
  'tab.inactiveBackground': BACKGROUND,
  'tab.inactiveForeground': FOREGROUND_TEAL,
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
  'panel.border': BORDER,
  // 'panel.dropBackground': BG_DRAG_DROP,
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
  // 'sideBar.dropBackground': BG_DRAG_DROP,
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
  //   // NO FOLDER MODE
  //   'statusBar.noFolderBackground': WELL_BG,
  //   'statusBar.noFolderForeground': TEXT_PRIMARY,
  //   'statusBar.noFolderBorder': VSCODE_PURPLE,
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
  'titleBar.border': VSCODE_PURPLE,
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
  ...contrast,
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
