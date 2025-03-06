type InputType = 'button' | 'analog' | 'motion' | 'voice'

type OutputTarget = KeyboardTarget

interface KeyboardTarget {
    type: 'keyboard';
    keycode: KeyNum[];
}

interface MouseClickTarget {
    type: 'mouseClick';
    mouse
}

interface Mapping {
    id: string; // eg: button-A
    source: InputType;
    target: OutputTarget;
}


/**
 * The {@link Key} enum represents keys of a standard 105 key US layout keyboard
 * Source: https://github.com/nut-tree/nut.js/blob/develop/core/shared/lib/enums/key.enum.ts
 */
export enum KeyNum {
    Escape,
  
    F1,
    F2,
    F3,
    F4,
    F5,
    F6,
    F7,
    F8,
    F9,
    F10,
    F11,
    F12,
    F13,
    F14,
    F15,
    F16,
    F17,
    F18,
    F19,
    F20,
    F21,
    F22,
    F23,
    F24,
  
    Print,
    ScrollLock,
    Pause,
  
    Grave,
    Num1,
    Num2,
    Num3,
    Num4,
    Num5,
    Num6,
    Num7,
    Num8,
    Num9,
    Num0,
  
    Minus,
    Equal,
    Backspace,
  
    Insert,
    Home,
    PageUp,
    NumLock,
    Divide,
    Multiply,
    Subtract,
  
    Tab,
    Q,
    W,
    E,
    R,
    T,
    Y,
    U,
    I,
    O,
    P,
    LeftBracket,
    RightBracket,
    Backslash,
  
    Delete,
    End,
    PageDown,
  
    NumPad7,
    NumPad8,
    NumPad9,
    Add,
  
    CapsLock,
    A,
    S,
    D,
    F,
    G,
    H,
    J,
    K,
    L,
    Semicolon,
    Quote,
    Return,
  
    NumPad4,
    NumPad5,
    NumPad6,
  
    LeftShift,
    Z,
    X,
    C,
    V,
    B,
    N,
    M,
    Comma,
    Period,
    Slash,
    RightShift,
  
    Up,
  
    NumPad1,
    NumPad2,
    NumPad3,
    Enter,
  
    LeftControl,
    LeftSuper,
    LeftWin,
    LeftCmd,
    LeftAlt,
    Space,
    RightAlt,
    RightSuper,
    RightWin,
    RightCmd,
    Menu,
    RightControl,
    Fn,
  
    Left,
    Down,
    Right,
  
    NumPad0,
    Decimal,
    Clear,
  
    AudioMute,
    AudioVolDown,
    AudioVolUp,
    AudioPlay,
    AudioStop,
    AudioPause,
    AudioPrev,
    AudioNext,
    AudioRewind,
    AudioForward,
    AudioRepeat,
    AudioRandom,
  }