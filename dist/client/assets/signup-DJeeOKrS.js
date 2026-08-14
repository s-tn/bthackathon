import './preload-DTsWB9Rp.js';
import { t as template, i as insert, a as twMerge, c as clsx, s as splitProps, b as createComponent, m as mergeProps, d as cva, B as Button$1, e as spread, S as Select$1, f as createMemo, C as Checkbox$1, T as TextField$1, g as createSignal, h as createContext, j as ToggleGroup2, u as useContext, P as Progress$1, k as Tabs$1, l as TextFieldTextArea, n as Separator$1, o as delegateEvents, p as createEffect, q as Show, r as createRenderEffect, v as className, w as Portal, x as SelectLabel, F as For, y as render } from './vendor-By-LZ_WS.js';

var _tmpl$$9 = /* @__PURE__ */ template(`<div class=min-h-full>`);
const Ui = (props) => {
  return (() => {
    var _el$ = _tmpl$$9();
    insert(_el$, () => props.children);
    return _el$;
  })();
};

const cn = (...classLists) => twMerge(clsx(classLists));

const buttonVariants = cva("inline-flex items-center justify-center rounded-md text-sm font-medium transition-[color,background-color,box-shadow] focus-visible:outline-none focus-visible:ring-[1.5px] focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50", {
  variants: {
    variant: {
      default: "bg-primary text-primary-foreground shadow hover:bg-primary/90",
      destructive: "bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90",
      outline: "border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground",
      secondary: "bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80",
      ghost: "hover:bg-accent hover:text-accent-foreground",
      link: "text-primary underline-offset-4 hover:underline"
    },
    size: {
      default: "h-9 px-4 py-2",
      sm: "h-8 rounded-md px-3 text-xs",
      lg: "h-10 rounded-md px-8",
      icon: "h-9 w-9"
    }
  },
  defaultVariants: {
    variant: "default",
    size: "default"
  }
});
const Button = (props) => {
  const [local, rest] = splitProps(props, ["class", "variant", "size"]);
  return createComponent(Button$1, mergeProps({
    get ["class"]() {
      return cn(buttonVariants({
        size: local.size,
        variant: local.variant
      }), local.class);
    }
  }, rest));
};

var _tmpl$$8 = /* @__PURE__ */ template(`<div>`), _tmpl$2$6 = /* @__PURE__ */ template(`<h1>`), _tmpl$3$5 = /* @__PURE__ */ template(`<h3>`);
const Card = (props) => {
  const [local, rest] = splitProps(props, ["class"]);
  return (() => {
    var _el$ = _tmpl$$8();
    spread(_el$, mergeProps({
      get ["class"]() {
        return cn("rounded-xl border bg-card text-card-foreground shadow", local.class);
      }
    }, rest), false, false);
    return _el$;
  })();
};
const CardHeader = (props) => {
  const [local, rest] = splitProps(props, ["class"]);
  return (() => {
    var _el$2 = _tmpl$$8();
    spread(_el$2, mergeProps({
      get ["class"]() {
        return cn("flex flex-col space-y-1.5 p-6", local.class);
      }
    }, rest), false, false);
    return _el$2;
  })();
};
const CardTitle = (props) => {
  const [local, rest] = splitProps(props, ["class"]);
  return (() => {
    var _el$3 = _tmpl$2$6();
    spread(_el$3, mergeProps({
      get ["class"]() {
        return cn("font-semibold leading-none tracking-tight", local.class);
      }
    }, rest), false, false);
    return _el$3;
  })();
};
const CardDescription = (props) => {
  const [local, rest] = splitProps(props, ["class"]);
  return (() => {
    var _el$4 = _tmpl$3$5();
    spread(_el$4, mergeProps({
      get ["class"]() {
        return cn("text-sm text-muted-foreground", local.class);
      }
    }, rest), false, false);
    return _el$4;
  })();
};
const CardContent = (props) => {
  const [local, rest] = splitProps(props, ["class"]);
  return (() => {
    var _el$5 = _tmpl$$8();
    spread(_el$5, mergeProps({
      get ["class"]() {
        return cn("p-6 pt-0", local.class);
      }
    }, rest), false, false);
    return _el$5;
  })();
};
const CardFooter = (props) => {
  const [local, rest] = splitProps(props, ["class"]);
  return (() => {
    var _el$6 = _tmpl$$8();
    spread(_el$6, mergeProps({
      get ["class"]() {
        return cn("flex items-center p-6 pt-0", local.class);
      }
    }, rest), false, false);
    return _el$6;
  })();
};

var _tmpl$$7 = /* @__PURE__ */ template(`<svg><path fill=none stroke=currentColor stroke-linecap=round stroke-linejoin=round stroke-width=2 d="m8 9l4-4l4 4m0 6l-4 4l-4-4"></svg>`, false, true, false), _tmpl$2$5 = /* @__PURE__ */ template(`<svg xmlns=http://www.w3.org/2000/svg class="h-4 w-4"viewBox="0 0 24 24"><path fill=none stroke=currentColor stroke-linecap=round stroke-linejoin=round stroke-width=2 d="m5 12l5 5L20 7"></path><title>Checked`);
const Select = Select$1;
const SelectValue = Select$1.Value;
Select$1.Description;
Select$1.ErrorMessage;
Select$1.ItemDescription;
Select$1.HiddenSelect;
Select$1.Section;
const SelectTrigger = (props) => {
  const [local, rest] = splitProps(props, ["class", "children"]);
  return createComponent(Select$1.Trigger, mergeProps({
    get ["class"]() {
      return cn("flex h-9 w-full items-center justify-between rounded-md border border-input bg-transparent px-3 py-2 text-sm shadow-sm ring-offset-background transition-shadow placeholder:text-muted-foreground focus:outline-none focus-visible:ring-[1.5px] focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50", local.class);
    }
  }, rest, {
    get children() {
      return [createMemo(() => local.children), createComponent(Select$1.Icon, {
        as: "svg",
        xmlns: "http://www.w3.org/2000/svg",
        width: "1em",
        height: "1em",
        viewBox: "0 0 24 24",
        "class": "flex size-4 items-center justify-center opacity-50",
        get children() {
          return _tmpl$$7();
        }
      })];
    }
  }));
};
const SelectContent = (props) => {
  const [local, rest] = splitProps(props, ["class"]);
  return createComponent(Select$1.Portal, {
    get children() {
      return createComponent(Select$1.Content, mergeProps({
        get ["class"]() {
          return cn("relative z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover text-popover-foreground shadow-md data-[expanded]:animate-in data-[closed]:animate-out data-[closed]:fade-out-0 data-[expanded]:fade-in-0 data-[closed]:zoom-out-95 data-[expanded]:zoom-in-95", local.class);
        }
      }, rest, {
        get children() {
          return createComponent(Select$1.Listbox, {
            "class": "p-1 focus-visible:outline-none"
          });
        }
      }));
    }
  });
};
const SelectItem = (props) => {
  const [local, rest] = splitProps(props, ["class", "children"]);
  return createComponent(Select$1.Item, mergeProps({
    get ["class"]() {
      return cn("relative flex w-full cursor-default select-none items-center rounded-sm py-1.5 pl-2 pr-8 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50", local.class);
    }
  }, rest, {
    get children() {
      return [createComponent(Select$1.ItemIndicator, {
        "class": "absolute right-2 flex h-3.5 w-3.5 items-center justify-center",
        get children() {
          return _tmpl$2$5();
        }
      }), createComponent(Select$1.ItemLabel, {
        get children() {
          return local.children;
        }
      })];
    }
  }));
};

var _tmpl$$6 = /* @__PURE__ */ template(`<svg xmlns=http://www.w3.org/2000/svg viewBox="0 0 24 24"class="h-4 w-4"><path fill=none stroke=currentColor stroke-linecap=round stroke-linejoin=round stroke-width=2 d="m5 12l5 5L20 7"></path><title>Checkbox`);
const CheckboxLabel = Checkbox$1.Label;
const Checkbox = Checkbox$1;
Checkbox$1.ErrorMessage;
const CheckboxDescription = Checkbox$1.Description;
const CheckboxControl = (props) => {
  const [local, rest] = splitProps(props, ["class", "children"]);
  return [createComponent(Checkbox$1.Input, {
    "class": "[&:focus-visible+div]:outline-none [&:focus-visible+div]:ring-[1.5px] [&:focus-visible+div]:ring-ring [&:focus-visible+div]:ring-offset-2 [&:focus-visible+div]:ring-offset-background"
  }), createComponent(Checkbox$1.Control, mergeProps({
    get ["class"]() {
      return cn("h-4 w-4 shrink-0 rounded-sm border border-primary shadow transition-shadow focus-visible:outline-none focus-visible:ring-[1.5px] focus-visible:ring-ring data-[disabled]:cursor-not-allowed data-[checked]:bg-primary data-[checked]:text-primary-foreground data-[disabled]:opacity-50", local.class);
    }
  }, rest, {
    get children() {
      return createComponent(Checkbox$1.Indicator, {
        "class": "flex items-center justify-center text-current",
        get children() {
          return _tmpl$$6();
        }
      });
    }
  }))];
};

const TextFieldRoot = (props) => {
  const [local, rest] = splitProps(props, ["class"]);
  return createComponent(TextField$1, mergeProps({
    get ["class"]() {
      return cn("space-y-1", local.class);
    }
  }, rest));
};
const textfieldLabel = cva("text-sm data-[disabled]:cursor-not-allowed data-[disabled]:opacity-70 font-medium", {
  variants: {
    label: {
      true: "data-[invalid]:text-destructive"
    },
    error: {
      true: "text-destructive text-xs"
    },
    description: {
      true: "font-normal text-muted-foreground"
    }
  },
  defaultVariants: {
    label: true
  }
});
const TextFieldLabel = (props) => {
  const [local, rest] = splitProps(props, ["class"]);
  return createComponent(TextField$1.Label, mergeProps({
    get ["class"]() {
      return cn(textfieldLabel(), local.class);
    }
  }, rest));
};
const TextField = (props) => {
  const [local, rest] = splitProps(props, ["class"]);
  return createComponent(TextField$1.Input, mergeProps({
    get ["class"]() {
      return cn("flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-shadow file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-[1.5px] focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50", local.class);
    }
  }, rest));
};

var _tmpl$$5 = /* @__PURE__ */ template(`<form>`);
function Login() {
  const [forgotPassword, setForgotPassword] = createSignal(false);
  const [email, setEmail] = createSignal("");
  const [password, setPassword] = createSignal("");
  const submit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());
    if (forgotPassword()) {
      fetch("/api/forgot-password", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          email: data.email
        })
      }).then((res) => res.json()).then((data2) => {
        if (!data2.error) {
          alert("If an account with that email exists, a password reset link has been sent.");
        } else {
          alert("Error sending password reset link");
        }
      }).catch((err) => {
        console.error(err);
        alert("An error occurred. Please try again.");
      });
      return;
    }
    fetch("/api/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data)
    }).then((res) => res.json()).then((data2) => {
      if (!data2.error) {
        location.href = "/signup/dashboard";
      } else {
        alert("Invalid credentials");
      }
    }).catch((err) => {
      console.error(err);
      alert("An error occurred. Please try again.");
    });
  };
  return createComponent(Card, {
    "class": "border-none",
    get children() {
      var _el$ = _tmpl$$5();
      _el$.addEventListener("submit", submit);
      insert(_el$, (() => {
        var _c$ = createMemo(() => !!!forgotPassword());
        return () => _c$() ? [createComponent(CardHeader, {
          get children() {
            return [createComponent(CardTitle, {
              children: "Sign in"
            }), createComponent(CardDescription, {
              children: "Enter your credentials to access your account."
            })];
          }
        }), createComponent(CardContent, {
          "class": "space-y-2",
          get children() {
            return [createComponent(TextFieldRoot, {
              "class": "space-y-1",
              get children() {
                return [createComponent(TextFieldLabel, {
                  children: "Email"
                }), createComponent(TextField, {
                  name: "email",
                  get value() {
                    return email();
                  },
                  onInput: (e) => setEmail(e.target.value),
                  required: true
                })];
              }
            }), createComponent(TextFieldRoot, {
              "class": "space-y-1",
              get children() {
                return [createComponent(TextFieldLabel, {
                  children: "Password"
                }), createComponent(TextField, {
                  name: "password",
                  get value() {
                    return password();
                  },
                  onInput: (e) => setPassword(e.target.value),
                  type: "password",
                  required: true
                })];
              }
            })];
          }
        }), createComponent(CardFooter, {
          get children() {
            return [createComponent(Button, {
              type: "submit",
              children: "Sign in"
            }), createComponent(Button, {
              variant: "link",
              "class": "ml-auto",
              onClick: () => setForgotPassword(true),
              children: "Forgot password?"
            })];
          }
        })] : [createComponent(CardHeader, {
          get children() {
            return [createComponent(CardTitle, {
              children: "Reset Password"
            }), createComponent(CardDescription, {
              children: "Enter your email to reset your password."
            })];
          }
        }), createComponent(CardContent, {
          "class": "space-y-2",
          get children() {
            return createComponent(TextFieldRoot, {
              "class": "space-y-1",
              get children() {
                return [createComponent(TextFieldLabel, {
                  children: "Email"
                }), createComponent(TextField, {
                  name: "email",
                  get value() {
                    return email();
                  },
                  onInput: (e) => setEmail(e.target.value),
                  required: true
                })];
              }
            });
          }
        }), createComponent(CardFooter, {
          get children() {
            return [createComponent(Button, {
              type: "submit",
              children: "Send Reset Link"
            }), createComponent(Button, {
              variant: "link",
              "class": "ml-auto",
              onClick: () => setForgotPassword(false),
              children: "Back to Sign in"
            })];
          }
        })];
      })());
      return _el$;
    }
  });
}

const toggleVariants = cva("inline-flex items-center justify-center rounded-md text-sm font-medium transition-[box-shadow,color,background-color] hover:bg-muted hover:text-muted-foreground focus-visible:outline-none focus-visible:ring-[1.5px] focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 data-[pressed]:bg-accent data-[pressed]:text-accent-foreground", {
  variants: {
    variant: {
      default: "bg-transparent",
      outline: "border border-input bg-transparent shadow-sm hover:bg-accent hover:text-accent-foreground"
    },
    size: {
      default: "h-9 px-3",
      sm: "h-8 px-2",
      lg: "h-10 px-3"
    }
  },
  defaultVariants: {
    variant: "default",
    size: "default"
  }
});

const ToggleGroupContext = createContext();
const useToggleGroup = () => {
  const context = useContext(ToggleGroupContext);
  if (!context) {
    throw new Error("`useToggleGroup`: must be used within a `ToggleGroup` component");
  }
  return context;
};
const ToggleGroup = (props) => {
  const [local, rest] = splitProps(props, ["class", "children", "size", "variant"]);
  const value = createMemo(() => ({
    size: local.size,
    variant: local.variant
  }));
  return createComponent(ToggleGroup2, mergeProps({
    get ["class"]() {
      return cn("flex items-center justify-center gap-1", local.class);
    }
  }, rest, {
    get children() {
      return createComponent(ToggleGroupContext.Provider, {
        value,
        get children() {
          return local.children;
        }
      });
    }
  }));
};
const ToggleGroupItem = (props) => {
  const [local, rest] = splitProps(props, ["class"]);
  const context = useToggleGroup();
  return createComponent(ToggleGroup2.Item, mergeProps({
    get ["class"]() {
      return cn(toggleVariants({
        variant: context().variant,
        size: context().size
      }), local.class);
    }
  }, rest));
};

Progress$1.Label;
Progress$1.ValueLabel;
const Progress = (props) => {
  const [local, rest] = splitProps(props, ["class", "children"]);
  return createComponent(Progress$1, mergeProps({
    get ["class"]() {
      return cn("flex w-full flex-col gap-2", local.class);
    }
  }, rest, {
    get children() {
      return [createMemo(() => local.children), createComponent(Progress$1.Track, {
        "class": "h-2 overflow-hidden rounded-full bg-primary/20",
        get children() {
          return createComponent(Progress$1.Fill, {
            "class": "h-full w-[var(--kb-progress-fill-width)] bg-primary transition-all duration-350 ease data-[progress=complete]:bg-primary"
          });
        }
      })];
    }
  }));
};

const Tabs = (props) => {
  const [local, rest] = splitProps(props, ["class"]);
  return createComponent(Tabs$1, mergeProps({
    get ["class"]() {
      return cn("w-full data-[orientation=vertical]:flex", local.class);
    }
  }, rest));
};
const TabsList = (props) => {
  const [local, rest] = splitProps(props, ["class"]);
  return createComponent(Tabs$1.List, mergeProps({
    get ["class"]() {
      return cn("relative flex w-full rounded-lg bg-muted p-1 text-muted-foreground data-[orientation=vertical]:flex-col data-[orientation=horizontal]:items-center data-[orientation=vertical]:items-stretch", local.class);
    }
  }, rest));
};
const TabsContent = (props) => {
  const [local, rest] = splitProps(props, ["class"]);
  return createComponent(Tabs$1.Content, mergeProps({
    get ["class"]() {
      return cn("transition-shadow duration-200 focus-visible:outline-none focus-visible:ring-[1.5px] focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background data-[orientation=horizontal]:mt-2 data-[orientation=vertical]:ml-2", local.class);
    }
  }, rest));
};
const TabsTrigger = (props) => {
  const [local, rest] = splitProps(props, ["class"]);
  return createComponent(Tabs$1.Trigger, mergeProps({
    get ["class"]() {
      return cn("peer relative z-10 inline-flex h-7 w-full items-center justify-center whitespace-nowrap rounded-md px-3 py-1 text-sm font-medium outline-none transition-colors disabled:pointer-events-none disabled:opacity-50 data-[selected]:text-foreground", local.class);
    }
  }, rest));
};
const tabsIndicatorVariants = cva("absolute transition-all duration-200 outline-none", {
  variants: {
    variant: {
      block: "data-[orientation=horizontal]:bottom-1 data-[orientation=horizontal]:left-0 data-[orientation=vertical]:right-1 data-[orientation=vertical]:top-0 data-[orientation=horizontal]:h-[calc(100%-0.5rem)] data-[orientation=vertical]:w-[calc(100%-0.5rem)] bg-background shadow rounded-md peer-focus-visible:ring-[1.5px] peer-focus-visible:ring-ring peer-focus-visible:ring-offset-2 peer-focus-visible:ring-offset-background peer-focus-visible:outline-none",
      underline: "data-[orientation=horizontal]:-bottom-[1px] data-[orientation=horizontal]:left-0 data-[orientation=vertical]:-right-[1px] data-[orientation=vertical]:top-0 data-[orientation=horizontal]:h-[2px] data-[orientation=vertical]:w-[2px] bg-primary"
    }
  },
  defaultVariants: {
    variant: "block"
  }
});
const TabsIndicator = (props) => {
  const [local, rest] = splitProps(props, ["class", "variant"]);
  return createComponent(Tabs$1.Indicator, mergeProps({
    get ["class"]() {
      return cn(tabsIndicatorVariants({
        variant: local.variant
      }), local.class);
    }
  }, rest));
};

const TextArea = (props) => {
  const [local, rest] = splitProps(props, ["class"]);
  return createComponent(TextFieldTextArea, mergeProps({
    get ["class"]() {
      return cn("flex min-h-[60px] w-full rounded-md border border-input bg-transparent px-3 py-2 text-sm shadow-sm transition-shadow placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-[1.5px] focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50", local.class);
    }
  }, rest));
};

const Separator = (props) => {
  const [local, rest] = splitProps(props, ["class"]);
  return createComponent(Separator$1, mergeProps({
    get ["class"]() {
      return cn("shrink-0 bg-border data-[orientation=horizontal]:h-[1px] data-[orientation=vertical]:h-full data-[orientation=horizontal]:w-full data-[orientation=vertical]:w-[1px]", local.class);
    }
  }, rest));
};

function Register({
  email
} = {}) {
  return createComponent(Card, {
    "class": "border-none",
    get children() {
      return [createComponent(CardHeader, {
        get children() {
          return [createComponent(CardTitle, {
            children: "Register"
          }), createComponent(CardDescription, {
            children: "Enter your credentials to create your account."
          })];
        }
      }), createComponent(CardContent, {
        "class": "space-y-2",
        get children() {
          return [createComponent(TextFieldRoot, {
            "class": "space-y-1",
            get children() {
              return [createComponent(TextFieldLabel, {
                children: "Email"
              }), createComponent(TextField, {
                disabled: email,
                value: email || "",
                name: "email",
                required: true
              })];
            }
          }), createComponent(TextFieldRoot, {
            "class": "space-y-1",
            get children() {
              return [createComponent(TextFieldLabel, {
                children: "Password"
              }), createComponent(TextField, {
                name: "password",
                type: "password",
                required: true
              })];
            }
          }), createComponent(TextFieldRoot, {
            "class": "space-y-1",
            get children() {
              return [createComponent(TextFieldLabel, {
                children: "Confirm Password"
              }), createComponent(TextField, {
                name: "confirm-password",
                type: "password",
                required: true
              })];
            }
          })];
        }
      })];
    }
  });
}

var _tmpl$$4 = /* @__PURE__ */ template(`<div class=space-y-2><div class="text-left w-full text-sm font-medium">Award Categories</div><div class="grid grid-cols-2 gap-2">`), _tmpl$2$4 = /* @__PURE__ */ template(`<button type=button><span>`), _tmpl$3$4 = /* @__PURE__ */ template(`<span><svg xmlns=http://www.w3.org/2000/svg width=14 height=14 viewBox="0 0 24 24"fill=none stroke=currentColor stroke-width=2 stroke-linecap=round stroke-linejoin=round><circle cx=12 cy=12 r=10></circle><path d="M12 16v-4"></path><path d="M12 8h.01">`), _tmpl$4$4 = /* @__PURE__ */ template(`<div class="grid grid-cols-1 md:grid-cols-2 space-x-2"><div class=space-y-2></div><div class=space-y-2>`), _tmpl$5$4 = /* @__PURE__ */ template(`<div class=space-y-2>`), _tmpl$6$4 = /* @__PURE__ */ template(`<div class=space-y-4><h3 class="text-lg font-medium">Personal Information</h3><div class="grid grid-cols-1 md:grid-cols-2 gap-4"><div class=space-y-2></div><div class=space-y-2></div></div><div class=space-y-2></div><div class=space-y-2></div><div class="grid grid-cols-1 md:grid-cols-2 gap-4"><div class=space-y-2></div><div class=space-y-2></div><div class="space-y-2 col-span-2"></div><div class="space-y-2 col-span-2"></div><h3 class="text-lg font-medium col-span-2">Parent Information</h3><div class="flex flex-col col-span-2 gap-4"><div class="grid grid-cols-1 md:grid-cols-2 gap-2">`), _tmpl$7$4 = /* @__PURE__ */ template(`<div class="col-span-2 p-4 rounded-lg border border-amber-500/75 bg-transparent"><p class="font-semibold text-amber-500/80">Registration Managed by School</p><p class="text-sm text-amber-400/80 mt-1">Registration for <!> is managed by your school administrators. Please contact <!> to register.`), _tmpl$8$3 = /* @__PURE__ */ template(`<h3 class="text-lg font-medium">Join a Team`), _tmpl$9$3 = /* @__PURE__ */ template(`<div class=space-y-6>`), _tmpl$10$3 = /* @__PURE__ */ template(`<h3 class="text-lg font-medium">Team Information`), _tmpl$11$3 = /* @__PURE__ */ template(`<h3 class="text-lg font-medium">Work Alone`), _tmpl$12$3 = /* @__PURE__ */ template(`<h3 class="text-lg font-medium">Looking for a team`), _tmpl$13$3 = /* @__PURE__ */ template(`<p class="text-sm text-muted-foreground">By selecting this option, you will be able to join or create a team after registration.`), _tmpl$14$3 = /* @__PURE__ */ template(`<span class="text-sm text-gray-500">Leader:`), _tmpl$15$3 = /* @__PURE__ */ template(`<div class=text-center><p class=text-gray-500>No teams available`), _tmpl$16$3 = /* @__PURE__ */ template(`<div class=text-center><p class=text-gray-500>You have already requested to join a team:`), _tmpl$17$3 = /* @__PURE__ */ template(`<p><strong>First Name:</strong> `), _tmpl$18$3 = /* @__PURE__ */ template(`<p><strong>Last Name:</strong> `), _tmpl$19$3 = /* @__PURE__ */ template(`<p><strong>Email:</strong> `), _tmpl$20$2 = /* @__PURE__ */ template(`<p><strong>Phone:</strong> `), _tmpl$21$2 = /* @__PURE__ */ template(`<p><strong>School:</strong> `), _tmpl$22$2 = /* @__PURE__ */ template(`<p><strong>Major:</strong> `), _tmpl$23$2 = /* @__PURE__ */ template(`<p><strong>Grade:</strong> `), _tmpl$24$2 = /* @__PURE__ */ template(`<p><strong>T-Shirt Size:</strong> `), _tmpl$25$2 = /* @__PURE__ */ template(`<p><strong>Team Type:</strong> `), _tmpl$26$2 = /* @__PURE__ */ template(`<div class="flex flex-col"><div class="flex flex-row items-center gap-2 mb-1">`), _tmpl$27$2 = /* @__PURE__ */ template(`<div class=space-y-4><h3 class="text-lg font-medium">Review Registration</h3><div class="flex items-center space-x-2">`), _tmpl$28$2 = /* @__PURE__ */ template(`<p><strong>Team Name:</strong> `), _tmpl$29$2 = /* @__PURE__ */ template(`<p><strong>Project Idea:</strong> `), _tmpl$30$2 = /* @__PURE__ */ template(`<p><strong>Experience Level:</strong> `), _tmpl$31$2 = /* @__PURE__ */ template(`<p><strong>Team Size:</strong> `), _tmpl$32$2 = /* @__PURE__ */ template(`<p><strong>Categories:</strong> `), _tmpl$33$2 = /* @__PURE__ */ template(`<p><strong>Requesting Team:</strong> `), _tmpl$34$2 = /* @__PURE__ */ template(`<p><strong>Team Leader:</strong> `), _tmpl$35$2 = /* @__PURE__ */ template(`<p><strong>Work Alone:</strong> `), _tmpl$36$2 = /* @__PURE__ */ template(`<div class="grid grid-cols-1 sm:grid-cols-2 gap-4"><button class="flex flex-col items-center gap-3 p-6 rounded-lg border-2 border-zinc-200 hover:border-[#f5b700] hover:bg-[#f5b700]/5 transition-all text-center"><svg xmlns=http://www.w3.org/2000/svg width=32 height=32 viewBox="0 0 24 24"fill=none stroke=currentColor stroke-width=1.5 stroke-linecap=round stroke-linejoin=round><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><circle cx=9 cy=7 r=4></circle><line x1=19 y1=8 x2=19 y2=14></line><line x1=22 y1=11 x2=16 y2=11></line></svg><span class="text-lg font-semibold">New Registration</span><span class="text-sm text-muted-foreground">Create your account for the BT Hackathon</span></button><button><svg xmlns=http://www.w3.org/2000/svg width=32 height=32 viewBox="0 0 24 24"fill=none stroke=currentColor stroke-width=1.5 stroke-linecap=round stroke-linejoin=round><path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4"></path><polyline points="10 17 15 12 10 7"></polyline><line x1=15 y1=12 x2=3 y2=12></line></svg><span class="text-lg font-semibold">Sign In</span><span class="text-sm text-muted-foreground">Already have an account? Sign in to your dashboard`), _tmpl$37$2 = /* @__PURE__ */ template(`<div class="flex items-center justify-between flex-col gap-2 pb-2">`), _tmpl$38$2 = /* @__PURE__ */ template(`<form><div class=space-y-6><div class=space-y-4>`), _tmpl$39$2 = /* @__PURE__ */ template(`<div class="fixed inset-0 z-[9999] flex items-center justify-center"><div class="absolute inset-0 bg-black/50"></div><div class="relative bg-white border border-zinc-200 rounded-xl p-6 max-w-md w-full mx-4 shadow-2xl"><button class="absolute right-3 top-3 text-zinc-400 hover:text-zinc-600"><svg xmlns=http://www.w3.org/2000/svg width=18 height=18 viewBox="0 0 24 24"fill=none stroke=currentColor stroke-width=2 stroke-linecap=round stroke-linejoin=round><path d="M18 6 6 18"></path><path d="m6 6 12 12"></path></svg></button><h3 class="text-lg font-semibold text-zinc-900 mb-2"></h3><p class="text-sm text-zinc-600 leading-relaxed">`), _tmpl$40$2 = /* @__PURE__ */ template(`<main class="container mx-auto py-8 px-4"><div class="mt-8 text-center"><p class=text-muted-foreground>Questions? <a href=mailto:julbry26@bergen.org class="text-[#f5b700] hover:underline">Contact us`), _tmpl$41$2 = /* @__PURE__ */ template(`<span class="text-xs font-medium text-[#f5b700]">Welcome back`), _tmpl$42$2 = /* @__PURE__ */ template(`<p class="text-sm font-medium text-green-600 mb-2">Prize: $`);
const App = () => {
  const [schools, setSchools] = createSignal([]);
  const [majors, setMajors] = createSignal({});
  createEffect(() => {
    fetch("/api/schools").then((res) => res.json()).then((data2) => {
      setSchools(data2.schools);
      const majorsMap = {};
      data2.schools.forEach((school2) => {
        majorsMap[school2.value] = school2.majors;
      });
      setMajors(majorsMap);
    }).catch((err) => console.error(err));
  });
  const [availableCategories, setAvailableCategories] = createSignal([]);
  const [categoryInfoOpen, setCategoryInfoOpen] = createSignal(false);
  const [categoryInfoData, setCategoryInfoData] = createSignal(null);
  createEffect(() => {
    fetch("/api/categories").then((res) => res.json()).then((data2) => {
      setAvailableCategories(data2.categories);
    }).catch((err) => console.error(err));
  });
  const showCategoryInfo = (cat) => {
    setCategoryInfoData(cat);
    setCategoryInfoOpen(true);
  };
  const CategoryPicker = (props) => {
    const cats = () => props.categories || availableCategories() || [];
    return (() => {
      var _el$ = _tmpl$$4(), _el$2 = _el$.firstChild, _el$3 = _el$2.nextSibling;
      insert(_el$3, () => cats().map((cat) => {
        const isSelected = () => (props.selected || []).some((s) => s.value === cat.value);
        return (() => {
          var _el$4 = _tmpl$2$4(), _el$5 = _el$4.firstChild;
          _el$4.$$click = () => {
            if (isSelected()) {
              props.onChange((props.selected || []).filter((s) => s.value !== cat.value));
            } else {
              props.onChange([...props.selected || [], {
                value: cat.value,
                label: cat.label
              }]);
            }
          };
          insert(_el$5, () => cat.label, null);
          insert(_el$5, () => cat.prize ? ` ($${cat.prize})` : "", null);
          insert(_el$4, (() => {
            var _c$ = createMemo(() => !!cat.description);
            return () => _c$() && (() => {
              var _el$6 = _tmpl$3$4();
              _el$6.$$click = (e) => {
                e.stopPropagation();
                showCategoryInfo(cat);
              };
              createRenderEffect(() => className(_el$6, `ml-2 shrink-0 ${isSelected() ? "text-blue-200" : "text-zinc-400"}`));
              return _el$6;
            })();
          })(), null);
          createRenderEffect(() => className(_el$4, `flex items-center justify-between px-3 py-2 rounded-lg text-sm font-medium transition-all border ${isSelected() ? "bg-blue-600 text-white border-blue-500" : "bg-zinc-100 text-zinc-700 border-zinc-200 hover:bg-zinc-200"}`));
          return _el$4;
        })();
      }));
      return _el$;
    })();
  };
  let _data = {
    screen0: null,
    screen1: null
  };
  if (localStorage.getItem("screen0")) {
    _data.screen0 = JSON.parse(localStorage.getItem("screen0"));
  }
  if (localStorage.getItem("screen1")) {
    _data.screen1 = JSON.parse(localStorage.getItem("screen1"));
  }
  const [data, setData] = createSignal(_data);
  let [section, _setSection] = createSignal(0);
  const setSection = (value) => {
    _setSection(value);
    window.history.pushState(null, null, `#${value}`);
  };
  const [parents, setParents] = createSignal(data().screen0?.parents || 1);
  createSignal(data().screen0?.parent1FirstName || "");
  createSignal(data().screen0?.parent1LastName || "");
  createSignal(data().screen0?.parent1Email || "");
  createSignal(data().screen0?.parent1Phone || "");
  createSignal(data().screen0?.parent1Relationship || "");
  createSignal(data().screen0?.parent2FirstName || "");
  createSignal(data().screen0?.parent2LastName || "");
  createSignal(data().screen0?.parent2Email || "");
  createSignal(data().screen0?.parent2Phone || "");
  createSignal(data().screen0?.parent2Relationship || "");
  const [email, setEmail] = createSignal(data().screen0?.email || "");
  const [school, setSchool] = createSignal(data().screen0?.school);
  const [major, setMajor] = createSignal(data().screen0?.major);
  const [grade, setGrade] = createSignal(data().screen0?.grade);
  const [shirt, setShirt] = createSignal(data().screen0?.shirt);
  const [checkbox3, setCheckbox3] = createSignal(null);
  const [teamType, setTeamType] = createSignal(data().screen1?.teamType || "join");
  const [memberCount, setMemberCount] = createSignal(data().screen1?.teamInformation?.memberCount);
  const [experience, setExperience] = createSignal(data().screen1?.teamInformation?.experience);
  const [categories, setCategories] = createSignal(data().screen1?.teamInformation?.categories);
  const [showNext, _setShowNext] = createSignal(true);
  const setShowNext = (value) => {
    console.trace(value);
    _setShowNext(value);
  };
  const [unlocked, setUnlocked] = createSignal([false, false, false, false].map((_, i) => i <= section()));
  const [_teams, _setTeams] = createSignal([]);
  const [teams, setTeams] = createSignal([]);
  const [searchTeam, setSearchTeam] = createSignal("");
  const [joinRequest, setJoinRequest] = createSignal(null);
  const [mode, setMode] = createSignal(null);
  const [selfRegBlocked, setSelfRegBlocked] = createSignal(null);
  createEffect(() => {
    const selectedSchool = school();
    if (selectedSchool && schools().length > 0) {
      const schoolData = schools().find((s) => s.value === selectedSchool.value);
      if (schoolData && schoolData.allowSelfRegistration === false) {
        const adminContacts = schoolData.admins?.map((a) => a.user?.email).filter(Boolean).join(", ") || "your school administrator";
        setSelfRegBlocked({
          schoolLabel: schoolData.label,
          adminContacts
        });
      } else {
        setSelfRegBlocked(null);
      }
    } else {
      setSelfRegBlocked(null);
    }
  });
  createEffect(() => {
    setTeams(_teams().filter((team) => {
      if (searchTeam() === "") {
        return true;
      }
      return team.name.toLowerCase().includes(searchTeam().toLowerCase()) || team.members.find((member) => member.name.toLowerCase().includes(searchTeam().toLowerCase()));
    }));
  });
  const switchToSection = (i) => {
    let j = section();
    console.log(i, j);
    while (j < sections.length - 1) {
      let _s = section();
      console.log(_s);
      let _a = window.alert;
      window.alert = () => {
      };
      document.querySelector("form")?.requestSubmit();
      window.alert = _a;
      if (section() === _s) {
        setUnlocked(unlocked().map((_, i2) => i2 <= j));
        console.log("section", i, j);
        if (i > j) {
          i = j;
        }
        break;
      }
      j++;
    }
    if (i === 1 && teamType() === "join") {
      setShowNext(false);
    } else {
      setShowNext(true);
    }
    setSection(i);
    window.scrollTo(0, 0);
  };
  createEffect(() => {
    fetch("/api/check-login").then((res) => res.json()).then((data2) => {
      if (data2.loggedIn) {
        return location.href = "/signup/dashboard";
      }
      if (window.location.hash && parseInt(window.location.hash.replace("#", "")) === 4) {
        location.hash = "";
        setMode("login");
        return;
      }
      if (localStorage.getItem("screen0")) {
        setMode("login");
        return;
      }
      switchToSection(window.location.hash ? parseInt(window.location.hash.replace("#", "")) : 0);
    }).catch((err) => {
      console.error(err);
    });
    fetch("/api/teams").then((res) => res.json()).then((data2) => {
      _setTeams(data2.teams);
    });
  });
  const sections = [() => (() => {
    var _el$7 = _tmpl$6$4(), _el$8 = _el$7.firstChild, _el$9 = _el$8.nextSibling, _el$10 = _el$9.firstChild, _el$11 = _el$10.nextSibling, _el$12 = _el$9.nextSibling, _el$13 = _el$12.nextSibling, _el$14 = _el$13.nextSibling, _el$15 = _el$14.firstChild, _el$16 = _el$15.nextSibling, _el$17 = _el$16.nextSibling, _el$18 = _el$17.nextSibling, _el$19 = _el$18.nextSibling, _el$20 = _el$19.nextSibling, _el$27 = _el$20.firstChild;
    insert(_el$10, createComponent(TextFieldRoot, {
      get children() {
        return [createComponent(TextFieldLabel, {
          htmlFor: "first-name",
          children: "First Name"
        }), createComponent(TextField, {
          id: "first-name",
          name: "first-name",
          get value() {
            return data().screen0?.["first-name"];
          },
          placeholder: "John",
          required: true
        })];
      }
    }));
    insert(_el$11, createComponent(TextFieldRoot, {
      get children() {
        return [createComponent(TextFieldLabel, {
          htmlFor: "last-name",
          children: "Last Name"
        }), createComponent(TextField, {
          id: "last-name",
          name: "last-name",
          get value() {
            return data().screen0?.["last-name"];
          },
          placeholder: "Doe",
          required: true
        })];
      }
    }));
    insert(_el$12, createComponent(TextFieldRoot, {
      get children() {
        return [createComponent(TextFieldLabel, {
          htmlFor: "email",
          children: "Email Address"
        }), createComponent(TextField, {
          id: "email",
          type: "email",
          name: "email",
          get value() {
            return email();
          },
          onInput: (e) => setEmail(e.target.value),
          placeholder: "john.doe@example.com",
          required: true
        })];
      }
    }));
    insert(_el$13, createComponent(TextFieldRoot, {
      get children() {
        return [createComponent(TextFieldLabel, {
          children: "Phone Number"
        }), createComponent(TextField, {
          id: "phone",
          type: "tel",
          name: "phone",
          get value() {
            return data().screen0?.phone;
          },
          placeholder: "+1 (201) 555-0123",
          "on:keydown": (e) => {
            if (e.key === "ArrowRight" || e.key === "ArrowLeft" || e.key === "Tab" || e.key === "Enter") {
              return;
            }
            e.preventDefault();
            let val = e.target._value || "";
            if (!e.target._value) {
              e.target._value = "";
            }
            let pos = ((oField) => {
              var iCaretPos = 0;
              if (document.selection) {
                oField.focus();
                var oSel = document.selection.createRange();
                oSel.moveStart("character", -oField.value.length);
                iCaretPos = oSel.text.length;
              } else if (oField.selectionStart || oField.selectionStart == "0") iCaretPos = oField.selectionDirection == "backward" ? oField.selectionStart : oField.selectionEnd;
              return iCaretPos;
            })(e.target);
            console.log("pos", pos);
            let _pos = pos;
            if (pos <= 4) {
              console.log("in the region code");
              pos = 0;
              _pos = 4;
            } else if (pos > 4 && pos < (5 + val.length > 8 ? 8 : 5 + val.length)) {
              console.log("deleting region code");
              pos = pos - 4;
            } else if (pos == 5 + (val.length > 3 ? 3 : val.length) || pos == (val.length > 3 ? 9 : 6 + val.length)) {
              if (val.length < 3) {
                console.log("area after region code, short");
                pos = val.length - 1 || 1;
              } else {
                console.log("area after region code");
                pos = 3;
              }
            } else if (pos > 9 && pos < 13) {
              console.log("second part of number");
              pos = pos - 6;
            } else if (pos == 13) {
              console.log("area after second part of number");
              pos = 6;
            } else if (pos > 13 && pos < 18) {
              console.log("third part of number");
              pos = pos - 7;
            } else if (pos > 18) {
              console.log("area after fourth part of number");
              pos = pos - 8;
            } else if (e.key === " ") {
              return;
            }
            console.log("new pos", pos, _pos);
            if (e.key.match(/[0-9]/)) {
              if (val.length === 10) {
                return;
              }
              if (val.length === 0 && _pos === 0) {
                _pos += 5;
              } else {
                _pos += 1;
              }
              val = val.slice(0, pos) + e.key + val.slice(pos);
              if (val.length >= 3 && _pos === 7) {
                _pos += 2;
              }
              if (val.length >= 6 && _pos === 11) {
                _pos += 1;
              }
              if (val.length === 7) {
                _pos += 1;
              }
              e.target._value = val;
              e.target.value = val.replace(/^([0-9]{1,3})([0-9]{1,3})?([0-9]{1,4})?$/, (match, p1, p2, p3) => {
                let final = "";
                if (p1) final += `+1 (${p1}) `;
                if (p2) final += `${p2}`;
                if (p3) final += `-${p3}`;
                return final;
              });
            }
            if (e.key === "Backspace") {
              if (pos === 0) {
                return;
              }
              if (val.length > 3 && _pos === 9) {
                _pos -= 2;
              } else if (val.length > 3 && _pos === 8) {
                _pos -= 1;
              }
              if (val.length > 6 && _pos === 13) {
                _pos -= 1;
              }
              val = val.slice(0, pos - 1) + val.slice(pos);
              _pos -= 1;
              e.target._value = val;
              e.target.value = val.replace(/^([0-9]{1,3})([0-9]{1,3})?([0-9]{1,4})?$/, (match, p1, p2, p3) => {
                let final = "";
                if (p1) final += `+1 (${p1})`;
                if (p2) final += ` ${p2}`;
                if (p3) final += `-${p3}`;
                return final;
              });
            }
            if (e.key === "Delete") {
              val = val.slice(0, pos) + val.slice(pos + 1);
              _pos = _pos;
              e.target._value = val;
              e.target.value = val.replace(/^([0-9]{1,3})([0-9]{1,3})?([0-9]{1,4})?$/, (match, p1, p2, p3) => {
                let final = "";
                if (p1) final += `+1 (${p1})`;
                if (p2) final += ` ${p2}`;
                if (p3) final += `-${p3}`;
                return final;
              });
            }
            e.target.setSelectionRange(_pos, _pos);
            e.target.focus();
          },
          "on:input": (e) => {
            if (e.target._value !== void 0 && e.target._value !== "") return;
            const raw = e.target.value.replace(/\D/g, "").replace(/^1/, "").slice(0, 10);
            if (raw.length === 0) return;
            e.target._value = raw;
            e.target.value = raw.replace(/^([0-9]{1,3})([0-9]{1,3})?([0-9]{1,4})?$/, (match, p1, p2, p3) => {
              let final = "";
              if (p1) final += `+1 (${p1})`;
              if (p2) final += ` ${p2}`;
              if (p3) final += `-${p3}`;
              return final;
            });
          }
        })];
      }
    }));
    insert(_el$15, createComponent(Select, {
      required: true,
      get options() {
        return schools();
      },
      label: "School",
      optionValue: "value",
      optionTextValue: "label",
      placeholder: "Select your school",
      itemComponent: (props) => createComponent(SelectItem, {
        get item() {
          return props.item;
        },
        get children() {
          return props.item.rawValue.label;
        }
      }),
      get value() {
        return school();
      },
      onChange: (checked) => {
        if (checked) {
          setSchool(checked);
        } else {
          setSchool(null);
        }
      },
      get children() {
        return [createComponent(SelectLabel, {
          htmlFor: "school",
          children: "School"
        }), createComponent(SelectTrigger, {
          id: "experience",
          get children() {
            return createComponent(SelectValue, {
              children: (state) => state.selectedOption()?.label
            });
          }
        }), createComponent(SelectContent, {})];
      }
    }));
    insert(_el$16, createComponent(Select, {
      required: true,
      get options() {
        return majors()[school()?.value] || [];
      },
      get disabled() {
        return !school();
      },
      get value() {
        return major();
      },
      label: "Major",
      optionValue: "value",
      optionTextValue: "label",
      placeholder: "Select your major",
      itemComponent: (props) => createComponent(SelectItem, {
        get item() {
          return props.item;
        },
        get children() {
          return props.item.rawValue.label;
        }
      }),
      onChange: (checked) => {
        if (checked) {
          setMajor(checked);
        } else {
          setMajor(null);
        }
      },
      get children() {
        return [createComponent(SelectLabel, {
          htmlFor: "school",
          children: "Major"
        }), createComponent(SelectTrigger, {
          id: "experience",
          get children() {
            return createComponent(SelectValue, {
              children: (state) => state.selectedOption()?.label
            });
          }
        }), createComponent(SelectContent, {})];
      }
    }));
    insert(_el$14, (() => {
      var _c$2 = createMemo(() => !!selfRegBlocked());
      return () => _c$2() && (() => {
        var _el$28 = _tmpl$7$4(), _el$29 = _el$28.firstChild, _el$30 = _el$29.nextSibling, _el$31 = _el$30.firstChild, _el$34 = _el$31.nextSibling, _el$32 = _el$34.nextSibling, _el$35 = _el$32.nextSibling; _el$35.nextSibling;
        insert(_el$30, () => selfRegBlocked().schoolLabel, _el$34);
        insert(_el$30, () => selfRegBlocked().adminContacts, _el$35);
        return _el$28;
      })();
    })(), _el$17);
    insert(_el$17, createComponent(Select, {
      required: true,
      options: [{
        value: "9",
        label: "Freshman"
      }, {
        value: "10",
        label: "Sophomore"
      }, {
        value: "11",
        label: "Junior"
      }, {
        value: "12",
        label: "Senior"
      }],
      label: "Grade/Year",
      optionValue: "value",
      get disabled() {
        return !school();
      },
      get value() {
        return grade();
      },
      optionTextValue: "label",
      placeholder: "Select your grade",
      itemComponent: (props) => createComponent(SelectItem, {
        get item() {
          return props.item;
        },
        get children() {
          return props.item.rawValue.label;
        }
      }),
      onChange: (checked) => {
        if (checked) {
          setGrade(checked);
        } else {
          setGrade(null);
        }
      },
      get children() {
        return [createComponent(SelectLabel, {
          htmlFor: "school",
          children: "Grade"
        }), createComponent(SelectTrigger, {
          id: "experience",
          get children() {
            return createComponent(SelectValue, {
              children: (state) => state.selectedOption()?.label
            });
          }
        }), createComponent(SelectContent, {})];
      }
    }));
    insert(_el$18, createComponent(Select, {
      required: true,
      options: [{
        value: "xs",
        label: "XS"
      }, {
        value: "s",
        label: "S"
      }, {
        value: "m",
        label: "M"
      }, {
        value: "l",
        label: "L"
      }, {
        value: "xl",
        label: "XL"
      }],
      label: "Shirt Size",
      optionValue: "value",
      optionTextValue: "label",
      get value() {
        return shirt();
      },
      placeholder: "Select your T-shirt size",
      itemComponent: (props) => createComponent(SelectItem, {
        get item() {
          return props.item;
        },
        get children() {
          return props.item.rawValue.label;
        }
      }),
      onChange: (checked) => {
        if (checked) {
          setShirt(checked);
        } else {
          setShirt(null);
        }
      },
      get children() {
        return [createComponent(SelectLabel, {
          htmlFor: "school",
          children: "T-Shirt Size"
        }), createComponent(SelectTrigger, {
          id: "experience",
          get children() {
            return createComponent(SelectValue, {
              children: (state) => state.selectedOption()?.label
            });
          }
        }), createComponent(SelectContent, {})];
      }
    }));
    insert(_el$20, createComponent(Card, {
      get children() {
        return [createComponent(CardHeader, {
          "class": "",
          get children() {
            return createComponent(CardTitle, {
              children: "Parent 1"
            });
          }
        }), createComponent(CardContent, {
          "class": "space-y-2",
          get children() {
            return [(() => {
              var _el$21 = _tmpl$4$4(), _el$22 = _el$21.firstChild, _el$23 = _el$22.nextSibling;
              insert(_el$22, createComponent(TextFieldRoot, {
                get children() {
                  return [createComponent(TextFieldLabel, {
                    htmlFor: "parent1-first-name",
                    children: "First Name"
                  }), createComponent(TextField, {
                    id: "parent1-first-name",
                    name: "parent1-first-name",
                    get value() {
                      return data().screen0?.["parent1-first-name"];
                    },
                    placeholder: "Jane",
                    required: true
                  })];
                }
              }));
              insert(_el$23, createComponent(TextFieldRoot, {
                get children() {
                  return [createComponent(TextFieldLabel, {
                    htmlFor: "parent1-last-name",
                    children: "Last Name"
                  }), createComponent(TextField, {
                    id: "parent1-last-name",
                    name: "parent1-last-name",
                    get value() {
                      return data().screen0?.["parent1-last-name"];
                    },
                    placeholder: "Doe",
                    required: true
                  })];
                }
              }));
              return _el$21;
            })(), (() => {
              var _el$24 = _tmpl$5$4();
              insert(_el$24, createComponent(TextFieldRoot, {
                get children() {
                  return [createComponent(TextFieldLabel, {
                    htmlFor: "parent1-email",
                    children: "Email Address"
                  }), createComponent(TextField, {
                    id: "parent1-email",
                    type: "email",
                    name: "parent1-email",
                    get value() {
                      return data().screen0?.["parent1-email"];
                    },
                    placeholder: "jane.doe@example.com",
                    required: true
                  })];
                }
              }));
              return _el$24;
            })(), (() => {
              var _el$25 = _tmpl$5$4();
              insert(_el$25, createComponent(TextFieldRoot, {
                get children() {
                  return [createComponent(TextFieldLabel, {
                    htmlFor: "parent1-phone",
                    children: "Phone Number"
                  }), createComponent(TextField, {
                    id: "parent1-phone",
                    type: "tel",
                    name: "parent1-phone",
                    required: true,
                    get value() {
                      return data().screen0?.["parent1-phone"];
                    },
                    placeholder: "+1 (201) 555-0123",
                    "on:keydown": (e) => {
                      if (e.key === "ArrowRight" || e.key === "ArrowLeft" || e.key === "Tab" || e.key === "Enter") {
                        return;
                      }
                      e.preventDefault();
                      let val = e.target._value || "";
                      if (!e.target._value) {
                        e.target._value = "";
                      }
                      let pos = ((oField) => {
                        var iCaretPos = 0;
                        if (document.selection) {
                          oField.focus();
                          var oSel = document.selection.createRange();
                          oSel.moveStart("character", -oField.value.length);
                          iCaretPos = oSel.text.length;
                        } else if (oField.selectionStart || oField.selectionStart == "0") iCaretPos = oField.selectionDirection == "backward" ? oField.selectionStart : oField.selectionEnd;
                        return iCaretPos;
                      })(e.target);
                      console.log("pos", pos);
                      let _pos = pos;
                      if (pos <= 4) {
                        console.log("in the region code");
                        pos = 0;
                        _pos = 4;
                      } else if (pos > 4 && pos < (5 + val.length > 8 ? 8 : 5 + val.length)) {
                        console.log("deleting region code");
                        pos = pos - 4;
                      } else if (pos == 5 + (val.length > 3 ? 3 : val.length) || pos == (val.length > 3 ? 9 : 6 + val.length)) {
                        if (val.length < 3) {
                          console.log("area after region code, short");
                          pos = val.length - 1 || 1;
                        } else {
                          console.log("area after region code");
                          pos = 3;
                        }
                      } else if (pos > 9 && pos < 13) {
                        console.log("second part of number");
                        pos = pos - 6;
                      } else if (pos == 13) {
                        console.log("area after second part of number");
                        pos = 6;
                      } else if (pos > 13 && pos < 18) {
                        console.log("third part of number");
                        pos = pos - 7;
                      } else if (pos > 18) {
                        console.log("area after fourth part of number");
                        pos = pos - 8;
                      } else if (e.key === " ") {
                        return;
                      }
                      console.log("new pos", pos, _pos);
                      if (e.key.match(/[0-9]/)) {
                        if (val.length === 10) {
                          return;
                        }
                        if (val.length === 0 && _pos === 0) {
                          _pos += 5;
                        } else {
                          _pos += 1;
                        }
                        val = val.slice(0, pos) + e.key + val.slice(pos);
                        if (val.length >= 3 && _pos === 7) {
                          _pos += 2;
                        }
                        if (val.length >= 6 && _pos === 11) {
                          _pos += 1;
                        }
                        if (val.length === 7) {
                          _pos += 1;
                        }
                        e.target._value = val;
                        e.target.value = val.replace(/^([0-9]{1,3})([0-9]{1,3})?([0-9]{1,4})?$/, (match, p1, p2, p3) => {
                          let final = "";
                          if (p1) final += `+1 (${p1}) `;
                          if (p2) final += `${p2}`;
                          if (p3) final += `-${p3}`;
                          return final;
                        });
                      }
                      if (e.key === "Backspace") {
                        if (pos === 0) {
                          return;
                        }
                        if (val.length > 3 && _pos === 9) {
                          _pos -= 2;
                        } else if (val.length > 3 && _pos === 8) {
                          _pos -= 1;
                        }
                        if (val.length > 6 && _pos === 13) {
                          _pos -= 1;
                        }
                        val = val.slice(0, pos - 1) + val.slice(pos);
                        _pos -= 1;
                        e.target._value = val;
                        e.target.value = val.replace(/^([0-9]{1,3})([0-9]{1,3})?([0-9]{1,4})?$/, (match, p1, p2, p3) => {
                          let final = "";
                          if (p1) final += `+1 (${p1})`;
                          if (p2) final += ` ${p2}`;
                          if (p3) final += `-${p3}`;
                          return final;
                        });
                      }
                      if (e.key === "Delete") {
                        val = val.slice(0, pos) + val.slice(pos + 1);
                        _pos = _pos;
                        e.target._value = val;
                        e.target.value = val.replace(/^([0-9]{1,3})([0-9]{1,3})?([0-9]{1,4})?$/, (match, p1, p2, p3) => {
                          let final = "";
                          if (p1) final += `+1 (${p1})`;
                          if (p2) final += ` ${p2}`;
                          if (p3) final += `-${p3}`;
                          return final;
                        });
                      }
                      e.target.setSelectionRange(_pos, _pos);
                      e.target.focus();
                    },
                    "on:input": (e) => {
                      if (e.target._value !== void 0 && e.target._value !== "") return;
                      const raw = e.target.value.replace(/\D/g, "").replace(/^1/, "").slice(0, 10);
                      if (raw.length === 0) return;
                      e.target._value = raw;
                      e.target.value = raw.replace(/^([0-9]{1,3})([0-9]{1,3})?([0-9]{1,4})?$/, (match, p1, p2, p3) => {
                        let final = "";
                        if (p1) final += `+1 (${p1})`;
                        if (p2) final += ` ${p2}`;
                        if (p3) final += `-${p3}`;
                        return final;
                      });
                    }
                  })];
                }
              }));
              return _el$25;
            })(), (() => {
              var _el$26 = _tmpl$5$4();
              insert(_el$26, createComponent(TextFieldRoot, {
                get children() {
                  return [createComponent(TextFieldLabel, {
                    htmlFor: "parent1-relationship",
                    children: "Relationship to Student"
                  }), createComponent(TextField, {
                    id: "parent1-relationship",
                    name: "parent1-relationship",
                    get value() {
                      return data().screen0?.["parent1-relationship"];
                    },
                    placeholder: "Mother, Father, Guardian, etc.",
                    required: true
                  })];
                }
              }));
              return _el$26;
            })()];
          }
        })];
      }
    }), _el$27);
    insert(_el$20, (() => {
      var _c$3 = createMemo(() => parents() === 2);
      return () => _c$3() && createComponent(Card, {
        get children() {
          return [createComponent(CardHeader, {
            "class": "",
            get children() {
              return createComponent(CardTitle, {
                children: "Parent 2"
              });
            }
          }), createComponent(CardContent, {
            "class": "space-y-2",
            get children() {
              return [(() => {
                var _el$36 = _tmpl$4$4(), _el$37 = _el$36.firstChild, _el$38 = _el$37.nextSibling;
                insert(_el$37, createComponent(TextFieldRoot, {
                  get children() {
                    return [createComponent(TextFieldLabel, {
                      htmlFor: "parent2-first-name",
                      children: "First Name"
                    }), createComponent(TextField, {
                      id: "parent2-first-name",
                      name: "parent2-first-name",
                      get value() {
                        return data().screen0?.["parent2-first-name"];
                      },
                      placeholder: "Jane",
                      required: true
                    })];
                  }
                }));
                insert(_el$38, createComponent(TextFieldRoot, {
                  get children() {
                    return [createComponent(TextFieldLabel, {
                      htmlFor: "parent2-last-name",
                      children: "Last Name"
                    }), createComponent(TextField, {
                      id: "parent2-last-name",
                      name: "parent2-last-name",
                      get value() {
                        return data().screen0?.["parent2-last-name"];
                      },
                      placeholder: "Doe",
                      required: true
                    })];
                  }
                }));
                return _el$36;
              })(), (() => {
                var _el$39 = _tmpl$5$4();
                insert(_el$39, createComponent(TextFieldRoot, {
                  get children() {
                    return [createComponent(TextFieldLabel, {
                      htmlFor: "parent2-email",
                      children: "Email Address"
                    }), createComponent(TextField, {
                      id: "parent2-email",
                      type: "email",
                      name: "parent2-email",
                      get value() {
                        return data().screen0?.["parent2-email"];
                      },
                      placeholder: "jane.doe@example.com",
                      required: true
                    })];
                  }
                }));
                return _el$39;
              })(), (() => {
                var _el$40 = _tmpl$5$4();
                insert(_el$40, createComponent(TextFieldRoot, {
                  get children() {
                    return [createComponent(TextFieldLabel, {
                      htmlFor: "parentw-phone",
                      children: "Phone Number"
                    }), createComponent(TextField, {
                      id: "parent2-phone",
                      type: "tel",
                      name: "parent2-phone",
                      required: true,
                      get value() {
                        return data().screen0?.["parent2-phone"];
                      },
                      placeholder: "+1 (201) 555-0123",
                      "on:keydown": (e) => {
                        if (e.key === "ArrowRight" || e.key === "ArrowLeft" || e.key === "Tab" || e.key === "Enter") {
                          return;
                        }
                        e.preventDefault();
                        let val = e.target._value || "";
                        if (!e.target._value) {
                          e.target._value = "";
                        }
                        let pos = ((oField) => {
                          var iCaretPos = 0;
                          if (document.selection) {
                            oField.focus();
                            var oSel = document.selection.createRange();
                            oSel.moveStart("character", -oField.value.length);
                            iCaretPos = oSel.text.length;
                          } else if (oField.selectionStart || oField.selectionStart == "0") iCaretPos = oField.selectionDirection == "backward" ? oField.selectionStart : oField.selectionEnd;
                          return iCaretPos;
                        })(e.target);
                        console.log("pos", pos);
                        let _pos = pos;
                        if (pos <= 4) {
                          console.log("in the region code");
                          pos = 0;
                          _pos = 4;
                        } else if (pos > 4 && pos < (5 + val.length > 8 ? 8 : 5 + val.length)) {
                          console.log("deleting region code");
                          pos = pos - 4;
                        } else if (pos == 5 + (val.length > 3 ? 3 : val.length) || pos == (val.length > 3 ? 9 : 6 + val.length)) {
                          if (val.length < 3) {
                            console.log("area after region code, short");
                            pos = val.length - 1 || 1;
                          } else {
                            console.log("area after region code");
                            pos = 3;
                          }
                        } else if (pos > 9 && pos < 13) {
                          console.log("second part of number");
                          pos = pos - 6;
                        } else if (pos == 13) {
                          console.log("area after second part of number");
                          pos = 6;
                        } else if (pos > 13 && pos < 18) {
                          console.log("third part of number");
                          pos = pos - 7;
                        } else if (pos > 18) {
                          console.log("area after fourth part of number");
                          pos = pos - 8;
                        } else if (e.key === " ") {
                          return;
                        }
                        console.log("new pos", pos, _pos);
                        if (e.key.match(/[0-9]/)) {
                          if (val.length === 10) {
                            return;
                          }
                          if (val.length === 0 && _pos === 0) {
                            _pos += 5;
                          } else {
                            _pos += 1;
                          }
                          val = val.slice(0, pos) + e.key + val.slice(pos);
                          if (val.length >= 3 && _pos === 7) {
                            _pos += 2;
                          }
                          if (val.length >= 6 && _pos === 11) {
                            _pos += 1;
                          }
                          if (val.length === 7) {
                            _pos += 1;
                          }
                          e.target._value = val;
                          e.target.value = val.replace(/^([0-9]{1,3})([0-9]{1,3})?([0-9]{1,4})?$/, (match, p1, p2, p3) => {
                            let final = "";
                            if (p1) final += `+1 (${p1}) `;
                            if (p2) final += `${p2}`;
                            if (p3) final += `-${p3}`;
                            return final;
                          });
                        }
                        if (e.key === "Backspace") {
                          if (pos === 0) {
                            return;
                          }
                          if (val.length > 3 && _pos === 9) {
                            _pos -= 2;
                          } else if (val.length > 3 && _pos === 8) {
                            _pos -= 1;
                          }
                          if (val.length > 6 && _pos === 13) {
                            _pos -= 1;
                          }
                          val = val.slice(0, pos - 1) + val.slice(pos);
                          _pos -= 1;
                          e.target._value = val;
                          e.target.value = val.replace(/^([0-9]{1,3})([0-9]{1,3})?([0-9]{1,4})?$/, (match, p1, p2, p3) => {
                            let final = "";
                            if (p1) final += `+1 (${p1})`;
                            if (p2) final += ` ${p2}`;
                            if (p3) final += `-${p3}`;
                            return final;
                          });
                        }
                        if (e.key === "Delete") {
                          val = val.slice(0, pos) + val.slice(pos + 1);
                          _pos = _pos;
                          e.target._value = val;
                          e.target.value = val.replace(/^([0-9]{1,3})([0-9]{1,3})?([0-9]{1,4})?$/, (match, p1, p2, p3) => {
                            let final = "";
                            if (p1) final += `+1 (${p1})`;
                            if (p2) final += ` ${p2}`;
                            if (p3) final += `-${p3}`;
                            return final;
                          });
                        }
                        e.target.setSelectionRange(_pos, _pos);
                        e.target.focus();
                      },
                      "on:input": (e) => {
                        if (e.target._value !== void 0 && e.target._value !== "") return;
                        const raw = e.target.value.replace(/\D/g, "").replace(/^1/, "").slice(0, 10);
                        if (raw.length === 0) return;
                        e.target._value = raw;
                        e.target.value = raw.replace(/^([0-9]{1,3})([0-9]{1,3})?([0-9]{1,4})?$/, (match, p1, p2, p3) => {
                          let final = "";
                          if (p1) final += `+1 (${p1})`;
                          if (p2) final += ` ${p2}`;
                          if (p3) final += `-${p3}`;
                          return final;
                        });
                      }
                    })];
                  }
                }));
                return _el$40;
              })(), (() => {
                var _el$41 = _tmpl$5$4();
                insert(_el$41, createComponent(TextFieldRoot, {
                  get children() {
                    return [createComponent(TextFieldLabel, {
                      htmlFor: "parent2-relationship",
                      children: "Relationship to Student"
                    }), createComponent(TextField, {
                      id: "parent2-relationship",
                      name: "parent2-relationship",
                      get value() {
                        return data().screen0?.["parent2-relationship"];
                      },
                      placeholder: "Mother, Father, Guardian, etc.",
                      required: true
                    })];
                  }
                }));
                return _el$41;
              })()];
            }
          })];
        }
      });
    })(), _el$27);
    insert(_el$27, createComponent(Button, {
      onClick: () => {
        setParents(2);
      },
      get disabled() {
        return parents() === 2;
      },
      children: "Add Another Parent"
    }), null);
    insert(_el$27, createComponent(Button, {
      variant: "secondary",
      onClick: () => {
        setParents(1);
      },
      get disabled() {
        return parents() === 1;
      },
      children: "Remove Parent"
    }), null);
    return _el$7;
  })(), () => createComponent(Tabs, {
    defaultValue: "join",
    "class": "w-full",
    onChange: (e) => {
      if (joinRequest() === null) {
        setTeamType(e);
      } else {
        setTeamType("join");
        alert("Please cancel your team join request before switching to another option.");
      }
      if (e === "join") {
        setShowNext(false);
      } else {
        setShowNext(true);
      }
    },
    get value() {
      return teamType();
    },
    get children() {
      return [createComponent(TabsList, {
        get children() {
          return [createComponent(TabsTrigger, {
            value: "join",
            children: "Join a Team"
          }), createComponent(TabsTrigger, {
            value: "create",
            children: "Create a Team"
          }), createComponent(TabsTrigger, {
            value: "solo",
            children: "Work Alone"
          }), createComponent(TabsTrigger, {
            value: "search",
            children: "Looking for Team"
          }), createComponent(TabsIndicator, {})];
        }
      }), createComponent(TabsContent, {
        value: "join",
        "class": "space-y-4",
        get children() {
          return [_tmpl$8$3(), (() => {
            var _el$43 = _tmpl$9$3();
            insert(_el$43, (() => {
              var _c$4 = createMemo(() => joinRequest() === null);
              return () => _c$4() ? createMemo(() => teams().length > 0)() ? [createComponent(TextFieldRoot, {
                get children() {
                  return [createComponent(TextFieldLabel, {
                    htmlFor: "team-search",
                    children: "Search for a Team"
                  }), createComponent(TextField, {
                    id: "team-search",
                    placeholder: "Enter team name or member name",
                    name: "team-search",
                    get value() {
                      return searchTeam();
                    },
                    onInput: (e) => {
                      setSearchTeam(e.target.value);
                    }
                  })];
                }
              }), createMemo(() => teams().map((team) => createComponent(Card, {
                "class": "w-auto md:col-span-1 p-3",
                get children() {
                  return [createComponent(CardHeader, {
                    "class": "p-3",
                    get children() {
                      return [createComponent(CardTitle, {
                        get children() {
                          return team.name;
                        }
                      }), createComponent(CardDescription, {
                        get children() {
                          return [createMemo(() => team.members.length), " member", createMemo(() => team.members.length == 1 ? "" : "s")];
                        }
                      })];
                    }
                  }), createComponent(CardContent, {
                    "class": "flex flex-col p-3",
                    get children() {
                      return [_tmpl$14$3(), createMemo(() => team.members.find((member) => member.id === team.leaderId).name)];
                    }
                  }), createComponent(CardFooter, {
                    "class": "p-3",
                    get children() {
                      return createComponent(Button, {
                        onClick: () => {
                          setJoinRequest(team);
                          document.querySelector("form").requestSubmit();
                        },
                        "class": "w-full h-full",
                        children: "Request"
                      });
                    }
                  })];
                }
              })))] : _tmpl$15$3() : (setShowNext(true), (() => {
                var _el$57 = _tmpl$16$3(); _el$57.firstChild;
                insert(_el$57, createComponent(Card, {
                  "class": "text-left w-auto md:col-span-1 p-3 mt-2",
                  get children() {
                    return [createComponent(CardHeader, {
                      "class": "p-3",
                      get children() {
                        return [createComponent(CardTitle, {
                          get children() {
                            return joinRequest().name;
                          }
                        }), createComponent(CardDescription, {
                          get children() {
                            return [createMemo(() => joinRequest().members.length), " member", createMemo(() => joinRequest().members.length == 1 ? "" : "s")];
                          }
                        })];
                      }
                    }), createComponent(CardContent, {
                      "class": "flex flex-col p-3",
                      get children() {
                        return [_tmpl$14$3(), createMemo(() => joinRequest().members.find((member) => member.id === joinRequest().leaderId).name)];
                      }
                    }), createComponent(CardFooter, {
                      "class": "p-3",
                      get children() {
                        return createComponent(Button, {
                          onClick: () => {
                            setJoinRequest(null);
                            setShowNext(false);
                          },
                          "class": "w-full h-full",
                          children: "Cancel Request"
                        });
                      }
                    })];
                  }
                }), null);
                return _el$57;
              })());
            })());
            return _el$43;
          })()];
        }
      }), createComponent(TabsContent, {
        value: "create",
        "class": "space-y-4",
        get children() {
          return [_tmpl$10$3(), (() => {
            var _el$45 = _tmpl$5$4();
            insert(_el$45, createComponent(TextFieldRoot, {
              get children() {
                return [createComponent(TextFieldLabel, {
                  htmlFor: "team-name",
                  children: "Team Name"
                }), createComponent(TextField, {
                  id: "team-name",
                  placeholder: "Enter your team name",
                  name: "team-name",
                  required: true,
                  get value() {
                    return data().screen1?.teamInformation?.["team-name"];
                  }
                })];
              }
            }));
            return _el$45;
          })(), (() => {
            var _el$46 = _tmpl$5$4();
            insert(_el$46, createComponent(Select, {
              options: [{
                value: "2",
                label: "2"
              }, {
                value: "3",
                label: "3"
              }, {
                value: "4",
                label: "4"
              }],
              label: "Team Size",
              optionValue: "value",
              get value() {
                return memberCount();
              },
              onChange: (checked) => {
                if (checked) {
                  setMemberCount(checked);
                } else {
                  setMemberCount(null);
                }
              },
              optionTextValue: "label",
              placeholder: "Select your team size",
              itemComponent: (props) => createComponent(SelectItem, {
                get item() {
                  return props.item;
                },
                get children() {
                  return props.item.rawValue.label;
                }
              }),
              get children() {
                return [createComponent(SelectLabel, {
                  children: "Team Size"
                }), createComponent(SelectTrigger, {
                  id: "size",
                  get children() {
                    return createComponent(SelectValue, {
                      children: (state) => state.selectedOption()?.label
                    });
                  }
                }), createComponent(SelectContent, {})];
              }
            }));
            return _el$46;
          })(), (() => {
            var _el$47 = _tmpl$5$4();
            insert(_el$47, createComponent(Select, {
              options: [{
                value: "beginner",
                label: "Beginner (0-1 years)"
              }, {
                value: "intermediate",
                label: "Intermediate (1-3 years)"
              }, {
                value: "advanced",
                label: "Advanced (3+ years)"
              }],
              label: "Experience Level",
              optionValue: "value",
              get value() {
                return experience();
              },
              onChange: (checked) => {
                if (checked) {
                  setExperience(checked);
                } else {
                  setExperience(null);
                }
              },
              optionTextValue: "label",
              placeholder: "Select your experience level",
              itemComponent: (props) => createComponent(SelectItem, {
                get item() {
                  return props.item;
                },
                get children() {
                  return props.item.rawValue.label;
                }
              }),
              get children() {
                return [createComponent(SelectLabel, {
                  children: "Experience Level"
                }), createComponent(SelectTrigger, {
                  id: "experience",
                  get children() {
                    return createComponent(SelectValue, {
                      children: (state) => state.selectedOption()?.label
                    });
                  }
                }), createComponent(SelectContent, {})];
              }
            }));
            return _el$47;
          })(), createComponent(CategoryPicker, {
            get categories() {
              return availableCategories();
            },
            get selected() {
              return categories();
            },
            onChange: setCategories
          }), (() => {
            var _el$48 = _tmpl$5$4();
            insert(_el$48, createComponent(TextFieldRoot, {
              get children() {
                return [createComponent(TextFieldLabel, {
                  htmlFor: "project-idea",
                  children: "Project Idea (optional)"
                }), createComponent(TextArea, {
                  id: "project-idea",
                  placeholder: "Briefly describe any project ideas you have for the hackathon",
                  name: "project-idea",
                  get value() {
                    return data().screen1?.teamInformation?.["project-idea"];
                  }
                })];
              }
            }));
            return _el$48;
          })()];
        }
      }), createComponent(TabsContent, {
        value: "solo",
        "class": "space-y-4",
        get children() {
          return [_tmpl$11$3(), (() => {
            var _el$50 = _tmpl$5$4();
            insert(_el$50, createComponent(TextFieldRoot, {
              get children() {
                return [createComponent(TextFieldLabel, {
                  htmlFor: "team-name",
                  children: "Team Name"
                }), createComponent(TextField, {
                  id: "team-name",
                  placeholder: "Enter your team name",
                  name: "team-name",
                  required: true,
                  get value() {
                    return data().screen1?.teamInformation?.["team-name"];
                  }
                })];
              }
            }));
            return _el$50;
          })(), (() => {
            var _el$51 = _tmpl$5$4();
            insert(_el$51, createComponent(Select, {
              options: [{
                value: "beginner",
                label: "Beginner (0-1 years)"
              }, {
                value: "intermediate",
                label: "Intermediate (1-3 years)"
              }, {
                value: "advanced",
                label: "Advanced (3+ years)"
              }],
              label: "Experience Level",
              optionValue: "value",
              get value() {
                return experience();
              },
              onChange: (checked) => {
                if (checked) {
                  setExperience(checked);
                } else {
                  setExperience(null);
                }
              },
              optionTextValue: "label",
              placeholder: "Select your experience level",
              itemComponent: (props) => createComponent(SelectItem, {
                get item() {
                  return props.item;
                },
                get children() {
                  return props.item.rawValue.label;
                }
              }),
              get children() {
                return [createComponent(SelectLabel, {
                  children: "Experience Level"
                }), createComponent(SelectTrigger, {
                  id: "experience",
                  get children() {
                    return createComponent(SelectValue, {
                      children: (state) => state.selectedOption()?.label
                    });
                  }
                }), createComponent(SelectContent, {})];
              }
            }));
            return _el$51;
          })(), createComponent(CategoryPicker, {
            get categories() {
              return availableCategories();
            },
            get selected() {
              return categories();
            },
            onChange: setCategories
          }), (() => {
            var _el$52 = _tmpl$5$4();
            insert(_el$52, createComponent(TextFieldRoot, {
              get children() {
                return [createComponent(TextFieldLabel, {
                  htmlFor: "project-idea",
                  children: "Project Idea (optional)"
                }), createComponent(TextArea, {
                  id: "project-idea",
                  placeholder: "Briefly describe any project ideas you have for the hackathon",
                  name: "project-idea",
                  get value() {
                    return data().screen1?.teamInformation?.["project-idea"];
                  }
                })];
              }
            }));
            return _el$52;
          })()];
        }
      }), createComponent(TabsContent, {
        value: "search",
        "class": "space-y-4",
        get children() {
          return [_tmpl$12$3(), _tmpl$13$3()];
        }
      })];
    }
  }), () => (() => {
    var _el$60 = _tmpl$27$2(), _el$61 = _el$60.firstChild, _el$89 = _el$61.nextSibling;
    insert(_el$60, createComponent(Card, {
      get children() {
        return [createComponent(CardHeader, {
          "class": "border-b mb-0",
          get children() {
            return [createComponent(CardTitle, {
              children: "Registration Summary"
            }), createComponent(CardDescription, {
              "class": "text-slate-900",
              children: "Please review your registration information before submitting."
            })];
          }
        }), createComponent(CardContent, {
          "class": "pt-6 space-y-2",
          get children() {
            return [(() => {
              var _el$62 = _tmpl$17$3(), _el$63 = _el$62.firstChild; _el$63.nextSibling;
              insert(_el$62, () => data().screen0?.["first-name"], null);
              return _el$62;
            })(), (() => {
              var _el$65 = _tmpl$18$3(), _el$66 = _el$65.firstChild; _el$66.nextSibling;
              insert(_el$65, () => data().screen0?.["last-name"], null);
              return _el$65;
            })(), (() => {
              var _el$68 = _tmpl$19$3(), _el$69 = _el$68.firstChild; _el$69.nextSibling;
              insert(_el$68, () => data().screen0?.email, null);
              return _el$68;
            })(), (() => {
              var _el$71 = _tmpl$20$2(), _el$72 = _el$71.firstChild; _el$72.nextSibling;
              insert(_el$71, () => data().screen0?.phone, null);
              return _el$71;
            })(), (() => {
              var _el$74 = _tmpl$21$2(), _el$75 = _el$74.firstChild; _el$75.nextSibling;
              insert(_el$74, () => school()?.label, null);
              return _el$74;
            })(), (() => {
              var _el$77 = _tmpl$22$2(), _el$78 = _el$77.firstChild; _el$78.nextSibling;
              insert(_el$77, () => major()?.label, null);
              return _el$77;
            })(), (() => {
              var _el$80 = _tmpl$23$2(), _el$81 = _el$80.firstChild; _el$81.nextSibling;
              insert(_el$80, () => grade()?.label, null);
              return _el$80;
            })(), (() => {
              var _el$83 = _tmpl$24$2(), _el$84 = _el$83.firstChild; _el$84.nextSibling;
              insert(_el$83, () => shirt()?.label, null);
              return _el$83;
            })()];
          }
        }), createComponent(Separator, {}), createComponent(CardContent, {
          "class": "pt-6 space-y-2",
          get children() {
            return [(() => {
              var _el$86 = _tmpl$25$2(), _el$87 = _el$86.firstChild; _el$87.nextSibling;
              insert(_el$86, (() => {
                var _c$5 = createMemo(() => teamType() === "create");
                return () => _c$5() ? "Create a Team" : teamType() === "join" ? "Join a Team" : "Work Alone";
              })(), null);
              return _el$86;
            })(), createMemo(() => createMemo(() => teamType() === "create")() && [(() => {
              var _el$92 = _tmpl$28$2(), _el$93 = _el$92.firstChild; _el$93.nextSibling;
              insert(_el$92, () => data().screen1?.teamInformation?.["team-name"], null);
              return _el$92;
            })(), (() => {
              var _el$95 = _tmpl$29$2(), _el$96 = _el$95.firstChild; _el$96.nextSibling;
              insert(_el$95, () => data().screen1?.teamInformation?.["project-idea"], null);
              return _el$95;
            })(), (() => {
              var _el$98 = _tmpl$30$2(), _el$99 = _el$98.firstChild; _el$99.nextSibling;
              insert(_el$98, () => experience()?.label, null);
              return _el$98;
            })(), (() => {
              var _el$101 = _tmpl$31$2(), _el$102 = _el$101.firstChild; _el$102.nextSibling;
              insert(_el$101, () => memberCount()?.label, null);
              return _el$101;
            })(), (() => {
              var _el$104 = _tmpl$32$2(), _el$105 = _el$104.firstChild; _el$105.nextSibling;
              insert(_el$104, () => categories()?.map((cat) => cat.label).join(", "), null);
              return _el$104;
            })()]), createMemo(() => createMemo(() => teamType() === "join")() && [(() => {
              var _el$107 = _tmpl$33$2(), _el$108 = _el$107.firstChild; _el$108.nextSibling;
              insert(_el$107, () => joinRequest().name, null);
              return _el$107;
            })(), (() => {
              var _el$110 = _tmpl$34$2(), _el$111 = _el$110.firstChild; _el$111.nextSibling;
              insert(_el$110, () => joinRequest().members.find((member) => member.id === joinRequest().leaderId).name, null);
              return _el$110;
            })()]), createMemo(() => createMemo(() => teamType() === "solo")() && (() => {
              var _el$113 = _tmpl$35$2(), _el$114 = _el$113.firstChild; _el$114.nextSibling;
              insert(_el$113, () => data().screen1?.teamInformation?.["team-name"], null);
              return _el$113;
            })())];
          }
        })];
      }
    }), _el$89);
    insert(_el$89, createComponent(Checkbox, {
      id: "cb3",
      "class": "flex items-start space-x-2 mt-1",
      name: "checkbox3",
      get checked() {
        return checkbox3();
      },
      onChange: (e) => e ? setCheckbox3("on") : setCheckbox3(null),
      required: true,
      get children() {
        var _el$90 = _tmpl$26$2(), _el$91 = _el$90.firstChild;
        insert(_el$91, createComponent(CheckboxControl, {}), null);
        insert(_el$91, createComponent(CheckboxLabel, {
          className: "font-medium",
          children: "I have reviewed my registration information and confirm that it is accurate."
        }), null);
        insert(_el$90, createComponent(CheckboxDescription, {
          "class": "text-sm text-muted-foreground text-input",
          children: "By checking this box, I acknowledge that I have read and agree to the terms and conditions of the hackathon."
        }), null);
        return _el$90;
      }
    }));
    return _el$60;
  })(), () => createComponent(Register, {
    get email() {
      return email();
    }
  })];
  return createComponent(Ui, {
    get children() {
      var _el$116 = _tmpl$40$2(), _el$127 = _el$116.firstChild;
      insert(_el$116, createComponent(Show, {
        get when() {
          return mode() === null;
        },
        get children() {
          return createComponent(Card, {
            "class": "max-w-3xl mx-auto overflow-hidden",
            get children() {
              return [createComponent(CardHeader, {
                "class": "bg-[#1a2533] text-white",
                get children() {
                  return createComponent(CardTitle, {
                    "class": "flex flex-row items-center py-2 gap-2",
                    get children() {
                      return ["BT Hackathon", createComponent(Button, {
                        variant: "outline",
                        "class": "ml-auto",
                        onClick: () => {
                          location.href = "https://bthackathon.com";
                        },
                        children: "Home"
                      })];
                    }
                  });
                }
              }), createComponent(CardContent, {
                "class": "py-10 px-6",
                get children() {
                  var _el$117 = _tmpl$36$2(), _el$118 = _el$117.firstChild, _el$119 = _el$118.nextSibling, _el$120 = _el$119.firstChild, _el$121 = _el$120.nextSibling; _el$121.nextSibling;
                  _el$118.$$click = () => setMode("register");
                  _el$119.$$click = () => setMode("login");
                  insert(_el$119, (() => {
                    var _c$6 = createMemo(() => !!localStorage.getItem("screen0"));
                    return () => _c$6() && _tmpl$41$2();
                  })(), null);
                  createRenderEffect(() => className(_el$119, `flex flex-col items-center gap-3 p-6 rounded-lg border-2 transition-all text-center ${localStorage.getItem("screen0") ? "border-[#f5b700] bg-[#f5b700]/5 hover:bg-[#f5b700]/10" : "border-zinc-200 hover:border-[#f5b700] hover:bg-[#f5b700]/5"}`));
                  return _el$117;
                }
              })];
            }
          });
        }
      }), _el$127);
      insert(_el$116, createComponent(Show, {
        get when() {
          return mode() === "login";
        },
        get children() {
          return createComponent(Card, {
            "class": "max-w-3xl mx-auto overflow-hidden",
            get children() {
              return [createComponent(CardHeader, {
                "class": "bg-[#1a2533] text-white",
                get children() {
                  return createComponent(CardTitle, {
                    "class": "flex flex-row items-center py-2 gap-2",
                    get children() {
                      return ["Sign In", createComponent(Button, {
                        variant: "outline",
                        "class": "ml-auto",
                        onClick: () => {
                          location.href = "https://bthackathon.com";
                        },
                        children: "Home"
                      })];
                    }
                  });
                }
              }), createComponent(CardContent, {
                "class": "pt-6 space-y-4",
                get children() {
                  return createComponent(Login, {});
                }
              }), createComponent(CardFooter, {
                get children() {
                  return createComponent(Button, {
                    variant: "outline",
                    onClick: () => setMode(null),
                    children: "Back"
                  });
                }
              })];
            }
          });
        }
      }), _el$127);
      insert(_el$116, createComponent(Show, {
        get when() {
          return mode() === "register";
        },
        get children() {
          return createComponent(Card, {
            "class": "max-w-3xl mx-auto overflow-hidden",
            get children() {
              return [createComponent(CardHeader, {
                "class": "bg-[#1a2533] text-white",
                get children() {
                  return createComponent(CardTitle, {
                    "class": "flex flex-row items-center py-2 gap-2",
                    get children() {
                      return ["Sign Up for the BT Hackathon", createComponent(Button, {
                        variant: "outline",
                        "class": "ml-auto",
                        onClick: () => {
                          location.href = "https://bthackathon.com";
                        },
                        children: "Home"
                      })];
                    }
                  });
                }
              }), createComponent(CardContent, {
                "class": "pt-2 space-y-2",
                get children() {
                  return [(() => {
                    var _el$123 = _tmpl$37$2();
                    insert(_el$123, createComponent(ToggleGroup, {
                      get value() {
                        return section();
                      },
                      "class": "w-full flex justify-between",
                      get children() {
                        return [createComponent(ToggleGroupItem, {
                          value: "0",
                          "class": "flex-1",
                          "aria-label": "Personal",
                          get checked() {
                            return section() <= 0;
                          },
                          onClick: () => switchToSection(0),
                          get disabled() {
                            return !unlocked()[0];
                          },
                          children: "Personal"
                        }), createComponent(ToggleGroupItem, {
                          value: "1",
                          "class": "flex-1",
                          "aria-label": "Team",
                          get checked() {
                            return section() <= 1;
                          },
                          onClick: () => switchToSection(1),
                          get disabled() {
                            return !unlocked()[1];
                          },
                          children: "Team"
                        }), createComponent(ToggleGroupItem, {
                          value: "2",
                          "class": "flex-1",
                          "aria-label": "Review",
                          get checked() {
                            return section() <= 2;
                          },
                          onClick: () => switchToSection(2),
                          get disabled() {
                            return !unlocked()[2];
                          },
                          children: "Review"
                        }), createComponent(ToggleGroupItem, {
                          value: "3",
                          "class": "flex-1",
                          "aria-label": "Account",
                          get checked() {
                            return section() <= 3;
                          },
                          onClick: () => switchToSection(3),
                          get disabled() {
                            return !unlocked()[3];
                          },
                          children: "Account"
                        })];
                      }
                    }), null);
                    insert(_el$123, createComponent(Progress, {
                      get value() {
                        return [10, 35, 65, 90][section()];
                      },
                      "class": "w-full"
                    }), null);
                    return _el$123;
                  })(), (() => {
                    var _el$124 = _tmpl$38$2(), _el$125 = _el$124.firstChild, _el$126 = _el$125.firstChild;
                    _el$124.addEventListener("submit", (e) => {
                      e.preventDefault();
                      if (section() < sections.length - 1) {
                        const form = e.target;
                        if (!school()) {
                          alert("Please select a school.");
                          return;
                        }
                        if (selfRegBlocked()) {
                          alert("Self-registration is not available for " + selfRegBlocked().schoolLabel + ". Please contact your school administrator.");
                          return;
                        }
                        if (!major()) {
                          alert("Please select a major.");
                          return;
                        }
                        if (!grade()) {
                          alert("Please select a grade.");
                          return;
                        }
                        switch (section()) {
                          case 0:
                            const formData = Object.fromEntries(new FormData(form));
                            formData.school = school();
                            formData.major = major();
                            formData.shirt = shirt();
                            formData.grade = grade();
                            formData.parents = parents();
                            if (!localStorage.getItem("screen0")) {
                              localStorage.setItem("screen0", JSON.stringify({}));
                            }
                            localStorage.setItem("screen0", JSON.stringify({
                              ...JSON.parse(localStorage.getItem("screen0")),
                              ...formData
                            }));
                            _data.screen0 = JSON.parse(localStorage.getItem("screen0"));
                            setData(_data);
                            break;
                          case 1:
                            const formData2 = Object.fromEntries(new FormData(form));
                            formData2.teamType = teamType();
                            formData2.teamInformation = {};
                            if (formData2.teamType === "create") {
                              formData2.teamInformation["team-name"] = formData2["team-name"];
                              formData2.teamInformation["project-idea"] = formData2["project-idea"];
                              formData2.teamInformation["experience"] = experience();
                              formData2.teamInformation["memberCount"] = memberCount();
                              formData2.teamInformation["categories"] = categories();
                              formData2.teamInformation.solo = false;
                              formData2.teamInformation.looking = false;
                            } else if (formData2.teamType === "solo") {
                              formData2.teamInformation["team-name"] = formData2["team-name"];
                              formData2.teamInformation["project-idea"] = formData2["project-idea"];
                              formData2.teamInformation["experience"] = experience();
                              formData2.teamInformation["categories"] = categories();
                              formData2.teamInformation["memberCount"] = 1;
                              formData2.teamInformation.solo = true;
                              formData2.teamInformation.looking = false;
                            } else if (formData2.teamType === "search") {
                              formData2.teamInformation.looking = true;
                            } else {
                              if (!joinRequest()) {
                                alert("Please select a team to join.");
                                return;
                              }
                              formData2.teamInformation.solo = false;
                              formData2.teamInformation.looking = false;
                              formData2.teamInformation["id"] = joinRequest()?.id;
                              delete formData2["team-name"];
                            }
                            console.log(formData2);
                            if (!localStorage.getItem("screen1")) {
                              localStorage.setItem("screen1", JSON.stringify({}));
                            }
                            localStorage.setItem("screen1", JSON.stringify({
                              ...JSON.parse(localStorage.getItem("screen1")),
                              ...formData2
                            }));
                            _data.screen1 = JSON.parse(localStorage.getItem("screen1"));
                            setData(_data);
                            break;
                        }
                        setUnlocked(unlocked().map((_, i) => i <= section() + 1));
                        if (section() === 0 && teamType() === "join") {
                          setShowNext(false);
                        } else if (location.hash !== "#4") {
                          setShowNext(true);
                        }
                        setSection(section() + 1);
                      } else {
                        const form = e.target;
                        const accountData = Object.fromEntries(new FormData(form));
                        if (accountData["password"] !== accountData["confirm-password"]) {
                          alert("Passwords do not match.");
                          return;
                        }
                        accountData["name"] = `${data().screen0?.["first-name"]} ${data().screen0?.["last-name"]}`;
                        accountData["school"] = school()?.label;
                        accountData["email"] = data().screen0?.email;
                        delete accountData["confirm-password"];
                        const registrationData = {
                          accountData,
                          screen0: JSON.parse(localStorage.getItem("screen0")),
                          screen1: JSON.parse(localStorage.getItem("screen1"))
                        };
                        if (!checkbox3()) {
                          alert("Please accept the {checkbox3}.");
                          return;
                        }
                        fetch("/api/register", {
                          method: "POST",
                          headers: {
                            "Content-Type": "application/json"
                          },
                          body: JSON.stringify(registrationData)
                        }).then((res) => res.json()).then((data2) => {
                          if (!data2.error) {
                            alert("Registration successful. Please check your email for confirmation.");
                            localStorage.removeItem("screen0");
                            localStorage.removeItem("screen1");
                            location.href = "/signup/dashboard";
                          } else {
                            alert(data2.error || "Registration failed. Please try again.");
                          }
                        });
                      }
                    });
                    insert(_el$126, () => sections[section()]());
                    return _el$124;
                  })()];
                }
              }), createComponent(CardFooter, {
                "class": "flex flex-col sm:flex-row gap-4",
                get children() {
                  return [createMemo(() => createMemo(() => section() === 0)() ? createComponent(Button, {
                    variant: "outline",
                    "class": "w-full sm:w-auto",
                    onClick: () => setMode(null),
                    children: "Back"
                  }) : createMemo(() => !!showNext())() ? createComponent(Button, {
                    variant: "outline",
                    "class": "w-full sm:w-auto",
                    onClick: () => switchToSection(section() - 1),
                    children: "Back"
                  }) : []), createMemo(() => createMemo(() => section() < sections.length - 1)() ? createMemo(() => !!showNext())() ? createComponent(Button, {
                    type: "button",
                    "class": "w-full sm:w-auto bg-[#f5b700] hover:bg-[#e5a700] text-black",
                    onClick: () => {
                      document.querySelector("form")?.requestSubmit();
                    },
                    children: "Next"
                  }) : [] : createComponent(Button, {
                    type: "button",
                    "class": "w-full sm:w-auto bg-[#f5b700] hover:bg-[#e5a700] text-black",
                    onClick: () => {
                      document.querySelector("form")?.requestSubmit();
                    },
                    children: "Submit"
                  }))];
                }
              })];
            }
          });
        }
      }), _el$127);
      insert(_el$116, createComponent(Show, {
        get when() {
          return categoryInfoOpen();
        },
        get children() {
          return createComponent(Portal, {
            get children() {
              var _el$128 = _tmpl$39$2(), _el$129 = _el$128.firstChild, _el$130 = _el$129.nextSibling, _el$131 = _el$130.firstChild, _el$132 = _el$131.nextSibling, _el$133 = _el$132.nextSibling;
              _el$128.$$click = () => setCategoryInfoOpen(false);
              _el$130.$$click = (e) => e.stopPropagation();
              _el$131.$$click = () => setCategoryInfoOpen(false);
              insert(_el$132, () => categoryInfoData()?.label);
              insert(_el$130, (() => {
                var _c$7 = createMemo(() => categoryInfoData()?.prize > 0);
                return () => _c$7() && (() => {
                  var _el$135 = _tmpl$42$2(); _el$135.firstChild;
                  insert(_el$135, () => categoryInfoData()?.prize?.toLocaleString(), null);
                  return _el$135;
                })();
              })(), _el$133);
              insert(_el$133, () => categoryInfoData()?.description);
              return _el$128;
            }
          });
        }
      }), null);
      return _el$116;
    }
  });
};
delegateEvents(["click"]);

var _tmpl$$3 = /* @__PURE__ */ template(`<table>`), _tmpl$2$3 = /* @__PURE__ */ template(`<thead>`), _tmpl$3$3 = /* @__PURE__ */ template(`<tbody>`), _tmpl$4$3 = /* @__PURE__ */ template(`<tr>`), _tmpl$5$3 = /* @__PURE__ */ template(`<th>`), _tmpl$6$3 = /* @__PURE__ */ template(`<td>`), _tmpl$7$3 = /* @__PURE__ */ template(`<caption>`);
const Table = (props) => {
  const [local, rest] = splitProps(props, ["class"]);
  return (() => {
    var _el$ = _tmpl$$3();
    spread(_el$, mergeProps({
      get ["class"]() {
        return cn("w-full caption-bottom text-sm", local.class);
      }
    }, rest), false, false);
    return _el$;
  })();
};
const TableHeader = (props) => {
  const [local, rest] = splitProps(props, ["class"]);
  return (() => {
    var _el$2 = _tmpl$2$3();
    spread(_el$2, mergeProps({
      get ["class"]() {
        return cn("[&_tr]:border-b", local.class);
      }
    }, rest), false, false);
    return _el$2;
  })();
};
const TableBody = (props) => {
  const [local, rest] = splitProps(props, ["class"]);
  return (() => {
    var _el$3 = _tmpl$3$3();
    spread(_el$3, mergeProps({
      get ["class"]() {
        return cn("[&_tr:last-child]:border-0", local.class);
      }
    }, rest), false, false);
    return _el$3;
  })();
};
const TableRow = (props) => {
  const [local, rest] = splitProps(props, ["class"]);
  return (() => {
    var _el$5 = _tmpl$4$3();
    spread(_el$5, mergeProps({
      get ["class"]() {
        return cn("border-b transition-colors hover:bg-white/10 data-[state=selected]:bg-muted", local.class);
      }
    }, rest), false, false);
    return _el$5;
  })();
};
const TableHead = (props) => {
  const [local, rest] = splitProps(props, ["class"]);
  return (() => {
    var _el$6 = _tmpl$5$3();
    spread(_el$6, mergeProps({
      get ["class"]() {
        return cn("h-10 px-2 text-left align-middle font-medium text-muted-foreground [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-[2px]", local.class);
      }
    }, rest), false, false);
    return _el$6;
  })();
};
const TableCell = (props) => {
  const [local, rest] = splitProps(props, ["class"]);
  return (() => {
    var _el$7 = _tmpl$6$3();
    spread(_el$7, mergeProps({
      get ["class"]() {
        return cn("p-2 align-middle [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-[2px]", local.class);
      }
    }, rest), false, false);
    return _el$7;
  })();
};
const TableCaption = (props) => {
  const [local, rest] = splitProps(props, ["class"]);
  return (() => {
    var _el$8 = _tmpl$7$3();
    spread(_el$8, mergeProps({
      get ["class"]() {
        return cn("mt-4 text-sm text-muted-foreground", local.class);
      }
    }, rest), false, false);
    return _el$8;
  })();
};

var _tmpl$$2 = /* @__PURE__ */ template(`<div class=space-y-2><div class="grid grid-cols-2 gap-2">`), _tmpl$2$2 = /* @__PURE__ */ template(`<div class="text-left w-full text-sm font-medium">Award Categories`), _tmpl$3$2 = /* @__PURE__ */ template(`<button type=button><span>`), _tmpl$4$2 = /* @__PURE__ */ template(`<span><svg xmlns=http://www.w3.org/2000/svg width=14 height=14 viewBox="0 0 24 24"fill=none stroke=currentColor stroke-width=2 stroke-linecap=round stroke-linejoin=round><circle cx=12 cy=12 r=10></circle><path d="M12 16v-4"></path><path d="M12 8h.01">`), _tmpl$5$2 = /* @__PURE__ */ template(`<form class="flex flex-wrap gap-2 items-end">`), _tmpl$6$2 = /* @__PURE__ */ template(`<div class=mt-3>`), _tmpl$7$2 = /* @__PURE__ */ template(`<p class="text-sm text-zinc-500 mb-3">CSV columns: name, project, leaderEmail, maxSize, members (semicolon-separated emails)`), _tmpl$8$2 = /* @__PURE__ */ template(`<label class="cursor-pointer inline-flex items-center gap-2 px-4 py-2 bg-zinc-100 border border-zinc-200 rounded-lg text-sm font-medium hover:bg-zinc-200 transition-colors"><svg xmlns=http://www.w3.org/2000/svg width=16 height=16 viewBox="0 0 24 24"fill=none stroke=currentColor stroke-width=2 stroke-linecap=round stroke-linejoin=round><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="17 8 12 3 7 8"></polyline><line x1=12 x2=12 y1=3 y2=15></line></svg>Choose CSV File<input type=file accept=.csv class=hidden>`), _tmpl$9$2 = /* @__PURE__ */ template(`<p class="text-sm text-zinc-500 mb-3">CSV columns: name, email, phone, school, major, grade, shirt, password (optional)`), _tmpl$10$2 = /* @__PURE__ */ template(`<div class="flex items-center gap-3"><label class="cursor-pointer inline-flex items-center gap-2 px-4 py-2 bg-zinc-100 border border-zinc-200 rounded-lg text-sm font-medium hover:bg-zinc-200 transition-colors"><svg xmlns=http://www.w3.org/2000/svg width=16 height=16 viewBox="0 0 24 24"fill=none stroke=currentColor stroke-width=2 stroke-linecap=round stroke-linejoin=round><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="17 8 12 3 7 8"></polyline><line x1=12 x2=12 y1=3 y2=15></line></svg>Choose CSV File<input type=file accept=.csv class=hidden>`), _tmpl$11$2 = /* @__PURE__ */ template(`<div class="fixed inset-0 z-[9999] flex items-center justify-center"><div class="absolute inset-0 bg-black/50"></div><div class="relative bg-white border border-zinc-200 rounded-xl p-6 max-w-md w-full mx-4 shadow-2xl"><button class="absolute right-3 top-3 text-zinc-400 hover:text-zinc-600"><svg xmlns=http://www.w3.org/2000/svg width=18 height=18 viewBox="0 0 24 24"fill=none stroke=currentColor stroke-width=2 stroke-linecap=round stroke-linejoin=round><path d="M18 6 6 18"></path><path d="m6 6 12 12"></path></svg></button><h3 class="text-lg font-semibold text-zinc-900 mb-2"></h3><p class="text-sm text-zinc-600 leading-relaxed">`), _tmpl$12$2 = /* @__PURE__ */ template(`<div class=space-y-4><div class="flex justify-between items-center mb-4"><h2 class="text-2xl font-bold">Manage System</h2></div><div class="grid grid-cols-3 md:grid-cols-6 gap-4 mb-6 p-4 bg-zinc-100 border border-zinc-200 rounded-lg"><div class=text-center><div class="text-2xl font-bold text-zinc-900"></div><div class="text-sm text-zinc-500">Total Users</div></div><div class=text-center><div class="text-2xl font-bold text-green-700"></div><div class="text-sm text-zinc-500">Verified</div></div><div class=text-center><div class="text-2xl font-bold text-red-700"></div><div class="text-sm text-zinc-500">Unverified</div></div><div class=text-center><div class="text-2xl font-bold text-zinc-900"></div><div class="text-sm text-zinc-500">Teams</div></div><div class=text-center><div class="text-2xl font-bold text-blue-700"></div><div class="text-sm text-zinc-500">On Team</div></div><div class=text-center><div class="text-2xl font-bold text-amber-700"></div><div class="text-sm text-zinc-500">Looking</div></div></div><div class=mb-6></div><div class="flex gap-1 p-1 bg-zinc-100 rounded-lg border border-zinc-200"></div><div><div class=space-y-4><form class="flex gap-2 items-end w-full"></form></div></div><div><div class=space-y-4><form class="flex flex-col gap-2 w-full"><div class="flex gap-2 items-end"></div><div class="flex gap-2 items-end"></div></form></div></div><div><div class=space-y-4><div class="flex gap-3 mb-4"><div class="text-sm text-zinc-500 self-center"> of <!> teams</div></div></div></div><div><div class=space-y-4><div class="flex flex-wrap gap-3 mb-4"></div><div class="flex items-center justify-between mb-2"><div class="text-sm text-zinc-500"> of <!> users</div><div class="flex gap-2">`), _tmpl$13$2 = /* @__PURE__ */ template(`<button type=button>`), _tmpl$14$2 = /* @__PURE__ */ template(`<div class="flex items-center justify-between mb-3">`), _tmpl$15$2 = /* @__PURE__ */ template(`<div class="flex flex-wrap gap-3 mb-3 text-sm"><div class="flex items-center gap-2"><span class=text-zinc-500>Self-Registration:</span></div><div class="flex items-center gap-2"><span class=text-zinc-500>Team Creation:</span></div><div class="flex items-center gap-2"><span class=text-zinc-500>Admins:</span><span>`), _tmpl$16$2 = /* @__PURE__ */ template(`<button type=button class="text-sm text-blue-600 hover:text-blue-800 mb-2"> Majors (<!>)`), _tmpl$17$2 = /* @__PURE__ */ template(`<form class="flex gap-2 items-center">`), _tmpl$18$2 = /* @__PURE__ */ template(`<div class="flex items-center gap-3"><span class="font-semibold text-lg"></span><span class="text-zinc-400 text-sm">(<!>)</span><button class="text-zinc-400 hover:text-zinc-600 text-xs">Edit`), _tmpl$19$2 = /* @__PURE__ */ template(`<span class=text-zinc-400>None`), _tmpl$20$1 = /* @__PURE__ */ template(`<div class="border-t border-zinc-200 pt-3 mt-2 space-y-2"><form class="flex gap-2 items-end">`), _tmpl$21$1 = /* @__PURE__ */ template(`<div class=space-y-1>`), _tmpl$22$1 = /* @__PURE__ */ template(`<div class="flex items-center justify-between py-1 px-2 rounded hover:bg-zinc-100"><span class=text-sm> <span class=text-zinc-400>(<!>)`), _tmpl$23$1 = /* @__PURE__ */ template(`<div class="text-sm text-zinc-400 italic">No majors added yet`), _tmpl$24$1 = /* @__PURE__ */ template(`<form class=space-y-2><div class="flex gap-2 items-end"></div><div class="flex gap-2">`), _tmpl$25$1 = /* @__PURE__ */ template(`<div class="flex items-center justify-between"><div><div class=font-semibold> <span class="text-zinc-400 text-sm font-normal">(<!>)</span></div><div class="text-sm text-zinc-500 mt-1"></div></div><div class="flex gap-2 shrink-0">`), _tmpl$26$1 = /* @__PURE__ */ template(`<span class="italic text-zinc-400">No description`), _tmpl$27$1 = /* @__PURE__ */ template(`<div class="text-sm font-medium text-green-600 mt-1">Prize: $`), _tmpl$28$1 = /* @__PURE__ */ template(`<span class="px-1.5 py-0.5 bg-amber-100 text-amber-700 rounded text-xs font-medium"> pending`), _tmpl$29$1 = /* @__PURE__ */ template(`<span class=text-zinc-400>0`), _tmpl$30$1 = /* @__PURE__ */ template(`<div class="p-4 space-y-4"><div><div class="text-sm text-zinc-500 font-medium mb-2">Categories</div></div><div class=text-sm><span class="text-zinc-500 font-medium">Members:</span><div class="mt-1 space-y-1">`), _tmpl$31$1 = /* @__PURE__ */ template(`<div><div class="text-sm text-zinc-500 font-medium mb-2">Pending Join Requests</div><div class=space-y-1>`), _tmpl$32$1 = /* @__PURE__ */ template(`<div class="flex items-center justify-between py-1 px-2 rounded bg-amber-50 border border-amber-200"><span class=text-sm> (<!>)`), _tmpl$33$1 = /* @__PURE__ */ template(`<div class="flex items-center justify-between"><span> (<!>) `), _tmpl$34$1 = /* @__PURE__ */ template(`<span class="text-amber-600 text-xs ml-1">Leader`), _tmpl$35$1 = /* @__PURE__ */ template(`<div class=relative>`), _tmpl$36$1 = /* @__PURE__ */ template(`<div class="absolute z-50 mt-1 w-[300px] max-h-[200px] overflow-y-auto bg-white border border-zinc-200 rounded-lg shadow-lg">`), _tmpl$37$1 = /* @__PURE__ */ template(`<button type=button class="w-full text-left px-3 py-2 text-sm hover:bg-zinc-100 border-b border-zinc-50"> <span class=text-zinc-400>(<!>)`), _tmpl$38$1 = /* @__PURE__ */ template(`<div><pre class=whitespace-pre-wrap>`), _tmpl$39$1 = /* @__PURE__ */ template(`<div class="flex gap-1 flex-wrap">`), _tmpl$40$1 = /* @__PURE__ */ template(`<span class="px-1.5 py-0.5 bg-blue-100 text-blue-700 rounded text-xs">`), _tmpl$41$1 = /* @__PURE__ */ template(`<span class="px-1.5 py-0.5 bg-amber-100 text-amber-700 rounded text-xs">Req: `), _tmpl$42$1 = /* @__PURE__ */ template(`<span class="text-zinc-400 text-xs">None`), _tmpl$43$1 = /* @__PURE__ */ template(`<span class="px-1.5 py-0.5 bg-purple-100 text-purple-700 rounded text-xs">Admin`), _tmpl$44$1 = /* @__PURE__ */ template(`<span class="px-1.5 py-0.5 bg-green-100 text-green-700 rounded text-xs">Verified`), _tmpl$45$1 = /* @__PURE__ */ template(`<span class="px-1.5 py-0.5 bg-red-100 text-red-700 rounded text-xs">Unverified`), _tmpl$46$1 = /* @__PURE__ */ template(`<span class="px-1.5 py-0.5 bg-blue-100 text-blue-700 rounded text-xs">School Admin`), _tmpl$47$1 = /* @__PURE__ */ template(`<div class="p-4 space-y-4"><div class="grid grid-cols-2 md:grid-cols-4 gap-3 text-sm"><div><span class=text-zinc-500>Phone:</span> </div><div><span class=text-zinc-500>Grade:</span> </div><div><span class=text-zinc-500>Major:</span> </div><div><span class=text-zinc-500>Shirt:</span> </div><div><span class=text-zinc-500>Team:</span> </div><div><span class=text-zinc-500>Created:</span> </div><div class=col-span-2><span class=text-zinc-500>Parents:</span> </div></div><div class=text-sm><span class="text-zinc-500 font-medium">School Admin of:</span> </div><div class="flex flex-wrap gap-2 pt-2 border-t border-zinc-200">`), _tmpl$48 = /* @__PURE__ */ template(`<span class="inline-flex items-center gap-1 mr-2 px-2 py-0.5 bg-blue-50 border border-blue-200 rounded"><button class="text-red-500 hover:text-red-700 text-xs ml-1">x`), _tmpl$49 = /* @__PURE__ */ template(`<p class="text-sm font-medium text-green-600 mb-2">Prize: $`);
const AdminManage = (props) => {
  const [schools, setSchools] = createSignal([]);
  const [categories, setCategories] = createSignal([]);
  const [users, setUsers] = createSignal([]);
  const [teams, setTeams] = createSignal([]);
  const [activeTab, setActiveTab] = createSignal("schools");
  const [searchQuery, setSearchQuery] = createSignal("");
  const [filterVerified, setFilterVerified] = createSignal([]);
  const [filterSchool, setFilterSchool] = createSignal([]);
  const [expandedUserId, setExpandedUserId] = createSignal(null);
  const [expandedTeamId, setExpandedTeamId] = createSignal(null);
  const [expandedSchoolId, setExpandedSchoolId] = createSignal(null);
  const [adminTeamLeader, setAdminTeamLeader] = createSignal(null);
  const [filterTeamStatus, setFilterTeamStatus] = createSignal([]);
  const [filterGrade, setFilterGrade] = createSignal([]);
  const [sortColumn, setSortColumn] = createSignal("id");
  const [sortDirection, setSortDirection] = createSignal("desc");
  const [teamSearchQuery, setTeamSearchQuery] = createSignal("");
  const [editingCategoryId, setEditingCategoryId] = createSignal(null);
  const [editingSchoolId, setEditingSchoolId] = createSignal(null);
  const [teamSelectedCategories, setTeamSelectedCategories] = createSignal([]);
  const [categoryInfoOpen, setCategoryInfoOpen] = createSignal(false);
  const [categoryInfoData, setCategoryInfoData] = createSignal(null);
  const [importStatus, setImportStatus] = createSignal(null);
  const parseCSV = (text) => {
    const lines = text.trim().split("\n");
    if (lines.length < 2) return [];
    const headers = lines[0].split(",").map((h) => h.trim().toLowerCase().replace(/[^a-z0-9]/g, ""));
    return lines.slice(1).filter((l) => l.trim()).map((line) => {
      const values = [];
      let current = "";
      let inQuotes = false;
      for (const char of line) {
        if (char === '"') {
          inQuotes = !inQuotes;
        } else if (char === "," && !inQuotes) {
          values.push(current.trim());
          current = "";
        } else {
          current += char;
        }
      }
      values.push(current.trim());
      const obj = {};
      headers.forEach((h, i) => {
        obj[h] = values[i] || "";
      });
      return obj;
    });
  };
  const handleStudentCSV = (e) => {
    const file = e.target.files[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = (ev) => {
      const rows = parseCSV(ev.target.result);
      if (!rows.length) {
        alert("No data rows found in CSV");
        return;
      }
      setImportStatus({
        type: "loading",
        message: `Importing ${rows.length} students...`
      });
      fetch("/api/admin/users", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          action: "import-students",
          userId: 0,
          data: {
            students: rows
          }
        })
      }).then((r) => r.json()).then((d) => {
        setImportStatus({
          type: "success",
          message: `Created: ${d.created}, Skipped: ${d.skipped}${d.errors?.length ? "\n" + d.errors.join("\n") : ""}`
        });
        fetchUsers();
      }).catch(() => setImportStatus({
        type: "error",
        message: "Import failed"
      }));
    };
    reader.readAsText(file);
    e.target.value = "";
  };
  const handleTeamCSV = (e) => {
    const file = e.target.files[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = (ev) => {
      const rows = parseCSV(ev.target.result);
      if (!rows.length) {
        alert("No data rows found in CSV");
        return;
      }
      setImportStatus({
        type: "loading",
        message: `Importing ${rows.length} teams...`
      });
      fetch("/api/admin/teams", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          action: "import-teams",
          data: {
            teams: rows.map((r) => ({
              name: r.name || r.teamname,
              project: r.project || r.description || "",
              leaderEmail: r.leaderemail || r.leader || r.email,
              maxSize: r.maxsize || r.max || "4",
              memberEmails: r.members || r.memberemails || ""
            }))
          }
        })
      }).then((r) => r.json()).then((d) => {
        setImportStatus({
          type: "success",
          message: `Created: ${d.created}, Skipped: ${d.skipped}${d.errors?.length ? "\n" + d.errors.join("\n") : ""}`
        });
        fetchTeams();
      }).catch(() => setImportStatus({
        type: "error",
        message: "Import failed"
      }));
    };
    reader.readAsText(file);
    e.target.value = "";
  };
  const showCategoryInfo = (cat) => {
    setCategoryInfoData(cat);
    setCategoryInfoOpen(true);
  };
  const CategoryPicker = (props2) => {
    const cats = () => props2.categories || categories() || [];
    return (() => {
      var _el$ = _tmpl$$2(), _el$2 = _el$.firstChild;
      insert(_el$, (() => {
        var _c$ = createMemo(() => !!!props2.hideLabel);
        return () => _c$() && _tmpl$2$2();
      })(), _el$2);
      insert(_el$2, () => cats().map((cat) => {
        const isSelected = () => (props2.selected || []).some((s) => s.value === cat.value);
        return (() => {
          var _el$4 = _tmpl$3$2(), _el$5 = _el$4.firstChild;
          _el$4.$$click = () => {
            if (isSelected()) {
              props2.onChange((props2.selected || []).filter((s) => s.value !== cat.value));
            } else {
              props2.onChange([...props2.selected || [], {
                value: cat.value,
                label: cat.label
              }]);
            }
          };
          insert(_el$5, () => cat.label, null);
          insert(_el$5, () => cat.prize ? ` ($${cat.prize})` : "", null);
          insert(_el$4, (() => {
            var _c$2 = createMemo(() => !!cat.description);
            return () => _c$2() && (() => {
              var _el$6 = _tmpl$4$2();
              _el$6.$$click = (e) => {
                e.stopPropagation();
                showCategoryInfo(cat);
              };
              createRenderEffect(() => className(_el$6, `ml-2 shrink-0 ${isSelected() ? "text-blue-200" : "text-zinc-400"}`));
              return _el$6;
            })();
          })(), null);
          createRenderEffect(() => className(_el$4, `flex items-center justify-between px-3 py-2 rounded-lg text-sm font-medium transition-all border ${isSelected() ? "bg-blue-600 text-white border-blue-500" : "bg-zinc-100 text-zinc-700 border-zinc-200 hover:bg-zinc-200"}`));
          return _el$4;
        })();
      }));
      return _el$;
    })();
  };
  const getTeamStatus = (u) => {
    if (u.teams?.length > 0) return "on-team";
    if (u.requests?.length > 0) return "looking";
    return "no-team";
  };
  const exportUsersCSV = () => {
    const rows = filteredUsers();
    const parentHeaders = [];
    for (let i = 1; i <= 4; i++) {
      parentHeaders.push(`Parent ${i} Name`, `Parent ${i} Email`);
    }
    const seenLabels = /* @__PURE__ */ new Set();
    const distinctCats = [];
    for (const c of categories()) {
      const key = (c.label || "").toLowerCase();
      if (!key || seenLabels.has(key)) continue;
      seenLabels.add(key);
      distinctCats.push({
        label: c.label,
        key
      });
    }
    distinctCats.sort((a2, b) => a2.key < b.key ? -1 : a2.key > b.key ? 1 : 0);
    const catHeaders = distinctCats.map((c) => c.label);
    const headers = ["Name", "Email", "Phone", "School", "Major", "Grade", "Shirt", "Team", "Team Status", "Verified", "Created", ...parentHeaders, ...catHeaders];
    const csvRows = [headers.join(",")];
    const teamMap = {};
    for (const t of teams()) {
      teamMap[t.id] = t;
    }
    for (const u of rows) {
      const teamStatus = getTeamStatus(u);
      const teamName = u.teams?.[0]?.name || (u.requests?.[0]?.team?.name ? `Req: ${u.requests[0].team.name}` : "");
      let parents = [];
      try {
        parents = JSON.parse(u.parents || "[]");
      } catch {
      }
      const parentCols = [];
      for (let i = 0; i < 4; i++) {
        const p = parents[i];
        parentCols.push(`"${(p ? `${p.fname || ""} ${p.lname || ""}`.trim() : "").replace(/"/g, '""')}"`);
        parentCols.push(p?.email || "");
      }
      const teamCatKeys = /* @__PURE__ */ new Set();
      const team = u.teams?.[0] ? teamMap[u.teams[0].id] : null;
      if (team) {
        try {
          for (const tc of JSON.parse(team.categories || "[]")) {
            if (tc?.label) teamCatKeys.add(tc.label.toLowerCase());
          }
        } catch {
        }
      }
      const catCols = distinctCats.map((c) => teamCatKeys.has(c.key) ? "1" : "");
      csvRows.push([`"${(u.name || "").replace(/"/g, '""')}"`, u.email, u.phone || "", u.school || "", u.major || "", u.grade || "", u.shirt || "", `"${teamName.replace(/"/g, '""')}"`, teamStatus, u.verified ? "Yes" : "No", new Date(u.createdAt).toLocaleDateString(), ...parentCols, ...catCols].join(","));
    }
    const blob = new Blob([csvRows.join("\n")], {
      type: "text/csv"
    });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `users-export-${(/* @__PURE__ */ new Date()).toISOString().slice(0, 10)}.csv`;
    a.click();
    URL.revokeObjectURL(url);
  };
  const exportParentsCSV = () => {
    const rows = filteredUsers();
    const headers = ["Student Name", "Student Email", "Parent First Name", "Parent Last Name", "Parent Email", "Parent Phone", "Relationship"];
    const csvRows = [headers.join(",")];
    for (const u of rows) {
      let parents = [];
      try {
        parents = JSON.parse(u.parents || "[]");
      } catch {
      }
      if (parents.length === 0) {
        csvRows.push([`"${(u.name || "").replace(/"/g, '""')}"`, u.email, "", "", "", "", ""].join(","));
      } else {
        for (const p of parents) {
          csvRows.push([`"${(u.name || "").replace(/"/g, '""')}"`, u.email, `"${(p.fname || "").replace(/"/g, '""')}"`, `"${(p.lname || "").replace(/"/g, '""')}"`, p.email || "", p.phone || "", `"${(p.relationship || "").replace(/"/g, '""')}"`].join(","));
        }
      }
    }
    const blob = new Blob([csvRows.join("\n")], {
      type: "text/csv"
    });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `parents-export-${(/* @__PURE__ */ new Date()).toISOString().slice(0, 10)}.csv`;
    a.click();
    URL.revokeObjectURL(url);
  };
  const exportTeamsCSV = () => {
    const rows = filteredTeams();
    const headers = ["Team", "Project", "Leader", "Leader Email", "Members", "Size", "Pending Requests", "Categories"];
    const csvRows = [headers.join(",")];
    for (const t of rows) {
      const cats = (() => {
        try {
          return JSON.parse(t.categories || "[]").map((c) => c.label).join("; ");
        } catch {
          return "";
        }
      })();
      csvRows.push([`"${(t.name || "").replace(/"/g, '""')}"`, `"${(t.project || "").replace(/"/g, '""')}"`, `"${(t.leader?.name || "").replace(/"/g, '""')}"`, t.leader?.email || "", `"${(t.members || []).map((m) => m.name).join("; ")}"`, `${t.members?.length || 0}/${t.maxSize}`, t.requests?.length || 0, `"${cats}"`].join(","));
    }
    const blob = new Blob([csvRows.join("\n")], {
      type: "text/csv"
    });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `teams-export-${(/* @__PURE__ */ new Date()).toISOString().slice(0, 10)}.csv`;
    a.click();
    URL.revokeObjectURL(url);
  };
  const bulkVerify = () => {
    const unverified = filteredUsers().filter((u) => !u.verified);
    if (!unverified.length) {
      alert("No unverified users in current filter.");
      return;
    }
    if (!confirm(`Verify ${unverified.length} unverified user(s)?`)) return;
    Promise.all(unverified.map((u) => fetch("/api/admin/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        action: "verify",
        userId: u.id
      })
    }))).then(() => fetchUsers());
  };
  const schoolBreakdown = () => {
    const breakdown = {};
    for (const u of users()) {
      const s = u.school || "Unknown";
      if (!breakdown[s]) breakdown[s] = {
        total: 0,
        verified: 0,
        onTeam: 0,
        looking: 0,
        noTeam: 0
      };
      breakdown[s].total++;
      if (u.verified) breakdown[s].verified++;
      const ts = getTeamStatus(u);
      if (ts === "on-team") breakdown[s].onTeam++;
      else if (ts === "looking") breakdown[s].looking++;
      else breakdown[s].noTeam++;
    }
    return Object.entries(breakdown).sort((a, b) => b[1].total - a[1].total);
  };
  const toggleSort = (col) => {
    if (sortColumn() === col) {
      setSortDirection(sortDirection() === "asc" ? "desc" : "asc");
    } else {
      setSortColumn(col);
      setSortDirection("asc");
    }
  };
  const filteredUsers = () => {
    let result = users().filter((u) => {
      const query = searchQuery().toLowerCase();
      if (query && !u.name?.toLowerCase().includes(query) && !u.email?.toLowerCase().includes(query) && !u.teams?.[0]?.name?.toLowerCase().includes(query)) {
        return false;
      }
      if (filterVerified().length > 0) {
        const v = u.verified ? "yes" : "no";
        if (!filterVerified().some((o) => o.value === v)) return false;
      }
      if (filterSchool().length > 0 && !filterSchool().some((o) => o.value === u.school)) return false;
      if (filterGrade().length > 0 && !filterGrade().some((o) => o.value === u.grade)) return false;
      if (filterTeamStatus().length > 0 && !filterTeamStatus().some((o) => o.value === getTeamStatus(u))) return false;
      return true;
    });
    const col = sortColumn();
    const dir = sortDirection() === "asc" ? 1 : -1;
    result.sort((a, b) => {
      let va, vb;
      if (col === "name") {
        va = a.name?.toLowerCase() || "";
        vb = b.name?.toLowerCase() || "";
      } else if (col === "email") {
        va = a.email?.toLowerCase() || "";
        vb = b.email?.toLowerCase() || "";
      } else if (col === "school") {
        va = a.school || "";
        vb = b.school || "";
      } else if (col === "grade") {
        va = a.grade || "";
        vb = b.grade || "";
      } else if (col === "team") {
        va = a.teams?.[0]?.name?.toLowerCase() || "zzz";
        vb = b.teams?.[0]?.name?.toLowerCase() || "zzz";
      } else if (col === "created") {
        va = a.createdAt || "";
        vb = b.createdAt || "";
      } else {
        va = a.id;
        vb = b.id;
      }
      if (va < vb) return -1 * dir;
      if (va > vb) return 1 * dir;
      return 0;
    });
    return result;
  };
  const filteredTeams = () => {
    const query = teamSearchQuery().toLowerCase();
    if (!query) return teams();
    return teams().filter((t) => t.name?.toLowerCase().includes(query) || t.project?.toLowerCase().includes(query) || t.leader?.name?.toLowerCase().includes(query) || t.members?.some((m) => m.name?.toLowerCase().includes(query)));
  };
  const fetchSchools = () => {
    fetch("/api/schools").then((res) => res.json()).then((data) => {
      setSchools(data.schools);
    });
  };
  const fetchCategories = () => {
    fetch("/api/categories").then((res) => res.json()).then((data) => {
      setCategories(data.categories);
    });
  };
  const fetchUsers = () => {
    fetch("/api/admin/users").then((res) => res.json()).then((data) => {
      setUsers(data.users);
    });
  };
  const fetchTeams = () => {
    fetch("/api/admin/teams").then((res) => res.json()).then((data) => {
      setTeams(data.teams || []);
    });
  };
  createEffect(() => {
    fetchSchools();
    fetchCategories();
    fetchUsers();
    fetchTeams();
  });
  return (() => {
    var _el$7 = _tmpl$12$2(), _el$8 = _el$7.firstChild; _el$8.firstChild; var _el$10 = _el$8.nextSibling, _el$11 = _el$10.firstChild, _el$12 = _el$11.firstChild, _el$13 = _el$11.nextSibling, _el$14 = _el$13.firstChild, _el$15 = _el$13.nextSibling, _el$16 = _el$15.firstChild, _el$17 = _el$15.nextSibling, _el$18 = _el$17.firstChild, _el$19 = _el$17.nextSibling, _el$20 = _el$19.firstChild, _el$21 = _el$19.nextSibling, _el$22 = _el$21.firstChild, _el$23 = _el$10.nextSibling, _el$24 = _el$23.nextSibling, _el$25 = _el$24.nextSibling, _el$26 = _el$25.firstChild, _el$27 = _el$26.firstChild, _el$28 = _el$25.nextSibling, _el$29 = _el$28.firstChild, _el$30 = _el$29.firstChild, _el$31 = _el$30.firstChild, _el$32 = _el$31.nextSibling, _el$33 = _el$28.nextSibling, _el$34 = _el$33.firstChild, _el$42 = _el$34.firstChild, _el$43 = _el$42.firstChild, _el$44 = _el$43.firstChild, _el$46 = _el$44.nextSibling; _el$46.nextSibling; var _el$47 = _el$33.nextSibling, _el$48 = _el$47.firstChild, _el$55 = _el$48.firstChild, _el$56 = _el$55.nextSibling, _el$57 = _el$56.firstChild, _el$58 = _el$57.firstChild, _el$60 = _el$58.nextSibling; _el$60.nextSibling; var _el$61 = _el$57.nextSibling;
    insert(_el$8, createComponent(Button, {
      onClick: () => props.setPage("/admin"),
      children: "Back"
    }), null);
    insert(_el$12, () => users().length);
    insert(_el$14, () => users().filter((u) => u.verified).length);
    insert(_el$16, () => users().filter((u) => !u.verified).length);
    insert(_el$18, () => teams().length);
    insert(_el$20, () => users().filter((u) => getTeamStatus(u) === "on-team").length);
    insert(_el$22, () => users().filter((u) => getTeamStatus(u) === "looking").length);
    insert(_el$23, createComponent(Table, {
      get children() {
        return [createComponent(TableHeader, {
          get children() {
            return createComponent(TableRow, {
              get children() {
                return [createComponent(TableHead, {
                  children: "School"
                }), createComponent(TableHead, {
                  "class": "text-center",
                  children: "Total"
                }), createComponent(TableHead, {
                  "class": "text-center",
                  children: "Verified"
                }), createComponent(TableHead, {
                  "class": "text-center",
                  children: "On Team"
                }), createComponent(TableHead, {
                  "class": "text-center",
                  children: "Looking"
                }), createComponent(TableHead, {
                  "class": "text-center",
                  children: "No Team"
                })];
              }
            });
          }
        }), createComponent(TableBody, {
          get children() {
            return createComponent(For, {
              get each() {
                return schoolBreakdown();
              },
              children: ([school, data]) => createComponent(TableRow, {
                get children() {
                  return [createComponent(TableCell, {
                    "class": "font-medium",
                    get children() {
                      return schools().find((s) => s.value === school)?.label || school;
                    }
                  }), createComponent(TableCell, {
                    "class": "text-center",
                    get children() {
                      return data.total;
                    }
                  }), createComponent(TableCell, {
                    "class": "text-center text-green-700",
                    get children() {
                      return data.verified;
                    }
                  }), createComponent(TableCell, {
                    "class": "text-center text-blue-700",
                    get children() {
                      return data.onTeam;
                    }
                  }), createComponent(TableCell, {
                    "class": "text-center text-amber-700",
                    get children() {
                      return data.looking;
                    }
                  }), createComponent(TableCell, {
                    "class": "text-center text-zinc-500",
                    get children() {
                      return data.noTeam;
                    }
                  })];
                }
              })
            });
          }
        })];
      }
    }));
    insert(_el$24, () => ["schools", "categories", "teams", "users"].map((tab) => (() => {
      var _el$68 = _tmpl$13$2();
      _el$68.$$click = () => setActiveTab(tab);
      insert(_el$68, () => tab === "schools" ? "Schools & Majors" : tab.charAt(0).toUpperCase() + tab.slice(1));
      createRenderEffect(() => className(_el$68, `flex-1 px-4 py-2 rounded-md text-sm font-medium transition-all ${activeTab() === tab ? "bg-white text-zinc-900 shadow-sm" : "text-zinc-500 hover:text-zinc-700"}`));
      return _el$68;
    })()));
    _el$27.addEventListener("submit", (e) => {
      e.preventDefault();
      const formData = new FormData(e.currentTarget);
      fetch("/api/schools", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          label: formData.get("label"),
          value: formData.get("value")
        })
      }).then((res) => res.json()).then(() => {
        fetchSchools();
        e.target.reset();
      });
    });
    insert(_el$27, createComponent(TextFieldRoot, {
      "class": "w-full",
      get children() {
        return [createComponent(TextFieldLabel, {
          children: "School Name"
        }), createComponent(TextField, {
          name: "label",
          placeholder: "e.g. Bergen Tech",
          required: true,
          "class": "p-2"
        })];
      }
    }), null);
    insert(_el$27, createComponent(TextFieldRoot, {
      "class": "w-full",
      get children() {
        return [createComponent(TextFieldLabel, {
          children: "Value (ID)"
        }), createComponent(TextField, {
          name: "value",
          placeholder: "e.g. bt",
          required: true,
          "class": "p-2"
        })];
      }
    }), null);
    insert(_el$27, createComponent(Button, {
      type: "submit",
      children: "Add School"
    }), null);
    insert(_el$26, createComponent(For, {
      get each() {
        return schools();
      },
      children: (school) => createComponent(Card, {
        "class": "border-zinc-200",
        get children() {
          return createComponent(CardContent, {
            "class": "p-4",
            get children() {
              return [(() => {
                var _el$69 = _tmpl$14$2();
                insert(_el$69, (() => {
                  var _c$5 = createMemo(() => editingSchoolId() === school.id);
                  return () => _c$5() ? (() => {
                    var _el$82 = _tmpl$17$2();
                    _el$82.$$click = (e) => e.stopPropagation();
                    _el$82.addEventListener("submit", (e) => {
                      e.preventDefault();
                      const fd = new FormData(e.currentTarget);
                      fetch("/api/schools", {
                        method: "PATCH",
                        headers: {
                          "Content-Type": "application/json"
                        },
                        body: JSON.stringify({
                          id: school.id,
                          label: fd.get("label"),
                          value: fd.get("value")
                        })
                      }).then(() => {
                        fetchSchools();
                        setEditingSchoolId(null);
                      });
                    });
                    insert(_el$82, createComponent(TextField, {
                      name: "label",
                      get value() {
                        return school.label;
                      },
                      "class": "p-1 text-sm w-40"
                    }), null);
                    insert(_el$82, createComponent(TextField, {
                      name: "value",
                      get value() {
                        return school.value;
                      },
                      "class": "p-1 text-sm w-20"
                    }), null);
                    insert(_el$82, createComponent(Button, {
                      type: "submit",
                      size: "sm",
                      children: "Save"
                    }), null);
                    insert(_el$82, createComponent(Button, {
                      type: "button",
                      size: "sm",
                      variant: "outline",
                      onClick: () => setEditingSchoolId(null),
                      children: "Cancel"
                    }), null);
                    return _el$82;
                  })() : (() => {
                    var _el$83 = _tmpl$18$2(), _el$84 = _el$83.firstChild, _el$85 = _el$84.nextSibling, _el$86 = _el$85.firstChild, _el$88 = _el$86.nextSibling; _el$88.nextSibling; var _el$89 = _el$85.nextSibling;
                    insert(_el$84, () => school.label);
                    insert(_el$85, () => school.value, _el$88);
                    _el$89.$$click = () => setEditingSchoolId(school.id);
                    return _el$83;
                  })();
                })(), null);
                insert(_el$69, createComponent(Button, {
                  variant: "destructive",
                  size: "sm",
                  onClick: () => {
                    if (!confirm("Delete school and all its majors?")) return;
                    fetch("/api/schools", {
                      method: "DELETE",
                      headers: {
                        "Content-Type": "application/json"
                      },
                      body: JSON.stringify({
                        id: school.id
                      })
                    }).then(() => fetchSchools());
                  },
                  children: "Delete"
                }), null);
                return _el$69;
              })(), (() => {
                var _el$70 = _tmpl$15$2(), _el$71 = _el$70.firstChild; _el$71.firstChild; var _el$73 = _el$71.nextSibling; _el$73.firstChild; var _el$75 = _el$73.nextSibling, _el$76 = _el$75.firstChild, _el$77 = _el$76.nextSibling;
                insert(_el$71, createComponent(Button, {
                  size: "sm",
                  get variant() {
                    return school.allowSelfRegistration ? "outline" : "destructive";
                  },
                  onClick: () => {
                    fetch("/api/schools", {
                      method: "PATCH",
                      headers: {
                        "Content-Type": "application/json"
                      },
                      body: JSON.stringify({
                        id: school.id,
                        allowSelfRegistration: !school.allowSelfRegistration
                      })
                    }).then(() => fetchSchools());
                  },
                  get children() {
                    return school.allowSelfRegistration ? "On" : "Off";
                  }
                }), null);
                insert(_el$73, createComponent(Button, {
                  size: "sm",
                  get variant() {
                    return school.allowTeamCreation ? "outline" : "destructive";
                  },
                  onClick: () => {
                    fetch("/api/schools", {
                      method: "PATCH",
                      headers: {
                        "Content-Type": "application/json"
                      },
                      body: JSON.stringify({
                        id: school.id,
                        allowTeamCreation: !school.allowTeamCreation
                      })
                    }).then(() => fetchSchools());
                  },
                  get children() {
                    return school.allowTeamCreation ? "On" : "Off";
                  }
                }), null);
                insert(_el$77, (() => {
                  var _c$6 = createMemo(() => school.admins?.length > 0);
                  return () => _c$6() ? school.admins.map((a) => a.user?.name || a.user?.email).join(", ") : _tmpl$19$2();
                })());
                return _el$70;
              })(), (() => {
                var _el$78 = _tmpl$16$2(), _el$79 = _el$78.firstChild, _el$81 = _el$79.nextSibling; _el$81.nextSibling;
                _el$78.$$click = () => setExpandedSchoolId(expandedSchoolId() === school.id ? null : school.id);
                insert(_el$78, () => expandedSchoolId() === school.id ? "Hide" : "Show", _el$79);
                insert(_el$78, () => school.majors?.length || 0, _el$81);
                return _el$78;
              })(), createMemo(() => createMemo(() => expandedSchoolId() === school.id)() && (() => {
                var _el$91 = _tmpl$20$1(), _el$92 = _el$91.firstChild;
                _el$92.addEventListener("submit", (e) => {
                  e.preventDefault();
                  const fd = new FormData(e.currentTarget);
                  fetch("/api/majors", {
                    method: "POST",
                    headers: {
                      "Content-Type": "application/json"
                    },
                    body: JSON.stringify({
                      label: fd.get("label"),
                      value: fd.get("value"),
                      schoolId: school.id
                    })
                  }).then(() => {
                    fetchSchools();
                    e.target.reset();
                  });
                });
                insert(_el$92, createComponent(TextFieldRoot, {
                  "class": "w-full",
                  get children() {
                    return [createComponent(TextFieldLabel, {
                      children: "Major Name"
                    }), createComponent(TextField, {
                      name: "label",
                      placeholder: "e.g. Computer Science",
                      required: true,
                      "class": "p-2"
                    })];
                  }
                }), null);
                insert(_el$92, createComponent(TextFieldRoot, {
                  "class": "w-full",
                  get children() {
                    return [createComponent(TextFieldLabel, {
                      children: "Value (ID)"
                    }), createComponent(TextField, {
                      name: "value",
                      placeholder: "e.g. compsci",
                      required: true,
                      "class": "p-2"
                    })];
                  }
                }), null);
                insert(_el$92, createComponent(Button, {
                  type: "submit",
                  size: "sm",
                  children: "Add"
                }), null);
                insert(_el$91, (() => {
                  var _c$7 = createMemo(() => school.majors?.length > 0);
                  return () => _c$7() ? (() => {
                    var _el$93 = _tmpl$21$1();
                    insert(_el$93, createComponent(For, {
                      get each() {
                        return school.majors;
                      },
                      children: (major) => (() => {
                        var _el$94 = _tmpl$22$1(), _el$95 = _el$94.firstChild, _el$96 = _el$95.firstChild, _el$97 = _el$96.nextSibling, _el$98 = _el$97.firstChild, _el$100 = _el$98.nextSibling; _el$100.nextSibling;
                        insert(_el$95, () => major.label, _el$96);
                        insert(_el$97, () => major.value, _el$100);
                        insert(_el$94, createComponent(Button, {
                          variant: "destructive",
                          size: "sm",
                          onClick: () => {
                            if (!confirm("Delete major?")) return;
                            fetch("/api/majors", {
                              method: "DELETE",
                              headers: {
                                "Content-Type": "application/json"
                              },
                              body: JSON.stringify({
                                id: major.id
                              })
                            }).then(() => fetchSchools());
                          },
                          children: "Delete"
                        }), null);
                        return _el$94;
                      })()
                    }));
                    return _el$93;
                  })() : _tmpl$23$1();
                })(), null);
                return _el$91;
              })())];
            }
          });
        }
      })
    }), null);
    _el$30.addEventListener("submit", (e) => {
      e.preventDefault();
      const formData = new FormData(e.currentTarget);
      fetch("/api/categories", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          label: formData.get("label"),
          value: formData.get("value"),
          description: formData.get("description"),
          prize: formData.get("prize")
        })
      }).then((res) => res.json()).then(() => {
        fetchCategories();
        e.target.reset();
      });
    });
    insert(_el$31, createComponent(TextFieldRoot, {
      "class": "w-full",
      get children() {
        return [createComponent(TextFieldLabel, {
          children: "Category Name"
        }), createComponent(TextField, {
          name: "label",
          placeholder: "e.g. Best AI Project",
          required: true,
          "class": "p-2"
        })];
      }
    }), null);
    insert(_el$31, createComponent(TextFieldRoot, {
      "class": "w-full",
      get children() {
        return [createComponent(TextFieldLabel, {
          children: "Value (ID)"
        }), createComponent(TextField, {
          name: "value",
          placeholder: "e.g. ai",
          required: true,
          "class": "p-2"
        })];
      }
    }), null);
    insert(_el$32, createComponent(TextFieldRoot, {
      "class": "w-full",
      get children() {
        return [createComponent(TextFieldLabel, {
          children: "Description"
        }), createComponent(TextField, {
          name: "description",
          placeholder: "Describe what this award category is for...",
          "class": "p-2"
        })];
      }
    }), null);
    insert(_el$32, createComponent(TextFieldRoot, {
      "class": "w-[120px]",
      get children() {
        return [createComponent(TextFieldLabel, {
          children: "Prize ($)"
        }), createComponent(TextField, {
          name: "prize",
          type: "number",
          min: "0",
          step: "0.01",
          placeholder: "0",
          "class": "p-2"
        })];
      }
    }), null);
    insert(_el$32, createComponent(Button, {
      type: "submit",
      children: "Add"
    }), null);
    insert(_el$29, createComponent(For, {
      get each() {
        return categories();
      },
      children: (cat) => createComponent(Card, {
        "class": "border-zinc-200",
        get children() {
          return createComponent(CardContent, {
            "class": "p-4",
            get children() {
              return createMemo(() => editingCategoryId() === cat.id)() ? (() => {
                var _el$102 = _tmpl$24$1(), _el$103 = _el$102.firstChild, _el$104 = _el$103.nextSibling;
                _el$102.addEventListener("submit", (e) => {
                  e.preventDefault();
                  const fd = new FormData(e.currentTarget);
                  fetch("/api/categories", {
                    method: "PATCH",
                    headers: {
                      "Content-Type": "application/json"
                    },
                    body: JSON.stringify({
                      id: cat.id,
                      label: fd.get("label"),
                      description: fd.get("desc"),
                      prize: fd.get("prize")
                    })
                  }).then(() => {
                    fetchCategories();
                    setEditingCategoryId(null);
                  });
                });
                insert(_el$103, createComponent(TextFieldRoot, {
                  "class": "flex-1",
                  get children() {
                    return [createComponent(TextFieldLabel, {
                      children: "Label"
                    }), createComponent(TextField, {
                      name: "label",
                      get value() {
                        return cat.label;
                      },
                      "class": "p-1 text-sm"
                    })];
                  }
                }), null);
                insert(_el$103, createComponent(TextFieldRoot, {
                  "class": "w-24",
                  get children() {
                    return [createComponent(TextFieldLabel, {
                      children: "Prize ($)"
                    }), createComponent(TextField, {
                      name: "prize",
                      type: "number",
                      min: "0",
                      step: "0.01",
                      get value() {
                        return cat.prize || 0;
                      },
                      "class": "p-1 text-sm"
                    })];
                  }
                }), null);
                insert(_el$102, createComponent(TextFieldRoot, {
                  "class": "w-full",
                  get children() {
                    return [createComponent(TextFieldLabel, {
                      children: "Description"
                    }), createComponent(TextField, {
                      name: "desc",
                      get value() {
                        return cat.description;
                      },
                      "class": "p-1 text-sm"
                    })];
                  }
                }), _el$104);
                insert(_el$104, createComponent(Button, {
                  type: "submit",
                  size: "sm",
                  children: "Save"
                }), null);
                insert(_el$104, createComponent(Button, {
                  type: "button",
                  size: "sm",
                  variant: "outline",
                  onClick: () => setEditingCategoryId(null),
                  children: "Cancel"
                }), null);
                return _el$102;
              })() : (() => {
                var _el$105 = _tmpl$25$1(), _el$106 = _el$105.firstChild, _el$107 = _el$106.firstChild, _el$108 = _el$107.firstChild, _el$109 = _el$108.nextSibling, _el$110 = _el$109.firstChild, _el$112 = _el$110.nextSibling; _el$112.nextSibling; var _el$113 = _el$107.nextSibling, _el$114 = _el$106.nextSibling;
                insert(_el$107, () => cat.label, _el$108);
                insert(_el$109, () => cat.value, _el$112);
                insert(_el$113, () => cat.description || _tmpl$26$1());
                insert(_el$106, (() => {
                  var _c$8 = createMemo(() => cat.prize > 0);
                  return () => _c$8() && (() => {
                    var _el$116 = _tmpl$27$1(); _el$116.firstChild;
                    insert(_el$116, () => cat.prize.toLocaleString(), null);
                    return _el$116;
                  })();
                })(), null);
                insert(_el$114, createComponent(Button, {
                  size: "sm",
                  variant: "outline",
                  onClick: () => setEditingCategoryId(cat.id),
                  children: "Edit"
                }), null);
                insert(_el$114, createComponent(Button, {
                  variant: "destructive",
                  size: "sm",
                  onClick: () => {
                    if (!confirm("Delete category?")) return;
                    fetch("/api/categories", {
                      method: "DELETE",
                      headers: {
                        "Content-Type": "application/json"
                      },
                      body: JSON.stringify({
                        id: cat.id
                      })
                    }).then(() => fetchCategories());
                  },
                  children: "Delete"
                }), null);
                return _el$105;
              })();
            }
          });
        }
      })
    }), null);
    insert(_el$34, createComponent(Card, {
      "class": "border-zinc-200",
      get children() {
        return [createComponent(CardHeader, {
          "class": "pb-2",
          get children() {
            return createComponent(CardTitle, {
              "class": "text-lg",
              children: "Create Team"
            });
          }
        }), createComponent(CardContent, {
          get children() {
            return [(() => {
              var _el$35 = _tmpl$5$2();
              _el$35.addEventListener("submit", (e) => {
                e.preventDefault();
                const formData = new FormData(e.currentTarget);
                const leaderVal = adminTeamLeader();
                if (!leaderVal) {
                  alert("Select a team leader");
                  return;
                }
                fetch("/api/admin/teams", {
                  method: "POST",
                  headers: {
                    "Content-Type": "application/json"
                  },
                  body: JSON.stringify({
                    action: "create",
                    data: {
                      name: formData.get("teamName"),
                      project: formData.get("teamProject"),
                      leaderId: leaderVal.id,
                      maxSize: formData.get("teamMaxSize") || "4",
                      experience: "beginner",
                      categories: JSON.stringify(teamSelectedCategories())
                    }
                  })
                }).then((r) => r.json()).then((d) => {
                  if (!d.error) {
                    fetchTeams();
                    e.target.reset();
                    setAdminTeamLeader(null);
                    setTeamSelectedCategories([]);
                  } else alert(d.error || "Failed to create team");
                });
              });
              insert(_el$35, createComponent(TextFieldRoot, {
                "class": "flex-1 min-w-[150px]",
                get children() {
                  return [createComponent(TextFieldLabel, {
                    children: "Team Name"
                  }), createComponent(TextField, {
                    name: "teamName",
                    required: true,
                    "class": "p-2",
                    placeholder: "Team name"
                  })];
                }
              }), null);
              insert(_el$35, createComponent(TextFieldRoot, {
                "class": "flex-1 min-w-[150px]",
                get children() {
                  return [createComponent(TextFieldLabel, {
                    children: "Project"
                  }), createComponent(TextField, {
                    name: "teamProject",
                    required: true,
                    "class": "p-2",
                    placeholder: "Project description"
                  })];
                }
              }), null);
              insert(_el$35, createComponent(Select, {
                get options() {
                  return users().filter((u) => !u.admin && u.verified);
                },
                optionValue: "id",
                optionTextValue: "name",
                placeholder: "Select Leader",
                onChange: setAdminTeamLeader,
                itemComponent: (props2) => createComponent(SelectItem, {
                  get item() {
                    return props2.item;
                  },
                  get children() {
                    return [createMemo(() => props2.item.rawValue.name), " (", createMemo(() => props2.item.rawValue.email), ")"];
                  }
                }),
                get children() {
                  return [createComponent(SelectTrigger, {
                    "class": "w-[200px]",
                    get children() {
                      return createComponent(SelectValue, {
                        children: (state) => state.selectedOption()?.name || "Select Leader"
                      });
                    }
                  }), createComponent(SelectContent, {})];
                }
              }), null);
              insert(_el$35, createComponent(TextFieldRoot, {
                "class": "w-[80px]",
                get children() {
                  return [createComponent(TextFieldLabel, {
                    children: "Max"
                  }), createComponent(TextField, {
                    name: "teamMaxSize",
                    type: "number",
                    min: "1",
                    max: "4",
                    value: "4",
                    "class": "p-2"
                  })];
                }
              }), null);
              insert(_el$35, createComponent(Button, {
                type: "submit",
                children: "Create"
              }), null);
              return _el$35;
            })(), (() => {
              var _el$36 = _tmpl$6$2();
              insert(_el$36, createComponent(CategoryPicker, {
                get categories() {
                  return categories();
                },
                get selected() {
                  return teamSelectedCategories();
                },
                onChange: setTeamSelectedCategories
              }));
              return _el$36;
            })()];
          }
        })];
      }
    }), _el$42);
    insert(_el$34, createComponent(Card, {
      "class": "border-zinc-200",
      get children() {
        return [createComponent(CardHeader, {
          "class": "pb-2",
          get children() {
            return createComponent(CardTitle, {
              "class": "text-lg",
              children: "Import Teams from CSV"
            });
          }
        }), createComponent(CardContent, {
          get children() {
            return [_tmpl$7$2(), (() => {
              var _el$38 = _tmpl$8$2(), _el$39 = _el$38.firstChild, _el$40 = _el$39.nextSibling, _el$41 = _el$40.nextSibling;
              _el$41.addEventListener("change", handleTeamCSV);
              return _el$38;
            })()];
          }
        })];
      }
    }), _el$42);
    insert(_el$42, createComponent(TextFieldRoot, {
      "class": "flex-1",
      get children() {
        return createComponent(TextField, {
          placeholder: "Search teams by name, project, or member...",
          get value() {
            return teamSearchQuery();
          },
          onInput: (e) => setTeamSearchQuery(e.target.value),
          "class": "p-2"
        });
      }
    }), _el$43);
    insert(_el$43, () => filteredTeams().length, _el$44);
    insert(_el$43, () => teams().length, _el$46);
    insert(_el$42, createComponent(Button, {
      size: "sm",
      variant: "outline",
      onClick: exportTeamsCSV,
      children: "Export CSV"
    }), null);
    insert(_el$34, createComponent(Table, {
      get children() {
        return [createComponent(TableHeader, {
          get children() {
            return createComponent(TableRow, {
              get children() {
                return [createComponent(TableHead, {
                  children: "Team"
                }), createComponent(TableHead, {
                  children: "Project"
                }), createComponent(TableHead, {
                  children: "Leader"
                }), createComponent(TableHead, {
                  children: "Size"
                }), createComponent(TableHead, {
                  children: "Requests"
                }), createComponent(TableHead, {
                  children: "Actions"
                })];
              }
            });
          }
        }), createComponent(TableBody, {
          get children() {
            return createComponent(For, {
              get each() {
                return filteredTeams();
              },
              children: (team) => [createComponent(TableRow, {
                "class": "cursor-pointer",
                onClick: () => setExpandedTeamId(expandedTeamId() === team.id ? null : team.id),
                get children() {
                  return [createComponent(TableCell, {
                    "class": "font-medium",
                    get children() {
                      return team.name;
                    }
                  }), createComponent(TableCell, {
                    "class": "text-sm text-zinc-600 truncate max-w-[200px]",
                    get children() {
                      return team.project;
                    }
                  }), createComponent(TableCell, {
                    "class": "text-sm",
                    get children() {
                      return team.leader?.name || "-";
                    }
                  }), createComponent(TableCell, {
                    "class": "text-sm",
                    get children() {
                      return [createMemo(() => team.members?.length || 0), "/", createMemo(() => team.maxSize)];
                    }
                  }), createComponent(TableCell, {
                    "class": "text-sm",
                    get children() {
                      return createMemo(() => team.requests?.length > 0)() ? (() => {
                        var _el$118 = _tmpl$28$1(), _el$119 = _el$118.firstChild;
                        insert(_el$118, () => team.requests.length, _el$119);
                        return _el$118;
                      })() : _tmpl$29$1();
                    }
                  }), createComponent(TableCell, {
                    onClick: (e) => e.stopPropagation(),
                    get children() {
                      return createComponent(Button, {
                        variant: "destructive",
                        size: "sm",
                        onClick: () => {
                          if (!confirm(`Delete team "${team.name}"?`)) return;
                          fetch("/api/admin/teams", {
                            method: "POST",
                            headers: {
                              "Content-Type": "application/json"
                            },
                            body: JSON.stringify({
                              action: "delete",
                              teamId: team.id
                            })
                          }).then(() => fetchTeams());
                        },
                        children: "Delete"
                      });
                    }
                  })];
                }
              }), createMemo(() => createMemo(() => expandedTeamId() === team.id)() && createComponent(TableRow, {
                get children() {
                  return createComponent(TableCell, {
                    colSpan: 6,
                    "class": "bg-zinc-50 border-b",
                    get children() {
                      var _el$121 = _tmpl$30$1(), _el$122 = _el$121.firstChild; _el$122.firstChild; var _el$124 = _el$122.nextSibling, _el$125 = _el$124.firstChild, _el$126 = _el$125.nextSibling;
                      insert(_el$121, (() => {
                        var _c$9 = createMemo(() => team.requests?.length > 0);
                        return () => _c$9() && (() => {
                          var _el$127 = _tmpl$31$1(), _el$128 = _el$127.firstChild, _el$129 = _el$128.nextSibling;
                          insert(_el$129, createComponent(For, {
                            get each() {
                              return team.requests;
                            },
                            children: (req) => (() => {
                              var _el$130 = _tmpl$32$1(), _el$131 = _el$130.firstChild, _el$132 = _el$131.firstChild, _el$134 = _el$132.nextSibling; _el$134.nextSibling;
                              insert(_el$131, () => req.user?.name, _el$132);
                              insert(_el$131, () => req.user?.id, _el$134);
                              return _el$130;
                            })()
                          }));
                          return _el$127;
                        })();
                      })(), _el$122);
                      insert(_el$122, createComponent(CategoryPicker, {
                        hideLabel: true,
                        get categories() {
                          return categories();
                        },
                        get selected() {
                          try {
                            return JSON.parse(team.categories || "[]");
                          } catch {
                            return [];
                          }
                        },
                        onChange: (newCats) => {
                          fetch("/api/admin/teams", {
                            method: "POST",
                            headers: {
                              "Content-Type": "application/json"
                            },
                            body: JSON.stringify({
                              action: "edit",
                              teamId: team.id,
                              data: {
                                categories: JSON.stringify(newCats)
                              }
                            })
                          }).then(() => fetchTeams());
                        }
                      }), null);
                      insert(_el$126, createComponent(For, {
                        get each() {
                          return team.members;
                        },
                        children: (member) => (() => {
                          var _el$135 = _tmpl$33$1(), _el$136 = _el$135.firstChild, _el$137 = _el$136.firstChild, _el$139 = _el$137.nextSibling; _el$139.nextSibling;
                          insert(_el$136, () => member.name, _el$137);
                          insert(_el$136, () => member.email, _el$139);
                          insert(_el$136, (() => {
                            var _c$11 = createMemo(() => member.id === team.leaderId);
                            return () => _c$11() && _tmpl$34$1();
                          })(), null);
                          insert(_el$135, (() => {
                            var _c$12 = createMemo(() => member.id !== team.leaderId);
                            return () => _c$12() && createComponent(Button, {
                              size: "sm",
                              variant: "outline",
                              onClick: () => {
                                if (!confirm(`Remove ${member.name}?`)) return;
                                fetch("/api/admin/teams", {
                                  method: "POST",
                                  headers: {
                                    "Content-Type": "application/json"
                                  },
                                  body: JSON.stringify({
                                    action: "remove-member",
                                    teamId: team.id,
                                    data: {
                                      userId: member.id
                                    }
                                  })
                                }).then(() => fetchTeams());
                              },
                              children: "Remove"
                            });
                          })(), null);
                          return _el$135;
                        })()
                      }));
                      insert(_el$121, (() => {
                        var _c$10 = createMemo(() => team.members.length < parseInt(team.maxSize));
                        return () => _c$10() && (() => {
                          const [memberSearch, setMemberSearch] = createSignal("");
                          const candidates = () => {
                            const q = memberSearch().toLowerCase();
                            return users().filter((u) => !u.admin && u.verified && !team.members.some((m) => m.id === u.id) && (q ? u.name?.toLowerCase().includes(q) || u.email?.toLowerCase().includes(q) : false));
                          };
                          return (() => {
                            var _el$141 = _tmpl$35$1();
                            insert(_el$141, createComponent(TextFieldRoot, {
                              get children() {
                                return createComponent(TextField, {
                                  placeholder: "Search to add member...",
                                  get value() {
                                    return memberSearch();
                                  },
                                  onInput: (e) => setMemberSearch(e.target.value),
                                  "class": "p-2 w-[300px]"
                                });
                              }
                            }), null);
                            insert(_el$141, (() => {
                              var _c$13 = createMemo(() => !!(memberSearch() && candidates().length > 0));
                              return () => _c$13() && (() => {
                                var _el$142 = _tmpl$36$1();
                                insert(_el$142, createComponent(For, {
                                  get each() {
                                    return candidates().slice(0, 20);
                                  },
                                  children: (u) => (() => {
                                    var _el$143 = _tmpl$37$1(), _el$144 = _el$143.firstChild, _el$145 = _el$144.nextSibling, _el$146 = _el$145.firstChild, _el$148 = _el$146.nextSibling; _el$148.nextSibling;
                                    _el$143.$$click = () => {
                                      fetch("/api/admin/teams", {
                                        method: "POST",
                                        headers: {
                                          "Content-Type": "application/json"
                                        },
                                        body: JSON.stringify({
                                          action: "add-member",
                                          teamId: team.id,
                                          data: {
                                            userId: u.id
                                          }
                                        })
                                      }).then(() => {
                                        fetchTeams();
                                        setMemberSearch("");
                                      });
                                    };
                                    insert(_el$143, () => u.name, _el$144);
                                    insert(_el$145, () => u.email, _el$148);
                                    return _el$143;
                                  })()
                                }));
                                return _el$142;
                              })();
                            })(), null);
                            return _el$141;
                          })();
                        })();
                      })(), null);
                      return _el$121;
                    }
                  });
                }
              }))]
            });
          }
        })];
      }
    }), null);
    insert(_el$48, createComponent(Card, {
      "class": "border-zinc-200",
      get children() {
        return [createComponent(CardHeader, {
          "class": "pb-2",
          get children() {
            return createComponent(CardTitle, {
              "class": "text-lg",
              children: "Import Students from CSV"
            });
          }
        }), createComponent(CardContent, {
          get children() {
            return [_tmpl$9$2(), (() => {
              var _el$50 = _tmpl$10$2(), _el$51 = _el$50.firstChild, _el$52 = _el$51.firstChild, _el$53 = _el$52.nextSibling, _el$54 = _el$53.nextSibling;
              _el$54.addEventListener("change", handleStudentCSV);
              insert(_el$50, (() => {
                var _c$3 = createMemo(() => !!importStatus());
                return () => _c$3() && (() => {
                  var _el$149 = _tmpl$38$1(), _el$150 = _el$149.firstChild;
                  insert(_el$150, () => importStatus().message);
                  createRenderEffect(() => className(_el$149, `text-sm ${importStatus().type === "error" ? "text-red-600" : importStatus().type === "success" ? "text-green-600" : "text-blue-600"}`));
                  return _el$149;
                })();
              })(), null);
              return _el$50;
            })()];
          }
        })];
      }
    }), _el$55);
    insert(_el$55, createComponent(TextFieldRoot, {
      "class": "flex-1 min-w-[200px]",
      get children() {
        return createComponent(TextField, {
          placeholder: "Search by name, email, or team...",
          get value() {
            return searchQuery();
          },
          onInput: (e) => setSearchQuery(e.target.value),
          "class": "p-2"
        });
      }
    }), null);
    insert(_el$55, createComponent(Select, {
      multiple: true,
      options: [{
        value: "yes",
        label: "Verified"
      }, {
        value: "no",
        label: "Unverified"
      }],
      optionValue: "value",
      optionTextValue: "label",
      get value() {
        return filterVerified();
      },
      onChange: setFilterVerified,
      itemComponent: (props2) => createComponent(SelectItem, {
        get item() {
          return props2.item;
        },
        get children() {
          return props2.item.rawValue.label;
        }
      }),
      get children() {
        return [createComponent(SelectTrigger, {
          "class": "w-[140px]",
          get children() {
            return createComponent(SelectValue, {
              children: (state) => {
                const sel = state.selectedOptions();
                return sel.length === 0 ? "All" : sel.map((o) => o.label).join(", ");
              }
            });
          }
        }), createComponent(SelectContent, {})];
      }
    }), null);
    insert(_el$55, createComponent(Select, {
      multiple: true,
      get options() {
        return schools().map((s) => ({
          value: s.value,
          label: s.label
        }));
      },
      optionValue: "value",
      optionTextValue: "label",
      get value() {
        return filterSchool();
      },
      onChange: setFilterSchool,
      itemComponent: (props2) => createComponent(SelectItem, {
        get item() {
          return props2.item;
        },
        get children() {
          return props2.item.rawValue.label;
        }
      }),
      get children() {
        return [createComponent(SelectTrigger, {
          "class": "w-[160px]",
          get children() {
            return createComponent(SelectValue, {
              children: (state) => {
                const sel = state.selectedOptions();
                return sel.length === 0 ? "All Schools" : sel.length === 1 ? sel[0].label : `${sel.length} Schools`;
              }
            });
          }
        }), createComponent(SelectContent, {})];
      }
    }), null);
    insert(_el$55, createComponent(Select, {
      multiple: true,
      options: [{
        value: "on-team",
        label: "On Team"
      }, {
        value: "looking",
        label: "Looking"
      }, {
        value: "no-team",
        label: "No Team"
      }],
      optionValue: "value",
      optionTextValue: "label",
      get value() {
        return filterTeamStatus();
      },
      onChange: setFilterTeamStatus,
      itemComponent: (props2) => createComponent(SelectItem, {
        get item() {
          return props2.item;
        },
        get children() {
          return props2.item.rawValue.label;
        }
      }),
      get children() {
        return [createComponent(SelectTrigger, {
          "class": "w-[140px]",
          get children() {
            return createComponent(SelectValue, {
              children: (state) => {
                const sel = state.selectedOptions();
                return sel.length === 0 ? "All Teams" : sel.map((o) => o.label).join(", ");
              }
            });
          }
        }), createComponent(SelectContent, {})];
      }
    }), null);
    insert(_el$55, createComponent(Select, {
      multiple: true,
      options: [{
        value: "9",
        label: "Freshman"
      }, {
        value: "10",
        label: "Sophomore"
      }, {
        value: "11",
        label: "Junior"
      }, {
        value: "12",
        label: "Senior"
      }],
      optionValue: "value",
      optionTextValue: "label",
      get value() {
        return filterGrade();
      },
      onChange: setFilterGrade,
      itemComponent: (props2) => createComponent(SelectItem, {
        get item() {
          return props2.item;
        },
        get children() {
          return props2.item.rawValue.label;
        }
      }),
      get children() {
        return [createComponent(SelectTrigger, {
          "class": "w-[140px]",
          get children() {
            return createComponent(SelectValue, {
              children: (state) => {
                const sel = state.selectedOptions();
                return sel.length === 0 ? "All Grades" : sel.map((o) => o.label).join(", ");
              }
            });
          }
        }), createComponent(SelectContent, {})];
      }
    }), null);
    insert(_el$57, () => filteredUsers().length, _el$58);
    insert(_el$57, () => users().length, _el$60);
    insert(_el$61, createComponent(Button, {
      size: "sm",
      variant: "outline",
      onClick: bulkVerify,
      get children() {
        return ["Verify All (", createMemo(() => filteredUsers().filter((u) => !u.verified).length), ")"];
      }
    }), null);
    insert(_el$61, createComponent(Button, {
      size: "sm",
      variant: "outline",
      onClick: exportUsersCSV,
      children: "Export CSV"
    }), null);
    insert(_el$61, createComponent(Button, {
      size: "sm",
      variant: "outline",
      onClick: exportParentsCSV,
      children: "Export Parents"
    }), null);
    insert(_el$48, createComponent(Table, {
      get children() {
        return [createComponent(TableHeader, {
          get children() {
            return createComponent(TableRow, {
              get children() {
                return [createComponent(TableHead, {
                  "class": "cursor-pointer select-none",
                  onClick: () => toggleSort("name"),
                  get children() {
                    return ["Name ", createMemo(() => createMemo(() => sortColumn() === "name")() && (sortDirection() === "asc" ? "↑" : "↓"))];
                  }
                }), createComponent(TableHead, {
                  "class": "cursor-pointer select-none",
                  onClick: () => toggleSort("email"),
                  get children() {
                    return ["Email ", createMemo(() => createMemo(() => sortColumn() === "email")() && (sortDirection() === "asc" ? "↑" : "↓"))];
                  }
                }), createComponent(TableHead, {
                  "class": "cursor-pointer select-none",
                  onClick: () => toggleSort("school"),
                  get children() {
                    return ["School ", createMemo(() => createMemo(() => sortColumn() === "school")() && (sortDirection() === "asc" ? "↑" : "↓"))];
                  }
                }), createComponent(TableHead, {
                  "class": "cursor-pointer select-none",
                  onClick: () => toggleSort("team"),
                  get children() {
                    return ["Team ", createMemo(() => createMemo(() => sortColumn() === "team")() && (sortDirection() === "asc" ? "↑" : "↓"))];
                  }
                }), createComponent(TableHead, {
                  children: "Status"
                })];
              }
            });
          }
        }), createComponent(TableBody, {
          get children() {
            return createComponent(For, {
              get each() {
                return filteredUsers();
              },
              children: (u) => [createComponent(TableRow, {
                "class": "cursor-pointer",
                onClick: () => setExpandedUserId(expandedUserId() === u.id ? null : u.id),
                get children() {
                  return [createComponent(TableCell, {
                    "class": "font-medium",
                    get children() {
                      return u.name;
                    }
                  }), createComponent(TableCell, {
                    "class": "text-sm",
                    get children() {
                      return u.email;
                    }
                  }), createComponent(TableCell, {
                    "class": "text-sm",
                    get children() {
                      return u.school || "-";
                    }
                  }), createComponent(TableCell, {
                    "class": "text-sm",
                    get children() {
                      return createMemo(() => !!u.teams?.[0])() ? (() => {
                        var _el$152 = _tmpl$40$1();
                        insert(_el$152, () => u.teams[0].name);
                        return _el$152;
                      })() : createMemo(() => u.requests?.length > 0)() ? (() => {
                        var _el$153 = _tmpl$41$1(); _el$153.firstChild;
                        insert(_el$153, () => u.requests[0].team?.name, null);
                        return _el$153;
                      })() : _tmpl$42$1();
                    }
                  }), createComponent(TableCell, {
                    "class": "text-sm",
                    get children() {
                      var _el$151 = _tmpl$39$1();
                      insert(_el$151, (() => {
                        var _c$14 = createMemo(() => !!u.admin);
                        return () => _c$14() && _tmpl$43$1();
                      })(), null);
                      insert(_el$151, (() => {
                        var _c$15 = createMemo(() => !!u.verified);
                        return () => _c$15() ? _tmpl$44$1() : _tmpl$45$1();
                      })(), null);
                      insert(_el$151, (() => {
                        var _c$16 = createMemo(() => u.schoolAdminAssignments?.length > 0);
                        return () => _c$16() && _tmpl$46$1();
                      })(), null);
                      return _el$151;
                    }
                  })];
                }
              }), createMemo(() => createMemo(() => expandedUserId() === u.id)() && createComponent(TableRow, {
                get children() {
                  return createComponent(TableCell, {
                    colSpan: 5,
                    "class": "bg-zinc-50 border-b",
                    get children() {
                      var _el$160 = _tmpl$47$1(), _el$161 = _el$160.firstChild, _el$162 = _el$161.firstChild, _el$163 = _el$162.firstChild; _el$163.nextSibling; var _el$165 = _el$162.nextSibling, _el$166 = _el$165.firstChild; _el$166.nextSibling; var _el$168 = _el$165.nextSibling, _el$169 = _el$168.firstChild; _el$169.nextSibling; var _el$171 = _el$168.nextSibling, _el$172 = _el$171.firstChild; _el$172.nextSibling; var _el$174 = _el$171.nextSibling, _el$175 = _el$174.firstChild; _el$175.nextSibling; var _el$177 = _el$174.nextSibling, _el$178 = _el$177.firstChild; _el$178.nextSibling; var _el$180 = _el$177.nextSibling, _el$181 = _el$180.firstChild; _el$181.nextSibling; var _el$183 = _el$161.nextSibling, _el$184 = _el$183.firstChild; _el$184.nextSibling; var _el$186 = _el$183.nextSibling;
                      insert(_el$162, () => u.phone || "-", null);
                      insert(_el$165, () => u.grade || "-", null);
                      insert(_el$168, () => u.major || "-", null);
                      insert(_el$171, () => u.shirt || "-", null);
                      insert(_el$174, () => u.teams?.[0]?.name || "No team", null);
                      insert(_el$177, () => new Date(u.createdAt).toLocaleDateString(), null);
                      insert(_el$180, (() => {
                        var _c$17 = createMemo(() => !!u.parents);
                        return () => _c$17() ? (() => {
                          try {
                            return JSON.parse(u.parents).map((p) => `${p.fname} ${p.lname}`).join(", ");
                          } catch {
                            return "-";
                          }
                        })() : "-";
                      })(), null);
                      insert(_el$183, (() => {
                        var _c$18 = createMemo(() => u.schoolAdminAssignments?.length > 0);
                        return () => _c$18() ? u.schoolAdminAssignments.map((a) => (() => {
                          var _el$187 = _tmpl$48(), _el$188 = _el$187.firstChild;
                          insert(_el$187, () => a.school?.label, _el$188);
                          _el$188.$$click = (e) => {
                            e.stopPropagation();
                            if (!confirm(`Remove ${u.name} as admin of ${a.school?.label}?`)) return;
                            fetch("/api/admin/users", {
                              method: "POST",
                              headers: {
                                "Content-Type": "application/json"
                              },
                              body: JSON.stringify({
                                action: "remove-school-admin",
                                userId: u.id,
                                data: {
                                  schoolId: a.school?.id
                                }
                              })
                            }).then(() => fetchUsers());
                          };
                          return _el$187;
                        })()) : _tmpl$19$2();
                      })(), null);
                      insert(_el$186, createComponent(Button, {
                        size: "sm",
                        variant: "outline",
                        onClick: () => {
                          fetch("/api/admin/users", {
                            method: "POST",
                            headers: {
                              "Content-Type": "application/json"
                            },
                            body: JSON.stringify({
                              action: u.verified ? "unverify" : "verify",
                              userId: u.id
                            })
                          }).then(() => fetchUsers());
                        },
                        get children() {
                          return u.verified ? "Unverify" : "Verify";
                        }
                      }), null);
                      insert(_el$186, createComponent(Button, {
                        size: "sm",
                        variant: "outline",
                        onClick: () => {
                          fetch("/api/admin/users", {
                            method: "POST",
                            headers: {
                              "Content-Type": "application/json"
                            },
                            body: JSON.stringify({
                              action: u.admin ? "demote" : "promote",
                              userId: u.id
                            })
                          }).then(() => fetchUsers());
                        },
                        get children() {
                          return u.admin ? "Remove Admin" : "Make Admin";
                        }
                      }), null);
                      insert(_el$186, createComponent(Select, {
                        get options() {
                          return schools().filter((s) => !u.schoolAdminAssignments?.some((a) => a.school?.id === s.id));
                        },
                        optionValue: "id",
                        optionTextValue: "label",
                        placeholder: "+ School Admin",
                        onChange: (val) => {
                          if (!val) return;
                          fetch("/api/admin/users", {
                            method: "POST",
                            headers: {
                              "Content-Type": "application/json"
                            },
                            body: JSON.stringify({
                              action: "assign-school-admin",
                              userId: u.id,
                              data: {
                                schoolId: val.id
                              }
                            })
                          }).then(() => fetchUsers());
                        },
                        itemComponent: (props2) => createComponent(SelectItem, {
                          get item() {
                            return props2.item;
                          },
                          get children() {
                            return props2.item.rawValue.label;
                          }
                        }),
                        get children() {
                          return [createComponent(SelectTrigger, {
                            "class": "w-[160px]",
                            get children() {
                              return createComponent(SelectValue, {
                                children: (state) => state.selectedOption()?.label || "+ School Admin"
                              });
                            }
                          }), createComponent(SelectContent, {})];
                        }
                      }), null);
                      insert(_el$186, createComponent(Button, {
                        size: "sm",
                        variant: "destructive",
                        onClick: () => {
                          if (!confirm("Delete user? This cannot be undone.")) return;
                          fetch("/api/admin/users", {
                            method: "POST",
                            headers: {
                              "Content-Type": "application/json"
                            },
                            body: JSON.stringify({
                              action: "delete",
                              userId: u.id
                            })
                          }).then(() => fetchUsers());
                        },
                        children: "Delete"
                      }), null);
                      return _el$160;
                    }
                  });
                }
              }))]
            });
          }
        })];
      }
    }), null);
    insert(_el$7, createComponent(Show, {
      get when() {
        return categoryInfoOpen();
      },
      get children() {
        return createComponent(Portal, {
          get children() {
            var _el$62 = _tmpl$11$2(), _el$63 = _el$62.firstChild, _el$64 = _el$63.nextSibling, _el$65 = _el$64.firstChild, _el$66 = _el$65.nextSibling, _el$67 = _el$66.nextSibling;
            _el$62.$$click = () => setCategoryInfoOpen(false);
            _el$64.$$click = (e) => e.stopPropagation();
            _el$65.$$click = () => setCategoryInfoOpen(false);
            insert(_el$66, () => categoryInfoData()?.label);
            insert(_el$64, (() => {
              var _c$4 = createMemo(() => categoryInfoData()?.prize > 0);
              return () => _c$4() && (() => {
                var _el$190 = _tmpl$49(); _el$190.firstChild;
                insert(_el$190, () => categoryInfoData()?.prize?.toLocaleString(), null);
                return _el$190;
              })();
            })(), _el$67);
            insert(_el$67, () => categoryInfoData()?.description);
            return _el$62;
          }
        });
      }
    }), null);
    createRenderEffect((_p$) => {
      var _v$ = activeTab() === "schools" ? "block" : "none", _v$2 = activeTab() === "categories" ? "block" : "none", _v$3 = activeTab() === "teams" ? "block" : "none", _v$4 = activeTab() === "users" ? "block" : "none";
      _v$ !== _p$.e && ((_p$.e = _v$) != null ? _el$25.style.setProperty("display", _v$) : _el$25.style.removeProperty("display"));
      _v$2 !== _p$.t && ((_p$.t = _v$2) != null ? _el$28.style.setProperty("display", _v$2) : _el$28.style.removeProperty("display"));
      _v$3 !== _p$.a && ((_p$.a = _v$3) != null ? _el$33.style.setProperty("display", _v$3) : _el$33.style.removeProperty("display"));
      _v$4 !== _p$.o && ((_p$.o = _v$4) != null ? _el$47.style.setProperty("display", _v$4) : _el$47.style.removeProperty("display"));
      return _p$;
    }, {
      e: void 0,
      t: void 0,
      a: void 0,
      o: void 0
    });
    return _el$7;
  })();
};
delegateEvents(["click"]);

var _tmpl$$1 = /* @__PURE__ */ template(`<div class=space-y-2><div class="grid grid-cols-2 gap-2">`), _tmpl$2$1 = /* @__PURE__ */ template(`<div class="text-left w-full text-sm font-medium">Award Categories`), _tmpl$3$1 = /* @__PURE__ */ template(`<button type=button><span>`), _tmpl$4$1 = /* @__PURE__ */ template(`<span><svg xmlns=http://www.w3.org/2000/svg width=14 height=14 viewBox="0 0 24 24"fill=none stroke=currentColor stroke-width=2 stroke-linecap=round stroke-linejoin=round><circle cx=12 cy=12 r=10></circle><path d="M12 16v-4"></path><path d="M12 8h.01">`), _tmpl$5$1 = /* @__PURE__ */ template(`<div class="flex flex-wrap gap-4 mb-4">`), _tmpl$6$1 = /* @__PURE__ */ template(`<div class="text-sm text-zinc-400 mb-2">Managing: <span class="font-semibold text-white"></span> - <!> student`), _tmpl$7$1 = /* @__PURE__ */ template(`<form class="flex flex-wrap gap-2 items-end">`), _tmpl$8$1 = /* @__PURE__ */ template(`<div class=mt-3>`), _tmpl$9$1 = /* @__PURE__ */ template(`<div class="grid grid-cols-1 md:grid-cols-2 gap-4">`), _tmpl$10$1 = /* @__PURE__ */ template(`<div class="grid grid-cols-1 md:grid-cols-3 gap-4">`), _tmpl$11$1 = /* @__PURE__ */ template(`<div class="flex gap-2">`), _tmpl$12$1 = /* @__PURE__ */ template(`<form class=space-y-4><div class="grid grid-cols-1 md:grid-cols-2 gap-4"></div><div class="grid grid-cols-1 md:grid-cols-3 gap-4"></div><h3 class="text-lg font-medium mt-4">Parent/Guardian Information</h3><div class="grid grid-cols-1 md:grid-cols-2 gap-4"></div><div class="flex gap-2">`), _tmpl$13$1 = /* @__PURE__ */ template(`<div class="fixed inset-0 z-[9999] flex items-center justify-center"><div class="absolute inset-0 bg-black/50"></div><div class="relative bg-white border border-zinc-200 rounded-xl p-6 max-w-md w-full mx-4 shadow-2xl"><button class="absolute right-3 top-3 text-zinc-400 hover:text-zinc-600"><svg xmlns=http://www.w3.org/2000/svg width=18 height=18 viewBox="0 0 24 24"fill=none stroke=currentColor stroke-width=2 stroke-linecap=round stroke-linejoin=round><path d="M18 6 6 18"></path><path d="m6 6 12 12"></path></svg></button><h3 class="text-lg font-semibold text-zinc-900 mb-2"></h3><p class="text-sm text-zinc-600 leading-relaxed">`), _tmpl$14$1 = /* @__PURE__ */ template(`<div class=space-y-4><div class="flex justify-between items-center mb-4"><h2 class="text-2xl font-bold">School Admin Dashboard</h2><div class="flex gap-2">`), _tmpl$15$1 = /* @__PURE__ */ template(`<div class="p-4 space-y-4"><div><div class="text-sm text-zinc-500 font-medium mb-2">Categories</div></div><div class=text-sm><span class="text-zinc-500 font-medium">Members:</span><div class="mt-1 space-y-1">`), _tmpl$16$1 = /* @__PURE__ */ template(`<div class="flex items-center justify-between"><span class=text-zinc-700> (<!>) `), _tmpl$17$1 = /* @__PURE__ */ template(`<span class="text-amber-600 text-xs ml-1 font-medium">Leader`), _tmpl$18$1 = /* @__PURE__ */ template(`<div class="flex items-center gap-2">`), _tmpl$19$1 = /* @__PURE__ */ template(`<p class="text-sm font-medium text-green-600 mb-2">Prize: $`);
const SchoolAdminDashboard = (props) => {
  const [view, setView] = createSignal("picker");
  const [schools, setSchools] = createSignal([]);
  const [selectedSchool, setSelectedSchool] = createSignal(null);
  const [students, setStudents] = createSignal([]);
  const [searchQuery, setSearchQuery] = createSignal("");
  const [selectedStudent, setSelectedStudent] = createSignal(null);
  const [saving, setSaving] = createSignal(false);
  const [registering, setRegistering] = createSignal(false);
  const [saTeams, setSaTeams] = createSignal([]);
  const [saExpandedTeamId, setSaExpandedTeamId] = createSignal(null);
  const [saTeamLeader, setSaTeamLeader] = createSignal(null);
  const [availableCategories, setAvailableCategories] = createSignal([]);
  const [teamSelectedCategories, setTeamSelectedCategories] = createSignal([]);
  const [categoryInfoOpen, setCategoryInfoOpen] = createSignal(false);
  const [categoryInfoData, setCategoryInfoData] = createSignal(null);
  const showCategoryInfo = (cat) => {
    setCategoryInfoData(cat);
    setCategoryInfoOpen(true);
  };
  const CategoryPicker = (props2) => {
    const cats = () => props2.categories || availableCategories() || [];
    return (() => {
      var _el$ = _tmpl$$1(), _el$2 = _el$.firstChild;
      insert(_el$, (() => {
        var _c$ = createMemo(() => !!!props2.hideLabel);
        return () => _c$() && _tmpl$2$1();
      })(), _el$2);
      insert(_el$2, () => cats().map((cat) => {
        const isSelected = () => (props2.selected || []).some((s) => s.value === cat.value);
        return (() => {
          var _el$4 = _tmpl$3$1(), _el$5 = _el$4.firstChild;
          _el$4.$$click = () => {
            if (isSelected()) {
              props2.onChange((props2.selected || []).filter((s) => s.value !== cat.value));
            } else {
              props2.onChange([...props2.selected || [], {
                value: cat.value,
                label: cat.label
              }]);
            }
          };
          insert(_el$5, () => cat.label, null);
          insert(_el$5, () => cat.prize ? ` ($${cat.prize})` : "", null);
          insert(_el$4, (() => {
            var _c$2 = createMemo(() => !!cat.description);
            return () => _c$2() && (() => {
              var _el$6 = _tmpl$4$1();
              _el$6.$$click = (e) => {
                e.stopPropagation();
                showCategoryInfo(cat);
              };
              createRenderEffect(() => className(_el$6, `ml-2 shrink-0 ${isSelected() ? "text-blue-200" : "text-zinc-400"}`));
              return _el$6;
            })();
          })(), null);
          createRenderEffect(() => className(_el$4, `flex items-center justify-between px-3 py-2 rounded-lg text-sm font-medium transition-all border ${isSelected() ? "bg-blue-600 text-white border-blue-500" : "bg-zinc-100 text-zinc-700 border-zinc-200 hover:bg-zinc-200"}`));
          return _el$4;
        })();
      }));
      return _el$;
    })();
  };
  const [editFname, setEditFname] = createSignal("");
  const [editLname, setEditLname] = createSignal("");
  const [editEmail, setEditEmail] = createSignal("");
  const [editPhone, setEditPhone] = createSignal("");
  const [editGrade, setEditGrade] = createSignal("");
  const [editMajor, setEditMajor] = createSignal("");
  const [editShirt, setEditShirt] = createSignal("");
  const [regFname, setRegFname] = createSignal("");
  const [regLname, setRegLname] = createSignal("");
  const [regEmail, setRegEmail] = createSignal("");
  const [regPhone, setRegPhone] = createSignal("");
  const [regPassword, setRegPassword] = createSignal("");
  const [regGrade, setRegGrade] = createSignal(null);
  const [regMajor, setRegMajor] = createSignal(null);
  const [regShirt, setRegShirt] = createSignal(null);
  const [regParentFname, setRegParentFname] = createSignal("");
  const [regParentLname, setRegParentLname] = createSignal("");
  const [regParentEmail, setRegParentEmail] = createSignal("");
  const [regParentPhone, setRegParentPhone] = createSignal("");
  const [regParentRelationship, setRegParentRelationship] = createSignal("");
  createEffect(() => {
    fetch("/api/school-admin/schools").then((r) => r.json()).then((data) => {
      setSchools(data.schools || []);
      if (data.schools?.length === 1) {
        setSelectedSchool(data.schools[0]);
        setView("list");
      }
    });
    fetch("/api/categories").then((r) => r.json()).then((data) => {
      setAvailableCategories(data.categories || []);
    });
  });
  createEffect(() => {
    if (selectedSchool() && view() === "list") {
      fetchStudents();
      fetchTeams();
    }
  });
  const fetchStudents = () => {
    fetch("/api/school-admin/students", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        school: selectedSchool().value
      })
    }).then((r) => r.json()).then((data) => {
      setStudents(data.students || []);
    });
  };
  const fetchTeams = () => {
    if (!selectedSchool()) return;
    fetch("/api/school-admin/teams", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        school: selectedSchool().value
      })
    }).then((r) => r.json()).then((data) => {
      setSaTeams(data.teams || []);
    });
  };
  const filteredStudents = () => {
    const q = searchQuery().toLowerCase();
    if (!q) return students();
    return students().filter((s) => s.name?.toLowerCase().includes(q) || s.email?.toLowerCase().includes(q) || s.fname?.toLowerCase().includes(q) || s.lname?.toLowerCase().includes(q));
  };
  const openEdit = (student) => {
    setSelectedStudent(student);
    setEditFname(student.fname || "");
    setEditLname(student.lname || "");
    setEditEmail(student.email || "");
    setEditPhone(student.phone || "");
    setEditGrade(student.grade || "");
    setEditMajor(student.major || "");
    setEditShirt(student.shirt || "");
    setView("edit");
  };
  const saveStudent = () => {
    setSaving(true);
    fetch("/api/school-admin/student/update", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        id: selectedStudent().id,
        fname: editFname(),
        lname: editLname(),
        email: editEmail(),
        phone: editPhone(),
        grade: editGrade(),
        major: editMajor(),
        shirt: editShirt()
      })
    }).then((r) => r.json()).then((data) => {
      setSaving(false);
      if (!data.error) {
        alert("Student updated successfully");
        setView("list");
      } else {
        alert("Error updating student: " + (data.error || "Unknown error"));
      }
    }).catch(() => {
      setSaving(false);
      alert("Error updating student");
    });
  };
  const registerStudent = (e) => {
    e.preventDefault();
    if (!regPassword() || regPassword().length < 6) {
      alert("Password must be at least 6 characters");
      return;
    }
    setRegistering(true);
    const registrationData = {
      accountData: {
        name: `${regFname()} ${regLname()}`,
        email: regEmail(),
        password: regPassword()
      },
      screen0: {
        "first-name": regFname(),
        "last-name": regLname(),
        email: regEmail(),
        phone: regPhone(),
        school: {
          value: selectedSchool().value
        },
        grade: regGrade() || {
          value: "9"
        },
        major: regMajor() || {
          value: selectedSchool().majors?.[0]?.value || "other"
        },
        shirt: regShirt() || {
          value: "M"
        },
        parents: 1,
        "parent1-first-name": regParentFname(),
        "parent1-last-name": regParentLname(),
        "parent1-email": regParentEmail(),
        "parent1-phone": regParentPhone(),
        "parent1-relationship": regParentRelationship()
      },
      screen1: {
        teamType: "search",
        teamInformation: {
          looking: true
        }
      },
      screen2: {
        checkbox1: "on",
        checkbox2: "on"
      }
    };
    fetch("/api/school-admin/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(registrationData)
    }).then((r) => r.json()).then((data) => {
      setRegistering(false);
      if (!data.error) {
        alert("Student registered successfully");
        setRegFname("");
        setRegLname("");
        setRegEmail("");
        setRegPhone("");
        setRegPassword("");
        setRegGrade(null);
        setRegMajor(null);
        setRegShirt(null);
        setRegParentFname("");
        setRegParentLname("");
        setRegParentEmail("");
        setRegParentPhone("");
        setRegParentRelationship("");
        setView("list");
      } else {
        alert("Error: " + (data.error || "Registration failed"));
      }
    }).catch(() => {
      setRegistering(false);
      alert("Error registering student");
    });
  };
  return (() => {
    var _el$7 = _tmpl$14$1(), _el$8 = _el$7.firstChild, _el$9 = _el$8.firstChild, _el$10 = _el$9.nextSibling;
    insert(_el$10, (() => {
      var _c$3 = createMemo(() => !!(view() !== "picker" && view() !== "list"));
      return () => _c$3() && createComponent(Button, {
        variant: "outline",
        onClick: () => setView("list"),
        children: "Back to List"
      });
    })(), null);
    insert(_el$10, (() => {
      var _c$4 = createMemo(() => !!(view() === "list" && schools().length > 1));
      return () => _c$4() && createComponent(Button, {
        variant: "outline",
        onClick: () => {
          setSelectedSchool(null);
          setView("picker");
        },
        children: "Switch School"
      });
    })(), null);
    insert(_el$10, createComponent(Button, {
      onClick: () => props.setPage("/"),
      children: "Home"
    }), null);
    insert(_el$7, createComponent(Show, {
      get when() {
        return view() === "picker";
      },
      get children() {
        return createComponent(Card, {
          get children() {
            return [createComponent(CardHeader, {
              get children() {
                return [createComponent(CardTitle, {
                  children: "Select School"
                }), createComponent(CardDescription, {
                  children: "Choose which school to manage"
                })];
              }
            }), createComponent(CardContent, {
              "class": "space-y-4",
              get children() {
                return createComponent(For, {
                  get each() {
                    return schools();
                  },
                  children: (school) => createComponent(Button, {
                    "class": "w-full",
                    onClick: () => {
                      setSelectedSchool(school);
                      setView("list");
                    },
                    get children() {
                      return school.label;
                    }
                  })
                });
              }
            })];
          }
        });
      }
    }), null);
    insert(_el$7, createComponent(Show, {
      get when() {
        return createMemo(() => view() === "list")() && selectedSchool();
      },
      get children() {
        return createComponent(Tabs, {
          defaultValue: "students",
          "class": "w-full",
          get children() {
            return [createComponent(TabsList, {
              get children() {
                return [createComponent(TabsTrigger, {
                  value: "students",
                  children: "Students"
                }), createComponent(TabsTrigger, {
                  value: "teams",
                  children: "Teams"
                }), createComponent(TabsIndicator, {})];
              }
            }), createComponent(TabsContent, {
              value: "students",
              "class": "space-y-4",
              get children() {
                return [(() => {
                  var _el$11 = _tmpl$5$1();
                  insert(_el$11, createComponent(TextFieldRoot, {
                    "class": "flex-1 min-w-[200px]",
                    get children() {
                      return createComponent(TextField, {
                        placeholder: "Search students by name or email...",
                        get value() {
                          return searchQuery();
                        },
                        onInput: (e) => setSearchQuery(e.target.value),
                        "class": "p-2"
                      });
                    }
                  }), null);
                  insert(_el$11, createComponent(Button, {
                    onClick: () => setView("register"),
                    children: "Register Student"
                  }), null);
                  return _el$11;
                })(), (() => {
                  var _el$12 = _tmpl$6$1(), _el$13 = _el$12.firstChild, _el$14 = _el$13.nextSibling, _el$15 = _el$14.nextSibling, _el$17 = _el$15.nextSibling; _el$17.nextSibling;
                  insert(_el$14, () => selectedSchool().label);
                  insert(_el$12, () => filteredStudents().length, _el$17);
                  insert(_el$12, () => filteredStudents().length !== 1 ? "s" : "", null);
                  return _el$12;
                })(), createComponent(Table, {
                  get children() {
                    return [createComponent(TableHeader, {
                      get children() {
                        return createComponent(TableRow, {
                          get children() {
                            return [createComponent(TableHead, {
                              children: "Name"
                            }), createComponent(TableHead, {
                              children: "Email"
                            }), createComponent(TableHead, {
                              children: "Grade"
                            }), createComponent(TableHead, {
                              children: "Verified"
                            }), createComponent(TableHead, {
                              children: "Created"
                            })];
                          }
                        });
                      }
                    }), createComponent(TableBody, {
                      get children() {
                        return createComponent(For, {
                          get each() {
                            return filteredStudents();
                          },
                          get fallback() {
                            return createComponent(TableRow, {
                              get children() {
                                return createComponent(TableCell, {
                                  colSpan: 5,
                                  "class": "text-center text-zinc-400 py-8",
                                  children: "No students found"
                                });
                              }
                            });
                          },
                          children: (student) => createComponent(TableRow, {
                            "class": "cursor-pointer",
                            onClick: () => openEdit(student),
                            get children() {
                              return [createComponent(TableCell, {
                                get children() {
                                  return student.name;
                                }
                              }), createComponent(TableCell, {
                                get children() {
                                  return student.email;
                                }
                              }), createComponent(TableCell, {
                                get children() {
                                  return student.grade;
                                }
                              }), createComponent(TableCell, {
                                get children() {
                                  return student.verified ? "Yes" : "No";
                                }
                              }), createComponent(TableCell, {
                                get children() {
                                  return new Date(student.createdAt).toLocaleDateString();
                                }
                              })];
                            }
                          })
                        });
                      }
                    })];
                  }
                })];
              }
            }), createComponent(TabsContent, {
              value: "teams",
              "class": "space-y-4",
              get children() {
                return [createComponent(Card, {
                  "class": "border-zinc-700",
                  get children() {
                    return [createComponent(CardHeader, {
                      "class": "pb-2",
                      get children() {
                        return createComponent(CardTitle, {
                          "class": "text-lg",
                          children: "Create Team"
                        });
                      }
                    }), createComponent(CardContent, {
                      get children() {
                        return [(() => {
                          var _el$18 = _tmpl$7$1();
                          _el$18.addEventListener("submit", (e) => {
                            e.preventDefault();
                            const formData = new FormData(e.currentTarget);
                            if (!saTeamLeader()) {
                              alert("Select a team leader");
                              return;
                            }
                            fetch("/api/school-admin/team/manage", {
                              method: "POST",
                              headers: {
                                "Content-Type": "application/json"
                              },
                              body: JSON.stringify({
                                action: "create",
                                school: selectedSchool().value,
                                data: {
                                  name: formData.get("teamName"),
                                  project: formData.get("teamProject"),
                                  leaderId: saTeamLeader().id,
                                  maxSize: formData.get("teamMaxSize") || "4",
                                  experience: "beginner",
                                  categories: JSON.stringify(teamSelectedCategories())
                                }
                              })
                            }).then((r) => r.json()).then((d) => {
                              if (!d.error) {
                                fetchTeams();
                                e.target.reset();
                                setSaTeamLeader(null);
                                setTeamSelectedCategories([]);
                              } else alert(d.error || "Failed");
                            });
                          });
                          insert(_el$18, createComponent(TextFieldRoot, {
                            "class": "flex-1 min-w-[150px]",
                            get children() {
                              return [createComponent(TextFieldLabel, {
                                children: "Team Name"
                              }), createComponent(TextField, {
                                name: "teamName",
                                required: true,
                                "class": "p-2",
                                placeholder: "Team name"
                              })];
                            }
                          }), null);
                          insert(_el$18, createComponent(TextFieldRoot, {
                            "class": "flex-1 min-w-[150px]",
                            get children() {
                              return [createComponent(TextFieldLabel, {
                                children: "Project"
                              }), createComponent(TextField, {
                                name: "teamProject",
                                required: true,
                                "class": "p-2",
                                placeholder: "Project description"
                              })];
                            }
                          }), null);
                          insert(_el$18, createComponent(Select, {
                            get options() {
                              return students().filter((s) => s.verified && !s.teams?.length);
                            },
                            optionValue: "id",
                            optionTextValue: "name",
                            placeholder: "Select Leader",
                            onChange: setSaTeamLeader,
                            itemComponent: (props2) => createComponent(SelectItem, {
                              get item() {
                                return props2.item;
                              },
                              get children() {
                                return props2.item.rawValue.name;
                              }
                            }),
                            get children() {
                              return [createComponent(SelectTrigger, {
                                "class": "w-[200px]",
                                get children() {
                                  return createComponent(SelectValue, {
                                    children: (state) => state.selectedOption()?.name || "Select Leader"
                                  });
                                }
                              }), createComponent(SelectContent, {})];
                            }
                          }), null);
                          insert(_el$18, createComponent(TextFieldRoot, {
                            "class": "w-[80px]",
                            get children() {
                              return [createComponent(TextFieldLabel, {
                                children: "Max"
                              }), createComponent(TextField, {
                                name: "teamMaxSize",
                                type: "number",
                                min: "1",
                                max: "4",
                                value: "4",
                                "class": "p-2"
                              })];
                            }
                          }), null);
                          insert(_el$18, createComponent(Button, {
                            type: "submit",
                            children: "Create"
                          }), null);
                          return _el$18;
                        })(), (() => {
                          var _el$19 = _tmpl$8$1();
                          insert(_el$19, createComponent(CategoryPicker, {
                            get categories() {
                              return availableCategories();
                            },
                            get selected() {
                              return teamSelectedCategories();
                            },
                            onChange: setTeamSelectedCategories
                          }));
                          return _el$19;
                        })()];
                      }
                    })];
                  }
                }), createComponent(Table, {
                  get children() {
                    return [createComponent(TableHeader, {
                      get children() {
                        return createComponent(TableRow, {
                          get children() {
                            return [createComponent(TableHead, {
                              children: "Team Name"
                            }), createComponent(TableHead, {
                              children: "Project"
                            }), createComponent(TableHead, {
                              children: "Leader"
                            }), createComponent(TableHead, {
                              children: "Members"
                            }), createComponent(TableHead, {
                              children: "Actions"
                            })];
                          }
                        });
                      }
                    }), createComponent(TableBody, {
                      get children() {
                        return createComponent(For, {
                          get each() {
                            return saTeams();
                          },
                          get fallback() {
                            return createComponent(TableRow, {
                              get children() {
                                return createComponent(TableCell, {
                                  colSpan: 5,
                                  "class": "text-center text-zinc-400 py-8",
                                  children: "No teams found"
                                });
                              }
                            });
                          },
                          children: (team) => [createComponent(TableRow, {
                            "class": "cursor-pointer",
                            onClick: () => setSaExpandedTeamId(saExpandedTeamId() === team.id ? null : team.id),
                            get children() {
                              return [createComponent(TableCell, {
                                get children() {
                                  return team.name;
                                }
                              }), createComponent(TableCell, {
                                "class": "max-w-[200px] truncate",
                                get children() {
                                  return team.project;
                                }
                              }), createComponent(TableCell, {
                                get children() {
                                  return team.leader?.name || "-";
                                }
                              }), createComponent(TableCell, {
                                get children() {
                                  return [createMemo(() => team.members?.length || 0), "/", createMemo(() => team.maxSize)];
                                }
                              }), createComponent(TableCell, {
                                onClick: (e) => e.stopPropagation(),
                                get children() {
                                  return createComponent(Button, {
                                    variant: "destructive",
                                    size: "sm",
                                    onClick: () => {
                                      if (!confirm(`Delete team "${team.name}"?`)) return;
                                      fetch("/api/school-admin/team/manage", {
                                        method: "POST",
                                        headers: {
                                          "Content-Type": "application/json"
                                        },
                                        body: JSON.stringify({
                                          action: "delete",
                                          school: selectedSchool().value,
                                          teamId: team.id
                                        })
                                      }).then(() => fetchTeams());
                                    },
                                    children: "Delete"
                                  });
                                }
                              })];
                            }
                          }), createMemo(() => createMemo(() => saExpandedTeamId() === team.id)() && createComponent(TableRow, {
                            get children() {
                              return createComponent(TableCell, {
                                colSpan: 5,
                                "class": "bg-zinc-50 border-b",
                                get children() {
                                  var _el$35 = _tmpl$15$1(), _el$36 = _el$35.firstChild; _el$36.firstChild; var _el$38 = _el$36.nextSibling, _el$39 = _el$38.firstChild, _el$40 = _el$39.nextSibling;
                                  insert(_el$36, createComponent(CategoryPicker, {
                                    hideLabel: true,
                                    get categories() {
                                      return availableCategories();
                                    },
                                    get selected() {
                                      try {
                                        return JSON.parse(team.categories || "[]");
                                      } catch {
                                        return [];
                                      }
                                    },
                                    onChange: (newCats) => {
                                      fetch("/api/school-admin/team/manage", {
                                        method: "POST",
                                        headers: {
                                          "Content-Type": "application/json"
                                        },
                                        body: JSON.stringify({
                                          action: "edit",
                                          school: selectedSchool().value,
                                          teamId: team.id,
                                          data: {
                                            categories: JSON.stringify(newCats)
                                          }
                                        })
                                      }).then(() => fetchTeams());
                                    }
                                  }), null);
                                  insert(_el$40, createComponent(For, {
                                    get each() {
                                      return team.members;
                                    },
                                    children: (member) => (() => {
                                      var _el$41 = _tmpl$16$1(), _el$42 = _el$41.firstChild, _el$43 = _el$42.firstChild, _el$45 = _el$43.nextSibling; _el$45.nextSibling;
                                      insert(_el$42, () => member.name, _el$43);
                                      insert(_el$42, () => member.email, _el$45);
                                      insert(_el$42, (() => {
                                        var _c$7 = createMemo(() => member.id === team.leaderId);
                                        return () => _c$7() && _tmpl$17$1();
                                      })(), null);
                                      insert(_el$41, (() => {
                                        var _c$8 = createMemo(() => member.id !== team.leaderId);
                                        return () => _c$8() && createComponent(Button, {
                                          size: "sm",
                                          variant: "outline",
                                          onClick: () => {
                                            if (!confirm(`Remove ${member.name}?`)) return;
                                            fetch("/api/school-admin/team/manage", {
                                              method: "POST",
                                              headers: {
                                                "Content-Type": "application/json"
                                              },
                                              body: JSON.stringify({
                                                action: "remove-member",
                                                school: selectedSchool().value,
                                                teamId: team.id,
                                                data: {
                                                  userId: member.id
                                                }
                                              })
                                            }).then(() => fetchTeams());
                                          },
                                          children: "Remove"
                                        });
                                      })(), null);
                                      return _el$41;
                                    })()
                                  }));
                                  insert(_el$35, (() => {
                                    var _c$6 = createMemo(() => team.members.length < parseInt(team.maxSize));
                                    return () => _c$6() && (() => {
                                      var _el$47 = _tmpl$18$1();
                                      insert(_el$47, createComponent(Select, {
                                        get options() {
                                          return students().filter((s) => s.verified && !team.members.some((m) => m.id === s.id));
                                        },
                                        optionValue: "id",
                                        optionTextValue: "name",
                                        placeholder: "Add member...",
                                        onChange: (val) => {
                                          if (!val) return;
                                          fetch("/api/school-admin/team/manage", {
                                            method: "POST",
                                            headers: {
                                              "Content-Type": "application/json"
                                            },
                                            body: JSON.stringify({
                                              action: "add-member",
                                              school: selectedSchool().value,
                                              teamId: team.id,
                                              data: {
                                                userId: val.id
                                              }
                                            })
                                          }).then(() => fetchTeams());
                                        },
                                        itemComponent: (props2) => createComponent(SelectItem, {
                                          get item() {
                                            return props2.item;
                                          },
                                          get children() {
                                            return props2.item.rawValue.name;
                                          }
                                        }),
                                        get children() {
                                          return [createComponent(SelectTrigger, {
                                            "class": "w-[200px]",
                                            get children() {
                                              return createComponent(SelectValue, {
                                                children: (state) => state.selectedOption()?.name || "Add member..."
                                              });
                                            }
                                          }), createComponent(SelectContent, {})];
                                        }
                                      }));
                                      return _el$47;
                                    })();
                                  })(), null);
                                  return _el$35;
                                }
                              });
                            }
                          }))]
                        });
                      }
                    })];
                  }
                })];
              }
            })];
          }
        });
      }
    }), null);
    insert(_el$7, createComponent(Show, {
      get when() {
        return createMemo(() => view() === "edit")() && selectedStudent();
      },
      get children() {
        return createComponent(Card, {
          get children() {
            return [createComponent(CardHeader, {
              get children() {
                return [createComponent(CardTitle, {
                  children: "Edit Student"
                }), createComponent(CardDescription, {
                  get children() {
                    return ["Editing ", createMemo(() => selectedStudent().name)];
                  }
                })];
              }
            }), createComponent(CardContent, {
              "class": "space-y-4",
              get children() {
                return [(() => {
                  var _el$20 = _tmpl$9$1();
                  insert(_el$20, createComponent(TextFieldRoot, {
                    get children() {
                      return [createComponent(TextFieldLabel, {
                        children: "First Name"
                      }), createComponent(TextField, {
                        get value() {
                          return editFname();
                        },
                        onInput: (e) => setEditFname(e.target.value),
                        "class": "p-2"
                      })];
                    }
                  }), null);
                  insert(_el$20, createComponent(TextFieldRoot, {
                    get children() {
                      return [createComponent(TextFieldLabel, {
                        children: "Last Name"
                      }), createComponent(TextField, {
                        get value() {
                          return editLname();
                        },
                        onInput: (e) => setEditLname(e.target.value),
                        "class": "p-2"
                      })];
                    }
                  }), null);
                  return _el$20;
                })(), createComponent(TextFieldRoot, {
                  get children() {
                    return [createComponent(TextFieldLabel, {
                      children: "Email"
                    }), createComponent(TextField, {
                      get value() {
                        return editEmail();
                      },
                      onInput: (e) => setEditEmail(e.target.value),
                      "class": "p-2"
                    })];
                  }
                }), createComponent(TextFieldRoot, {
                  get children() {
                    return [createComponent(TextFieldLabel, {
                      children: "Phone"
                    }), createComponent(TextField, {
                      get value() {
                        return editPhone();
                      },
                      onInput: (e) => setEditPhone(e.target.value),
                      "class": "p-2"
                    })];
                  }
                }), (() => {
                  var _el$21 = _tmpl$10$1();
                  insert(_el$21, createComponent(Select, {
                    options: [{
                      value: "9",
                      label: "Freshman"
                    }, {
                      value: "10",
                      label: "Sophomore"
                    }, {
                      value: "11",
                      label: "Junior"
                    }, {
                      value: "12",
                      label: "Senior"
                    }],
                    optionValue: "value",
                    optionTextValue: "label",
                    get value() {
                      return createMemo(() => !!editGrade())() ? {
                        value: editGrade()
                      } : null;
                    },
                    onChange: (v) => setEditGrade(v?.value || ""),
                    itemComponent: (props2) => createComponent(SelectItem, {
                      get item() {
                        return props2.item;
                      },
                      get children() {
                        return props2.item.rawValue.label;
                      }
                    }),
                    get children() {
                      return [createComponent(TextFieldLabel, {
                        children: "Grade"
                      }), createComponent(SelectTrigger, {
                        get children() {
                          return createComponent(SelectValue, {
                            children: (state) => state.selectedOption()?.label || "Select"
                          });
                        }
                      }), createComponent(SelectContent, {})];
                    }
                  }), null);
                  insert(_el$21, createComponent(Select, {
                    get options() {
                      return selectedSchool()?.majors || [];
                    },
                    optionValue: "value",
                    optionTextValue: "label",
                    get value() {
                      return createMemo(() => !!editMajor())() ? {
                        value: editMajor()
                      } : null;
                    },
                    onChange: (v) => setEditMajor(v?.value || ""),
                    itemComponent: (props2) => createComponent(SelectItem, {
                      get item() {
                        return props2.item;
                      },
                      get children() {
                        return props2.item.rawValue.label;
                      }
                    }),
                    get children() {
                      return [createComponent(TextFieldLabel, {
                        children: "Major"
                      }), createComponent(SelectTrigger, {
                        get children() {
                          return createComponent(SelectValue, {
                            children: (state) => state.selectedOption()?.label || "Select"
                          });
                        }
                      }), createComponent(SelectContent, {})];
                    }
                  }), null);
                  insert(_el$21, createComponent(Select, {
                    options: [{
                      value: "xs",
                      label: "XS"
                    }, {
                      value: "s",
                      label: "S"
                    }, {
                      value: "m",
                      label: "M"
                    }, {
                      value: "l",
                      label: "L"
                    }, {
                      value: "xl",
                      label: "XL"
                    }],
                    optionValue: "value",
                    optionTextValue: "label",
                    get value() {
                      return createMemo(() => !!editShirt())() ? {
                        value: editShirt()
                      } : null;
                    },
                    onChange: (v) => setEditShirt(v?.value || ""),
                    itemComponent: (props2) => createComponent(SelectItem, {
                      get item() {
                        return props2.item;
                      },
                      get children() {
                        return props2.item.rawValue.label;
                      }
                    }),
                    get children() {
                      return [createComponent(TextFieldLabel, {
                        children: "Shirt"
                      }), createComponent(SelectTrigger, {
                        get children() {
                          return createComponent(SelectValue, {
                            children: (state) => state.selectedOption()?.label || "Select"
                          });
                        }
                      }), createComponent(SelectContent, {})];
                    }
                  }), null);
                  return _el$21;
                })(), (() => {
                  var _el$22 = _tmpl$11$1();
                  insert(_el$22, createComponent(Button, {
                    onClick: saveStudent,
                    get disabled() {
                      return saving();
                    },
                    get children() {
                      return saving() ? "Saving..." : "Save Changes";
                    }
                  }), null);
                  insert(_el$22, createComponent(Button, {
                    variant: "outline",
                    onClick: () => setView("list"),
                    children: "Cancel"
                  }), null);
                  return _el$22;
                })()];
              }
            })];
          }
        });
      }
    }), null);
    insert(_el$7, createComponent(Show, {
      get when() {
        return view() === "register";
      },
      get children() {
        return createComponent(Card, {
          "class": "border-amber-600/30",
          get children() {
            return [createComponent(CardHeader, {
              "class": "bg-amber-900/20",
              get children() {
                return [createComponent(CardTitle, {
                  children: "Register Student"
                }), createComponent(CardDescription, {
                  "class": "text-amber-300",
                  get children() {
                    return ["Registering student as administrator for ", createMemo(() => selectedSchool()?.label), ". Student will be pre-verified."];
                  }
                })];
              }
            }), createComponent(CardContent, {
              "class": "pt-4",
              get children() {
                var _el$23 = _tmpl$12$1(), _el$24 = _el$23.firstChild, _el$25 = _el$24.nextSibling, _el$26 = _el$25.nextSibling, _el$27 = _el$26.nextSibling, _el$28 = _el$27.nextSibling;
                _el$23.addEventListener("submit", registerStudent);
                insert(_el$24, createComponent(TextFieldRoot, {
                  get children() {
                    return [createComponent(TextFieldLabel, {
                      children: "First Name"
                    }), createComponent(TextField, {
                      get value() {
                        return regFname();
                      },
                      onInput: (e) => setRegFname(e.target.value),
                      required: true,
                      "class": "p-2"
                    })];
                  }
                }), null);
                insert(_el$24, createComponent(TextFieldRoot, {
                  get children() {
                    return [createComponent(TextFieldLabel, {
                      children: "Last Name"
                    }), createComponent(TextField, {
                      get value() {
                        return regLname();
                      },
                      onInput: (e) => setRegLname(e.target.value),
                      required: true,
                      "class": "p-2"
                    })];
                  }
                }), null);
                insert(_el$23, createComponent(TextFieldRoot, {
                  get children() {
                    return [createComponent(TextFieldLabel, {
                      children: "Email"
                    }), createComponent(TextField, {
                      type: "email",
                      get value() {
                        return regEmail();
                      },
                      onInput: (e) => setRegEmail(e.target.value),
                      required: true,
                      "class": "p-2"
                    })];
                  }
                }), _el$25);
                insert(_el$23, createComponent(TextFieldRoot, {
                  get children() {
                    return [createComponent(TextFieldLabel, {
                      children: "Phone"
                    }), createComponent(TextField, {
                      type: "tel",
                      get value() {
                        return regPhone();
                      },
                      onInput: (e) => setRegPhone(e.target.value),
                      required: true,
                      "class": "p-2"
                    })];
                  }
                }), _el$25);
                insert(_el$23, createComponent(TextFieldRoot, {
                  get children() {
                    return [createComponent(TextFieldLabel, {
                      children: "Password"
                    }), createComponent(TextField, {
                      type: "password",
                      get value() {
                        return regPassword();
                      },
                      onInput: (e) => setRegPassword(e.target.value),
                      required: true,
                      "class": "p-2"
                    })];
                  }
                }), _el$25);
                insert(_el$25, createComponent(Select, {
                  options: [{
                    value: "9",
                    label: "Freshman"
                  }, {
                    value: "10",
                    label: "Sophomore"
                  }, {
                    value: "11",
                    label: "Junior"
                  }, {
                    value: "12",
                    label: "Senior"
                  }],
                  optionValue: "value",
                  optionTextValue: "label",
                  get value() {
                    return regGrade();
                  },
                  onChange: setRegGrade,
                  itemComponent: (props2) => createComponent(SelectItem, {
                    get item() {
                      return props2.item;
                    },
                    get children() {
                      return props2.item.rawValue.label;
                    }
                  }),
                  get children() {
                    return [createComponent(TextFieldLabel, {
                      children: "Grade"
                    }), createComponent(SelectTrigger, {
                      get children() {
                        return createComponent(SelectValue, {
                          children: (state) => state.selectedOption()?.label || "Select"
                        });
                      }
                    }), createComponent(SelectContent, {})];
                  }
                }), null);
                insert(_el$25, createComponent(Select, {
                  get options() {
                    return selectedSchool()?.majors || [];
                  },
                  optionValue: "value",
                  optionTextValue: "label",
                  get value() {
                    return regMajor();
                  },
                  onChange: setRegMajor,
                  itemComponent: (props2) => createComponent(SelectItem, {
                    get item() {
                      return props2.item;
                    },
                    get children() {
                      return props2.item.rawValue.label;
                    }
                  }),
                  get children() {
                    return [createComponent(TextFieldLabel, {
                      children: "Major"
                    }), createComponent(SelectTrigger, {
                      get children() {
                        return createComponent(SelectValue, {
                          children: (state) => state.selectedOption()?.label || "Select"
                        });
                      }
                    }), createComponent(SelectContent, {})];
                  }
                }), null);
                insert(_el$25, createComponent(Select, {
                  options: [{
                    value: "xs",
                    label: "XS"
                  }, {
                    value: "s",
                    label: "S"
                  }, {
                    value: "m",
                    label: "M"
                  }, {
                    value: "l",
                    label: "L"
                  }, {
                    value: "xl",
                    label: "XL"
                  }],
                  optionValue: "value",
                  optionTextValue: "label",
                  get value() {
                    return regShirt();
                  },
                  onChange: setRegShirt,
                  itemComponent: (props2) => createComponent(SelectItem, {
                    get item() {
                      return props2.item;
                    },
                    get children() {
                      return props2.item.rawValue.label;
                    }
                  }),
                  get children() {
                    return [createComponent(TextFieldLabel, {
                      children: "Shirt Size"
                    }), createComponent(SelectTrigger, {
                      get children() {
                        return createComponent(SelectValue, {
                          children: (state) => state.selectedOption()?.label || "Select"
                        });
                      }
                    }), createComponent(SelectContent, {})];
                  }
                }), null);
                insert(_el$27, createComponent(TextFieldRoot, {
                  get children() {
                    return [createComponent(TextFieldLabel, {
                      children: "Parent First Name"
                    }), createComponent(TextField, {
                      get value() {
                        return regParentFname();
                      },
                      onInput: (e) => setRegParentFname(e.target.value),
                      required: true,
                      "class": "p-2"
                    })];
                  }
                }), null);
                insert(_el$27, createComponent(TextFieldRoot, {
                  get children() {
                    return [createComponent(TextFieldLabel, {
                      children: "Parent Last Name"
                    }), createComponent(TextField, {
                      get value() {
                        return regParentLname();
                      },
                      onInput: (e) => setRegParentLname(e.target.value),
                      required: true,
                      "class": "p-2"
                    })];
                  }
                }), null);
                insert(_el$23, createComponent(TextFieldRoot, {
                  get children() {
                    return [createComponent(TextFieldLabel, {
                      children: "Parent Email"
                    }), createComponent(TextField, {
                      type: "email",
                      get value() {
                        return regParentEmail();
                      },
                      onInput: (e) => setRegParentEmail(e.target.value),
                      required: true,
                      "class": "p-2"
                    })];
                  }
                }), _el$28);
                insert(_el$23, createComponent(TextFieldRoot, {
                  get children() {
                    return [createComponent(TextFieldLabel, {
                      children: "Parent Phone"
                    }), createComponent(TextField, {
                      type: "tel",
                      get value() {
                        return regParentPhone();
                      },
                      onInput: (e) => setRegParentPhone(e.target.value),
                      required: true,
                      "class": "p-2"
                    })];
                  }
                }), _el$28);
                insert(_el$23, createComponent(TextFieldRoot, {
                  get children() {
                    return [createComponent(TextFieldLabel, {
                      children: "Relationship to Student"
                    }), createComponent(TextField, {
                      get value() {
                        return regParentRelationship();
                      },
                      onInput: (e) => setRegParentRelationship(e.target.value),
                      required: true,
                      placeholder: "Mother, Father, Guardian, etc.",
                      "class": "p-2"
                    })];
                  }
                }), _el$28);
                insert(_el$28, createComponent(Button, {
                  type: "submit",
                  get disabled() {
                    return registering();
                  },
                  get children() {
                    return registering() ? "Registering..." : "Register Student";
                  }
                }), null);
                insert(_el$28, createComponent(Button, {
                  type: "button",
                  variant: "outline",
                  onClick: () => setView("list"),
                  children: "Cancel"
                }), null);
                return _el$23;
              }
            })];
          }
        });
      }
    }), null);
    insert(_el$7, createComponent(Show, {
      get when() {
        return categoryInfoOpen();
      },
      get children() {
        return createComponent(Portal, {
          get children() {
            var _el$29 = _tmpl$13$1(), _el$30 = _el$29.firstChild, _el$31 = _el$30.nextSibling, _el$32 = _el$31.firstChild, _el$33 = _el$32.nextSibling, _el$34 = _el$33.nextSibling;
            _el$29.$$click = () => setCategoryInfoOpen(false);
            _el$31.$$click = (e) => e.stopPropagation();
            _el$32.$$click = () => setCategoryInfoOpen(false);
            insert(_el$33, () => categoryInfoData()?.label);
            insert(_el$31, (() => {
              var _c$5 = createMemo(() => categoryInfoData()?.prize > 0);
              return () => _c$5() && (() => {
                var _el$48 = _tmpl$19$1(); _el$48.firstChild;
                insert(_el$48, () => categoryInfoData()?.prize?.toLocaleString(), null);
                return _el$48;
              })();
            })(), _el$34);
            insert(_el$34, () => categoryInfoData()?.description);
            return _el$29;
          }
        });
      }
    }), null);
    return _el$7;
  })();
};
delegateEvents(["click"]);

var _tmpl$ = /* @__PURE__ */ template(`<div class=space-y-2><div class="text-left w-full text-sm font-medium">Award Categories</div><div class="grid grid-cols-2 gap-2">`), _tmpl$2 = /* @__PURE__ */ template(`<button type=button><span>`), _tmpl$3 = /* @__PURE__ */ template(`<span><svg xmlns=http://www.w3.org/2000/svg width=14 height=14 viewBox="0 0 24 24"fill=none stroke=currentColor stroke-width=2 stroke-linecap=round stroke-linejoin=round><circle cx=12 cy=12 r=10></circle><path d="M12 16v-4"></path><path d="M12 8h.01">`), _tmpl$4 = /* @__PURE__ */ template(`<div class="text-center w-full space-y-4"><h2 class="text-2xl font-bold mb-4">Reset Password</h2><p class="text-gray-600 mb-4">Please enter your new password.</p><form class="flex flex-col items-center w-full">`), _tmpl$5 = /* @__PURE__ */ template(`<div class=text-center><h2 class="text-2xl font-bold mb-2">Welcome to the 2026 Bergen Tech Hackathon!</h2><p class="text-gray-500 mb-6">Manage your registration, team, and hackathon details below.</p><div class="flex flex-col items-center gap-4">`), _tmpl$6 = /* @__PURE__ */ template(`<div class="w-full max-w-md space-y-3">`), _tmpl$7 = /* @__PURE__ */ template(`<div class=space-y-2><p class="text-sm text-amber-400">Your join request is pending approval.`), _tmpl$8 = /* @__PURE__ */ template(`<p class="text-sm text-amber-300">Team assignment for your school is managed by your school administrator. Contact them to be assigned to a team.`), _tmpl$9 = /* @__PURE__ */ template(`<div class="text-center mt-[calc(var(--spacing)_*_-2)]"><div class="flex justify-between items-center mb-4"><h2 class="text-2xl font-bold">Admin Dashboard</h2></div><div class=space-y-4><div class="flex flex-row gap-4 w-full">`), _tmpl$10 = /* @__PURE__ */ template(`<div class="text-center mt-[calc(var(--spacing)_*_-2)]"><div class="flex justify-between items-center mb-4"><h2 class="text-2xl font-bold">Signup Information`), _tmpl$11 = /* @__PURE__ */ template(`<div class="text-center p-4"><p class=text-gray-500>No team data available.`), _tmpl$12 = /* @__PURE__ */ template(`<div class="text-center mt-[calc(var(--spacing)_*_-2)]"><div class="flex justify-between items-center mb-4"><h2 class="text-2xl font-bold">Create Team`), _tmpl$13 = /* @__PURE__ */ template(`<div class="text-center p-16"><h2 class="text-xl font-bold mb-2">You already have a team</h2><p class="text-gray-600 mb-4">You can only create one team. If you want to create a new team, please leave your current team first.`), _tmpl$14 = /* @__PURE__ */ template(`<div class="text-left w-full text-sm data-[disabled]:cursor-not-allowed data-[disabled]:opacity-70 font-medium data-[invalid]:text-destructive">Member Limit`), _tmpl$15 = /* @__PURE__ */ template(`<div class="text-left w-full text-sm data-[disabled]:cursor-not-allowed data-[disabled]:opacity-70 font-medium data-[invalid]:text-destructive">Experience Level`), _tmpl$16 = /* @__PURE__ */ template(`<div class><form class="flex flex-col items-start w-full">`), _tmpl$17 = /* @__PURE__ */ template(`<div class="flex flex-col gap-1 items-start"><span class="text-sm text-gray-500">Project Description:`), _tmpl$18 = /* @__PURE__ */ template(`<div class="flex flex-col items-start mt-2"><span class="text-sm text-gray-500 mr-1">Competing Categories: </span><div class="flex flex-wrap gap-2 mt-1">`), _tmpl$19 = /* @__PURE__ */ template(`<div class="flex flex-col gap-1 items-start"><span class="text-sm text-gray-500">Team Leader:</span><span>`), _tmpl$20 = /* @__PURE__ */ template(`<div class="flex flex-col gap-1 items-start mt-2"><span class="text-sm text-gray-500">Members:`), _tmpl$21 = /* @__PURE__ */ template(`<div class="flex flex-1 items-center justify-between p-4 border-grey-200"><div class="flex items-center flex-1"><span class="text-sm text-gray-500">Join Requests:</span><span class="text-sm ml-2">`), _tmpl$22 = /* @__PURE__ */ template(`<div class="text-center mt-[calc(var(--spacing)_*_-2)]"><div class="flex justify-between items-center mb-4"><h2 class="text-2xl font-bold">Your Team</h2><div class="flex flex-row gap-4"></div></div><div class="grid grid-cols-1 lg:grid-cols-5 gap-4">`), _tmpl$23 = /* @__PURE__ */ template(`<span class="text-sm p-1 rounded-sm border">`), _tmpl$24 = /* @__PURE__ */ template(`<div class="flex items-center justify-start flex-row w-full"><div class="flex flex-1 flex-col items-start"><span class=text-left></span><span class="text-sm text-gray-700">`), _tmpl$25 = /* @__PURE__ */ template(`<span class="text-sm text-gray-700">`), _tmpl$26 = /* @__PURE__ */ template(`<svg xmlns=http://www.w3.org/2000/svg width=20 height=20 viewBox="0 0 24 24"fill=none stroke=currentColor stroke-width=2 stroke-linecap=round stroke-linejoin=round class="lucide lucide-x-icon lucide-x"><path d="M18 6 6 18"></path><path d="m6 6 12 12">`), _tmpl$27 = /* @__PURE__ */ template(`<div class="ext-center mt-[calc(var(--spacing)_*_-2)]"><div class="flex justify-between items-center mb-4"><h2 class="text-2xl font-bold">Join a Team</h2><div class="flex flex-row gap-4"></div></div><div class=space-y-6>`), _tmpl$28 = /* @__PURE__ */ template(`<span class="text-sm text-gray-500">Leader:`), _tmpl$29 = /* @__PURE__ */ template(`<div class=text-center><p class=text-gray-500>No teams available`), _tmpl$30 = /* @__PURE__ */ template(`<div class="text-center mt-[calc(var(--spacing)_*_-2)]"><div class="flex justify-between items-center mb-4"><h2 class="text-2xl font-bold">Edit Team`), _tmpl$31 = /* @__PURE__ */ template(`<div class="text-center p-16"><h2 class="text-xl font-bold mb-2">Unauthorized</h2><p class="text-gray-600 mb-4">Only the team leader can edit the team.`), _tmpl$32 = /* @__PURE__ */ template(`<div class="flex flex-row gap-4 w-full">`), _tmpl$33 = /* @__PURE__ */ template(`<div class="text-left w-full text-sm data-[disabled]:cursor-not-allowed data-[disabled]:opacity-70 font-medium data-[invalid]:text-destructive">School`), _tmpl$34 = /* @__PURE__ */ template(`<div class="text-left w-full text-sm data-[disabled]:cursor-not-allowed data-[disabled]:opacity-70 font-medium data-[invalid]:text-destructive">Major`), _tmpl$35 = /* @__PURE__ */ template(`<div class="text-left w-full text-sm data-[disabled]:cursor-not-allowed data-[disabled]:opacity-70 font-medium data-[invalid]:text-destructive">Grade`), _tmpl$36 = /* @__PURE__ */ template(`<div class="text-center mt-[calc(var(--spacing)_*_-2)]"><div class="flex justify-between items-center mb-4"><h2 class="text-2xl font-bold">Manage Account</h2><div class="flex flex-row gap-4"></div></div><div class><form class="flex flex-col items-start w-full">`), _tmpl$37 = /* @__PURE__ */ template(`<div class="text-center mt-[calc(var(--spacing)_*_-2)]"><div class="flex justify-between items-center mb-4"><h2 class="text-2xl font-bold">Join Requests</h2></div><div class="grid grid-cols-1 md:grid-cols-3 gap-4">`), _tmpl$38 = /* @__PURE__ */ template(`<div class=text-center><h2 class="text-2xl font-bold mb-4">You are not the team leader</h2><p class="text-gray-600 mb-4">Only the team leader can view join requests.`), _tmpl$39 = /* @__PURE__ */ template(`<span class="text-sm text-gray-500">Message:`), _tmpl$40 = /* @__PURE__ */ template(`<div class=text-left><p class=text-gray-500>No join requests`), _tmpl$41 = /* @__PURE__ */ template(`<div class="fixed inset-0 z-[9999] flex items-center justify-center"><div class="absolute inset-0 bg-black/50"></div><div class="relative bg-white border border-zinc-200 rounded-xl p-6 max-w-md w-full mx-4 shadow-2xl"><button class="absolute right-3 top-3 text-zinc-400 hover:text-zinc-600"><svg xmlns=http://www.w3.org/2000/svg width=18 height=18 viewBox="0 0 24 24"fill=none stroke=currentColor stroke-width=2 stroke-linecap=round stroke-linejoin=round><path d="M18 6 6 18"></path><path d="m6 6 12 12"></path></svg></button><h3 class="text-lg font-semibold text-zinc-900 mb-2"></h3><p class="text-sm text-zinc-600 leading-relaxed">`), _tmpl$42 = /* @__PURE__ */ template(`<main class="container mx-auto py-8 px-4"><div class="mt-8 text-center"><p class=text-muted-foreground>Questions? <a href=mailto:julbry26@bergen.org class="text-[#f5b700] hover:underline">Contact us`), _tmpl$43 = /* @__PURE__ */ template(`<p class="text-black mb-4 text-lg font-bold">Enter Verification Code:`), _tmpl$44 = /* @__PURE__ */ template(`<p class="text-gray-500 mb-4">Please enter the code sent to your email address to verify your account.`), _tmpl$45 = /* @__PURE__ */ template(`<div class="space-y-1 flex gap-2 max-w-96 min-h-24 items-center flex-row">`), _tmpl$46 = /* @__PURE__ */ template(`<p class="text-gray-500 mb-4"><a href=#>`), _tmpl$47 = /* @__PURE__ */ template(`<p class="text-sm font-medium text-green-600 mb-2">Prize: $`);
function parseCSV(csvString) {
  const lines = csvString.trim().split("\n");
  const headers = parseCSVLine(lines[0]);
  const data = lines.slice(2).map((line) => {
    const values = parseCSVLine(line);
    const obj = {};
    headers.forEach((key, i) => {
      const val = values[i];
      try {
        obj[key] = JSON.parse(val);
      } catch {
        obj[key] = val;
      }
    });
    return obj;
  });
  return {
    headers,
    data
  };
}
function parseCSVLine(line) {
  const result = [];
  let field = "";
  let inQuotes = false;
  for (let i = 0; i < line.length; i++) {
    const char = line[i];
    const nextChar = line[i + 1];
    if (char === '"' && inQuotes && nextChar === '"') {
      field += '"';
      i++;
    } else if (char === '"') {
      inQuotes = !inQuotes;
    } else if (char === "," && !inQuotes) {
      result.push(field);
      field = "";
    } else {
      field += char;
    }
  }
  result.push(field);
  return result;
}
const Dashboard = () => {
  createEffect(() => {
    if (location.pathname.startsWith("/signup/dashboard/reset")) {
      return;
    }
    fetch("/api/check-login").then((res) => res.json()).then((data) => {
      if (!data.loggedIn) {
        location.href = "/signup#5";
      }
    }).catch((err) => {
      location.href = "/signup#5";
    });
  });
  const resend = (e) => {
    e.preventDefault();
    if (resent()) {
      return;
    }
    fetch("/api/resend", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      }
    }).then((res) => res.json()).then((data) => {
      if (!data.error) {
        setResent(true);
      } else {
        setResent(false);
      }
    }).catch((err) => {
      setResent(false);
    });
  };
  const [page, setPage] = createSignal("");
  const [user, setUser] = createSignal({
    name: ""
  });
  const [verified, setVerified] = createSignal(true);
  const [resent, setResent] = createSignal(false);
  const [countdown, setCountdown] = createSignal(30);
  const [resetToken, setResetToken] = createSignal(localStorage.getItem("resetToken") || "");
  createEffect(() => {
    if (resent()) {
      let time = 30;
      const interval = setInterval(() => {
        time--;
        setCountdown(time);
        if (time <= 0) {
          clearInterval(interval);
          setResent(false);
        }
      }, 1e3);
    }
  });
  createEffect(() => {
    localStorage.setItem("resetToken", resetToken());
  });
  createEffect(() => {
    if (location.pathname.startsWith("/signup/dashboard/reset")) {
      if (location.pathname.startsWith("/signup/dashboard/reset/")) {
        const token = atob(location.pathname.split("/").pop());
        setResetToken(token);
      }
      setPage("/reset");
      return;
    }
    fetch("/api/user").then((res) => res.json()).then(({
      user: user2,
      error
    }) => {
      if (error) {
        if (error === "User not verified") {
          return setVerified(false);
        }
        return location.href = "/signup#5";
      }
      setUser(user2);
      setMemberCount(user2.team?.maxSize || 2);
      setExperience(user2.team?.experience || "beginner");
      setCategories(user2.team?.categories ? JSON.parse(user2.team.categories) : []);
      setSchool(user2.school || null);
      setMajor(user2.major || null);
      setGrade(user2.grade || null);
      setShirt(user2.shirt || null);
      console.log(user2);
      if (page() === "") {
        setPage(location.pathname.replace("/signup/dashboard", "") || "/");
      }
    }).catch((err) => {
      location.href = "/signup#5";
    });
  });
  const [memberCount, setMemberCount] = createSignal({
    value: user().team?.maxSize
  });
  const [experience, setExperience] = createSignal({
    value: user().team?.experience
  });
  const [categories, setCategories] = createSignal(user().team?.categories ? JSON.parse(user().team.categories) : []);
  const [allTeams, setAllTeams] = createSignal([]);
  const [teams, setTeams] = createSignal([]);
  const [searchTeam, setSearchTeam] = createSignal("");
  const [joinRequest, setJoinRequest] = createSignal(null);
  const [school, setSchool] = createSignal(null);
  const [major, setMajor] = createSignal(null);
  const [grade, setGrade] = createSignal(null);
  const [shirt, setShirt] = createSignal(null);
  const [teamData, setTeamData] = createSignal(null);
  const [userData, setUserData] = createSignal(null);
  const [schools, setSchools] = createSignal([]);
  const [allMajors, setAllMajors] = createSignal({});
  const [availableCategories, setAvailableCategories] = createSignal([]);
  const [categoryInfoOpen, setCategoryInfoOpen] = createSignal(false);
  const [categoryInfoData, setCategoryInfoData] = createSignal(null);
  const showCategoryInfo = (cat) => {
    setCategoryInfoData(cat);
    setCategoryInfoOpen(true);
  };
  const CategoryPicker = (props) => {
    const cats = () => props.categories || availableCategories() || [];
    return (() => {
      var _el$ = _tmpl$(), _el$2 = _el$.firstChild, _el$3 = _el$2.nextSibling;
      insert(_el$3, () => cats().map((cat) => {
        const isSelected = () => (props.selected || []).some((s) => s.value === cat.value);
        return (() => {
          var _el$4 = _tmpl$2(), _el$5 = _el$4.firstChild;
          _el$4.$$click = () => {
            if (isSelected()) {
              props.onChange((props.selected || []).filter((s) => s.value !== cat.value));
            } else {
              props.onChange([...props.selected || [], {
                value: cat.value,
                label: cat.label
              }]);
            }
          };
          insert(_el$5, () => cat.label, null);
          insert(_el$5, () => cat.prize ? ` ($${cat.prize})` : "", null);
          insert(_el$4, (() => {
            var _c$ = createMemo(() => !!cat.description);
            return () => _c$() && (() => {
              var _el$6 = _tmpl$3();
              _el$6.$$click = (e) => {
                e.stopPropagation();
                showCategoryInfo(cat);
              };
              createRenderEffect(() => className(_el$6, `ml-2 shrink-0 ${isSelected() ? "text-blue-200" : "text-zinc-400"}`));
              return _el$6;
            })();
          })(), null);
          createRenderEffect(() => className(_el$4, `flex items-center justify-between px-3 py-2 rounded-lg text-sm font-medium transition-all border ${isSelected() ? "bg-blue-600 text-white border-blue-500" : "bg-zinc-100 text-zinc-700 border-zinc-200 hover:bg-zinc-200"}`));
          return _el$4;
        })();
      }));
      return _el$;
    })();
  };
  createEffect(() => {
    fetch("/api/categories").then((res) => res.json()).then((data) => {
      setAvailableCategories(data.categories);
    }).catch((err) => console.error(err));
  });
  createEffect(() => {
    fetch("/api/schools").then((res) => res.json()).then((data) => {
      setSchools(data.schools);
      const majorsMap = {};
      data.schools.forEach((school2) => {
        majorsMap[school2.value] = school2.majors;
      });
      setAllMajors(majorsMap);
    }).catch((err) => console.error(err));
  });
  createEffect(() => {
    if (searchTeam() === "") {
      setTeams(allTeams());
      return;
    }
    const filteredTeams = allTeams().filter((team) => {
      return team.name.toLowerCase().includes(searchTeam().toLowerCase()) || team.members.some((member) => member.name.toLowerCase().includes(searchTeam().toLowerCase()));
    });
    setTeams(filteredTeams);
  });
  createEffect(() => {
    if (page() === "") {
      return;
    }
    window.history.replaceState({}, "", "/signup/dashboard" + page());
  });
  createEffect(() => {
    if (page() === "/admin/viewer") {
      setTeamData(null);
      setUserData(null);
      fetch("/api/export-teams").then((res) => res.text()).then((data) => {
        if (data.error) {
          console.error(data.error);
          return;
        }
        setTeamData(parseCSV(data));
      }).catch((err) => {
        console.error("Error fetching team data:", err);
      });
      fetch("/api/export-people").then((res) => res.text()).then((data) => {
        if (data.error) {
          console.error(data.error);
          return;
        }
        setUserData(parseCSV(data));
      }).catch((err) => {
        console.error("Error fetching user data:", err);
      });
    }
  });
  createEffect(() => {
    if (!joinRequest()) return;
    fetch("/api/join", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        teamId: joinRequest().id
      })
    }).then((res) => res.json()).then((data) => {
      if (!data.error) {
        alert("Join request sent");
        setJoinRequest(null);
        setPage("/");
        location.reload();
      } else {
        alert(data.error || "Error sending join request");
        location.reload();
      }
    }).catch((err) => {
      alert("Error sending join request");
      location.reload();
    });
  });
  const pages = {
    "": () => "Loading...",
    "/reset": () => (() => {
      var _el$7 = _tmpl$4(), _el$8 = _el$7.firstChild, _el$9 = _el$8.nextSibling, _el$10 = _el$9.nextSibling;
      _el$10.addEventListener("submit", (e) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const data = Object.fromEntries(formData.entries());
        if (data.password !== data.confirmPassword) {
          alert("Passwords do not match");
          return;
        }
        fetch("/api/reset", {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
            ...data,
            token: resetToken()
          })
        }).then((res) => res.json()).then((data2) => {
          if (!data2.error) {
            location.href = "/signup/dashboard";
          } else {
            alert("Error resetting password");
          }
        }).catch((err) => {
          alert("Error resetting password");
        });
      });
      insert(_el$10, createComponent(TextFieldRoot, {
        "class": "flex items-start flex-col justify-center w-2/3",
        get children() {
          return [createComponent(TextFieldLabel, {
            children: "New Password"
          }), createComponent(TextField, {
            type: "password",
            name: "password",
            "class": "h-10 flex w-full text-xl p-3",
            required: true
          })];
        }
      }), null);
      insert(_el$10, createComponent(TextFieldRoot, {
        "class": "flex items-start flex-col justify-center w-2/3 mt-4",
        get children() {
          return [createComponent(TextFieldLabel, {
            children: "Confirm Password"
          }), createComponent(TextField, {
            type: "password",
            name: "confirmPassword",
            "class": "h-10 flex w-full text-xl p-3",
            required: true
          })];
        }
      }), null);
      insert(_el$10, createComponent(Button, {
        type: "submit",
        "class": "mt-4",
        children: "Reset Password"
      }), null);
      insert(_el$10, createComponent(Button, {
        type: "button",
        "class": "mt-4",
        variant: "outline",
        onClick: () => {
          location.href = "/signup#5";
        },
        children: "Back to Login"
      }), null);
      return _el$7;
    })(),
    "/": () => (() => {
      var _el$11 = _tmpl$5(), _el$12 = _el$11.firstChild, _el$13 = _el$12.nextSibling, _el$14 = _el$13.nextSibling;
      insert(_el$14, (() => {
        var _c$2 = createMemo(() => !!user().admin);
        return () => _c$2() && (() => {
          var _el$15 = _tmpl$6();
          insert(_el$15, createComponent(Button, {
            onClick: () => setPage("/admin"),
            "class": "w-full",
            children: "Admin Dashboard"
          }), null);
          insert(_el$15, (() => {
            var _c$6 = createMemo(() => !!user().isSchoolAdmin);
            return () => _c$6() && createComponent(Button, {
              onClick: () => setPage("/school-admin"),
              "class": "w-full",
              variant: "outline",
              children: "School Admin Dashboard"
            });
          })(), null);
          return _el$15;
        })();
      })(), null);
      insert(_el$14, (() => {
        var _c$3 = createMemo(() => !!(!user().admin && user().isSchoolAdmin));
        return () => _c$3() && (() => {
          var _el$16 = _tmpl$6();
          insert(_el$16, createComponent(Button, {
            onClick: () => setPage("/school-admin"),
            "class": "w-full",
            children: "School Admin Dashboard"
          }));
          return _el$16;
        })();
      })(), null);
      insert(_el$14, (() => {
        var _c$4 = createMemo(() => !!(!user().admin && !user().isSchoolAdmin && (user().team || user().registration?.teamId)));
        return () => _c$4() && (() => {
          var _el$17 = _tmpl$6();
          insert(_el$17, (() => {
            var _c$7 = createMemo(() => !!user().team);
            return () => _c$7() ? createComponent(Card, {
              "class": "text-left",
              get children() {
                return [createComponent(CardHeader, {
                  "class": "pb-2",
                  get children() {
                    return [createComponent(CardTitle, {
                      "class": "text-lg",
                      get children() {
                        return ["Your Team: ", createMemo(() => user().team.name)];
                      }
                    }), createComponent(CardDescription, {
                      get children() {
                        return [createMemo(() => user().team.members?.length || 0), " of ", createMemo(() => user().team.maxSize), " members"];
                      }
                    })];
                  }
                }), createComponent(CardContent, {
                  "class": "pt-2",
                  get children() {
                    return createComponent(Button, {
                      onClick: () => setPage("/team"),
                      "class": "w-full",
                      children: "View Team"
                    });
                  }
                })];
              }
            }) : (() => {
              var _el$18 = _tmpl$7(); _el$18.firstChild;
              insert(_el$18, createComponent(Button, {
                onClick: () => {
                  if (!confirm("Cancel your join request?")) return;
                  fetch("/api/cancel-request", {
                    method: "POST"
                  }).then((r) => r.json()).then((d) => {
                    if (!d.error) location.reload();
                    else alert("Error cancelling request");
                  });
                },
                variant: "outline",
                "class": "w-full",
                children: "Cancel Join Request"
              }), null);
              return _el$18;
            })();
          })());
          return _el$17;
        })();
      })(), null);
      insert(_el$14, (() => {
        var _c$5 = createMemo(() => !!(!user().admin && !user().isSchoolAdmin && !user().team && !user().registration?.teamId));
        return () => _c$5() && (() => {
          var _el$20 = _tmpl$6();
          insert(_el$20, (() => {
            var _c$8 = createMemo(() => user().allowTeamCreation === false);
            return () => _c$8() ? createComponent(Card, {
              "class": "text-left border-amber-600/30",
              get children() {
                return createComponent(CardContent, {
                  "class": "pt-4",
                  get children() {
                    return _tmpl$8();
                  }
                });
              }
            }) : [createComponent(Button, {
              onClick: () => setPage("/create"),
              "class": "w-full",
              children: "Create Team"
            }), createComponent(Button, {
              onClick: () => setPage("/join"),
              "class": "w-full",
              variant: "outline",
              children: "Join a Team"
            })];
          })());
          return _el$20;
        })();
      })(), null);
      insert(_el$14, createComponent(Button, {
        onClick: () => setPage("/manage"),
        variant: "outline",
        "class": "mt-2",
        children: "Manage Account"
      }), null);
      return _el$11;
    })(),
    "/admin": () => (() => {
      var _el$22 = _tmpl$9(), _el$23 = _el$22.firstChild; _el$23.firstChild; var _el$25 = _el$23.nextSibling, _el$26 = _el$25.firstChild;
      insert(_el$23, createComponent(Button, {
        onClick: () => setPage("/"),
        children: "Back"
      }), null);
      insert(_el$25, createComponent(Button, {
        onClick: () => setPage("/admin/manage"),
        "class": "w-full",
        children: "Manage System (Schools, Majors, Users)"
      }), _el$26);
      insert(_el$25, createComponent(Button, {
        onClick: () => setPage("/admin/viewer"),
        "class": "w-full",
        children: "View Data"
      }), _el$26);
      insert(_el$26, createComponent(Button, {
        variant: "outline",
        "class": "flex-1",
        onClick: () => {
          fetch("/api/export-teams", {
            method: "GET",
            headers: {
              "Content-Type": "application/json"
            }
          }).then((res) => res.blob()).then((blob) => {
            const url = window.URL.createObjectURL(blob);
            const a = document.createElement("a");
            a.href = url;
            a.download = `bergen-hackathon-teams-${(/* @__PURE__ */ new Date()).toISOString().split("T")[0]}.csv`;
            document.body.appendChild(a);
            a.click();
            a.remove();
          }).catch((err) => {
            alert("Error exporting data");
          });
        },
        children: "Export Team Data (CSV)"
      }), null);
      insert(_el$26, createComponent(Button, {
        variant: "outline",
        "class": "flex-1",
        onClick: () => {
          fetch("/api/export-people", {
            method: "GET",
            headers: {
              "Content-Type": "application/json"
            }
          }).then((res) => res.blob()).then((blob) => {
            const url = window.URL.createObjectURL(blob);
            const a = document.createElement("a");
            a.href = url;
            a.download = `bergen-hackathon-people-${(/* @__PURE__ */ new Date()).toISOString().split("T")[0]}.csv`;
            document.body.appendChild(a);
            a.click();
            a.remove();
          }).catch((err) => {
            alert("Error exporting data");
          });
        },
        children: "Export Signup Data (CSV)"
      }), null);
      return _el$22;
    })(),
    "/admin/manage": () => createComponent(AdminManage, {
      setPage
    }),
    "/school-admin": () => createComponent(SchoolAdminDashboard, {
      setPage
    }),
    "/admin/viewer": () => (
      /* csv viewer n stuff */
      (() => {
        var _el$27 = _tmpl$10(), _el$28 = _el$27.firstChild; _el$28.firstChild;
        insert(_el$28, createComponent(Button, {
          onClick: () => setPage("/admin"),
          children: "Back"
        }), null);
        insert(_el$27, createComponent(Tabs, {
          defaultValue: "team-data",
          "class": "w-full",
          get children() {
            return [createComponent(TabsList, {
              get children() {
                return [createComponent(TabsTrigger, {
                  value: "team-data",
                  "class": "w-full",
                  children: "Team Data"
                }), createComponent(TabsTrigger, {
                  value: "signup-data",
                  "class": "w-full",
                  children: "Signup Data"
                }), createComponent(TabsIndicator, {})];
              }
            }), createComponent(TabsContent, {
              value: "team-data",
              get children() {
                return createMemo(() => !!teamData())() ? createComponent(Table, {
                  get children() {
                    return [createComponent(TableCaption, {
                      "class": "space-x-2",
                      get children() {
                        return createComponent(Button, {
                          variant: "link",
                          "class": "flex-1",
                          onClick: () => {
                            fetch("/api/export-teams", {
                              method: "GET",
                              headers: {
                                "Content-Type": "application/json"
                              }
                            }).then((res) => res.blob()).then((blob) => {
                              const url = window.URL.createObjectURL(blob);
                              const a = document.createElement("a");
                              a.href = url;
                              a.download = `bergen-hackathon-teams-${(/* @__PURE__ */ new Date()).toISOString().split("T")[0]}.csv`;
                              document.body.appendChild(a);
                              a.click();
                              a.remove();
                            }).catch((err) => {
                              alert("Error exporting data");
                            });
                          },
                          children: "Export"
                        });
                      }
                    }), createComponent(TableHeader, {
                      get children() {
                        return createComponent(TableRow, {
                          get children() {
                            return teamData().headers.map((header) => createComponent(TableHead, {
                              key: header,
                              "class": "w-[100px]",
                              children: header
                            }));
                          }
                        });
                      }
                    }), createComponent(TableBody, {
                      get children() {
                        return teamData().data.map((row, index) => createComponent(TableRow, {
                          key: index,
                          get children() {
                            return teamData().headers.map((header) => createComponent(TableCell, {
                              key: header,
                              "class": "font-medium" + (header === "Categories" ? " w-[300px]" : ""),
                              get children() {
                                return row[header];
                              }
                            }));
                          }
                        }));
                      }
                    })];
                  }
                }) : _tmpl$11();
              }
            }), createComponent(TabsContent, {
              value: "signup-data",
              get children() {
                return createMemo(() => !!userData())() ? createComponent(Table, {
                  get children() {
                    return [createComponent(TableCaption, {
                      "class": "space-x-2",
                      get children() {
                        return createComponent(Button, {
                          variant: "link",
                          "class": "flex-1",
                          onClick: () => {
                            fetch("/api/export-people", {
                              method: "GET",
                              headers: {
                                "Content-Type": "application/json"
                              }
                            }).then((res) => res.blob()).then((blob) => {
                              const url = window.URL.createObjectURL(blob);
                              const a = document.createElement("a");
                              a.href = url;
                              a.download = `bergen-hackathon-people-${(/* @__PURE__ */ new Date()).toISOString().split("T")[0]}.csv`;
                              document.body.appendChild(a);
                              a.click();
                              a.remove();
                            }).catch((err) => {
                              alert("Error exporting data");
                            });
                          },
                          children: "Export"
                        });
                      }
                    }), createComponent(TableHeader, {
                      get children() {
                        return createComponent(TableRow, {
                          get children() {
                            return userData().headers.map((header) => createComponent(TableHead, {
                              key: header,
                              "class": "w-[100px]",
                              children: header
                            }));
                          }
                        });
                      }
                    }), createComponent(TableBody, {
                      get children() {
                        return userData().data.map((row, index) => createComponent(TableRow, {
                          key: index,
                          get children() {
                            return userData().headers.map((header) => createComponent(TableCell, {
                              key: header,
                              "class": "font-medium",
                              get children() {
                                return row[header];
                              }
                            }));
                          }
                        }));
                      }
                    })];
                  }
                }) : _tmpl$11();
              }
            })];
          }
        }), null);
        return _el$27;
      })()
    ),
    "/create": () => (window.onbeforeunload = function() {
      return "Are you sure you want to leave? Your changes will not be saved.";
    }, (() => {
      var _el$32 = _tmpl$12(), _el$33 = _el$32.firstChild; _el$33.firstChild;
      insert(_el$33, createComponent(Button, {
        onClick: () => setPage("/"),
        children: "Back"
      }), null);
      insert(_el$32, (() => {
        var _c$9 = createMemo(() => !!user().team);
        return () => _c$9() ? (() => {
          var _el$35 = _tmpl$13(), _el$36 = _el$35.firstChild; _el$36.nextSibling;
          insert(_el$35, createComponent(Button, {
            onClick: () => setPage("/team"),
            children: "View Team"
          }), null);
          return _el$35;
        })() : (() => {
          var _el$38 = _tmpl$16(), _el$39 = _el$38.firstChild;
          _el$39.addEventListener("submit", (e) => {
            e.preventDefault();
            const formData = new FormData(e.currentTarget);
            formData.set("categories", JSON.stringify(categories()));
            formData.set("experience", experience()?.value || "beginner");
            formData.set("maxSize", memberCount()?.value || "2");
            const data = Object.fromEntries(formData.entries());
            fetch("/api/createteam", {
              method: "POST",
              headers: {
                "Content-Type": "application/json"
              },
              body: JSON.stringify({
                ...data
              })
            }).then((res) => res.json()).then((data2) => {
              if (!data2.error) {
                window.onbeforeunload = null;
                location.replace("/signup/dashboard/team");
              } else {
                alert(data2.error || "Error creating team");
              }
            }).catch((err) => {
              alert("Error creating team");
            });
          });
          insert(_el$39, createComponent(Card, {
            "class": "w-full",
            get children() {
              return [createComponent(CardHeader, {
                get children() {
                  return [createComponent(CardTitle, {
                    "class": "text-xl",
                    children: "New Team"
                  }), createComponent(CardDescription, {
                    children: "Fill out some basic information before completing registration."
                  })];
                }
              }), createComponent(CardContent, {
                "class": "flex flex-col space-y-4",
                get children() {
                  return [createComponent(TextFieldRoot, {
                    "class": "flex items-start flex-col justify-center w-full",
                    get children() {
                      return [createComponent(TextFieldLabel, {
                        children: "Team Name"
                      }), createComponent(TextField, {
                        name: "name",
                        "class": "h-10 flex w-full p-3",
                        required: true
                      })];
                    }
                  }), createComponent(TextFieldRoot, {
                    "class": "flex items-start flex-col justify-center w-full",
                    get children() {
                      return [createComponent(TextFieldLabel, {
                        children: "Project Description"
                      }), createComponent(TextArea, {
                        name: "project",
                        "class": "h-20 flex w-full p-3",
                        required: true
                      })];
                    }
                  }), createComponent(Select, {
                    options: [{
                      value: "1",
                      label: "1 (Work Alone)"
                    }, {
                      value: "2",
                      label: "2"
                    }, {
                      value: "3",
                      label: "3"
                    }, {
                      value: "4",
                      label: "4"
                    }],
                    label: "Team Size",
                    optionValue: "value",
                    get value() {
                      return createMemo(() => !!memberCount()?.value)() ? memberCount() : {
                        value: "2"
                      };
                    },
                    onChange: (checked) => {
                      if (checked) {
                        setMemberCount(checked);
                      } else {
                        setMemberCount(null);
                      }
                    },
                    "class": "w-full space-y-1",
                    optionTextValue: "label",
                    placeholder: "Select your team size",
                    itemComponent: (props) => createComponent(SelectItem, {
                      get item() {
                        return props.item;
                      },
                      get children() {
                        return props.item.rawValue.label;
                      }
                    }),
                    get children() {
                      return [_tmpl$14(), createComponent(SelectTrigger, {
                        id: "size",
                        get children() {
                          return createComponent(SelectValue, {
                            children: (state) => state.selectedOption()?.label
                          });
                        }
                      }), createComponent(SelectContent, {})];
                    }
                  }), createComponent(Select, {
                    options: [{
                      value: "beginner",
                      label: "Beginner (0-1 years)"
                    }, {
                      value: "intermediate",
                      label: "Intermediate (1-3 years)"
                    }, {
                      value: "advanced",
                      label: "Advanced (3+ years)"
                    }],
                    label: "Experience Level",
                    optionValue: "value",
                    get value() {
                      return createMemo(() => !!experience()?.value)() ? experience() : {
                        value: "beginner"
                      };
                    },
                    onChange: (checked) => {
                      if (checked) {
                        if (checked.value === "beginner") {
                          setExperience(null);
                          return;
                        }
                        setExperience(checked);
                      } else {
                        setExperience(null);
                      }
                    },
                    "class": "w-full space-y-1",
                    optionTextValue: "label",
                    placeholder: "Select your experience level",
                    itemComponent: (props) => createComponent(SelectItem, {
                      get item() {
                        return props.item;
                      },
                      get children() {
                        return props.item.rawValue.label;
                      }
                    }),
                    get children() {
                      return [_tmpl$15(), createComponent(SelectTrigger, {
                        id: "experience",
                        get children() {
                          return createComponent(SelectValue, {
                            children: (state) => state.selectedOption()?.label
                          });
                        }
                      }), createComponent(SelectContent, {})];
                    }
                  }), createComponent(CategoryPicker, {
                    get categories() {
                      return availableCategories();
                    },
                    get selected() {
                      return categories();
                    },
                    onChange: setCategories
                  })];
                }
              }), createComponent(CardFooter, {
                "class": "pt-4",
                get children() {
                  return createComponent(Button, {
                    "class": "w-full h-full",
                    type: "submit",
                    children: "Submit"
                  });
                }
              })];
            }
          }));
          return _el$38;
        })();
      })(), null);
      return _el$32;
    })()),
    "/team": () => (() => {
      var _el$42 = _tmpl$22(), _el$43 = _el$42.firstChild, _el$44 = _el$43.firstChild, _el$45 = _el$44.nextSibling, _el$46 = _el$43.nextSibling;
      insert(_el$45, (() => {
        var _c$10 = createMemo(() => user().team.leaderId === user().id);
        return () => _c$10() ? createComponent(Button, {
          onClick: () => setPage("/edit"),
          variant: "outline",
          children: "Edit"
        }) : [];
      })(), null);
      insert(_el$45, createComponent(Button, {
        onClick: () => {
          const confirm2 = window.confirm("Are you sure you want to leave your team? If you are the team leader, your team will be deleted.");
          if (!confirm2) {
            return;
          }
          fetch("/api/remove", {
            method: "POST",
            headers: {
              "Content-Type": "application/json"
            },
            body: JSON.stringify({
              id: user().id
            })
          }).then((res) => res.json()).then((data) => {
            if (!data.error) {
              location.reload();
            } else {
              alert("Error leaving team");
            }
          }).catch((err) => {
            alert("Error leaving team");
          });
        },
        variant: "outline",
        get children() {
          return user().team.leaderId === user().id ? "Delete Team" : "Leave Team";
        }
      }), null);
      insert(_el$45, createComponent(Button, {
        onClick: () => setPage("/"),
        children: "Back"
      }), null);
      insert(_el$46, createComponent(Card, {
        "class": "w-auto lg:col-span-3",
        get children() {
          return [createComponent(CardHeader, {
            get children() {
              return [createComponent(CardTitle, {
                "class": "text-xl",
                get children() {
                  return user().team.name;
                }
              }), createComponent(CardDescription, {
                get children() {
                  return [createMemo(() => user().team.members.length), " out of ", createMemo(() => user().team.maxSize), " members"];
                }
              })];
            }
          }), createComponent(CardContent, {
            "class": "flex flex-col",
            get children() {
              return [(() => {
                var _el$47 = _tmpl$17(); _el$47.firstChild;
                insert(_el$47, () => user().team.project, null);
                return _el$47;
              })(), (() => {
                var _el$49 = _tmpl$18(), _el$50 = _el$49.firstChild, _el$51 = _el$50.nextSibling;
                insert(_el$51, () => JSON.parse(user().team.categories).map((category) => (() => {
                  var _el$61 = _tmpl$23();
                  insert(_el$61, () => category.label);
                  return _el$61;
                })()));
                return _el$49;
              })()];
            }
          })];
        }
      }), null);
      insert(_el$46, createComponent(Card, {
        "class": "w-auto lg:col-span-2",
        get children() {
          return [createComponent(CardHeader, {
            get children() {
              return createComponent(CardTitle, {
                children: "Team Members"
              });
            }
          }), createComponent(CardContent, {
            "class": "flex flex-col pb-0",
            get children() {
              return [(() => {
                var _el$52 = _tmpl$19(), _el$53 = _el$52.firstChild, _el$54 = _el$53.nextSibling;
                insert(_el$54, () => user().team.members.find((member) => member.id === user().team.leaderId).name);
                return _el$52;
              })(), (() => {
                var _el$55 = _tmpl$20(); _el$55.firstChild;
                insert(_el$55, () => user().team.members.map((member) => (() => {
                  var _el$62 = _tmpl$24(), _el$63 = _el$62.firstChild, _el$64 = _el$63.firstChild, _el$65 = _el$64.nextSibling;
                  insert(_el$64, () => member.name);
                  insert(_el$65, () => member.email);
                  insert(_el$63, (() => {
                    var _c$12 = createMemo(() => !!member.phone);
                    return () => _c$12() && (() => {
                      var _el$66 = _tmpl$25();
                      insert(_el$66, () => member.phone);
                      return _el$66;
                    })();
                  })(), null);
                  insert(_el$62, (() => {
                    var _c$13 = createMemo(() => !!(user().id === user().team.leaderId && member.id !== user().id));
                    return () => _c$13() && createComponent(Button, {
                      "class": "ml-auto p-2 cursor-pointer",
                      variant: "outline",
                      onClick: () => {
                        const confirm2 = window.confirm(`Are you sure you want to remove ${member.name} from the team? This action cannot be undone.`);
                        if (!confirm2) {
                          return;
                        }
                        fetch("/api/remove", {
                          method: "POST",
                          headers: {
                            "Content-Type": "application/json"
                          },
                          body: JSON.stringify({
                            id: member.id
                          })
                        }).then((res) => res.json()).then((data) => {
                          location.reload();
                        }).catch((err) => {
                          alert("Error removing member");
                        });
                      },
                      get children() {
                        return _tmpl$26();
                      }
                    });
                  })(), null);
                  return _el$62;
                })()), null);
                return _el$55;
              })()];
            }
          }), createComponent(CardContent, {
            "class": "px-0 flex flex-col pb-0",
            get children() {
              var _el$57 = _tmpl$21(), _el$58 = _el$57.firstChild, _el$59 = _el$58.firstChild, _el$60 = _el$59.nextSibling;
              insert(_el$60, () => user().team.requests?.length || 0);
              insert(_el$58, (() => {
                var _c$11 = createMemo(() => !!user().team.isLeader);
                return () => _c$11() && createComponent(Button, {
                  "class": "ml-auto",
                  variant: "outline",
                  onClick: () => setPage("/requests"),
                  children: "View"
                });
              })(), null);
              return _el$57;
            }
          })];
        }
      }), null);
      return _el$42;
    })(),
    "/join": () => (fetch("/api/teams").then((res) => res.json()).then((data) => {
      console.log(data);
      if (data.error) {
        console.error(data.error);
        return;
      }
      setAllTeams(data.teams);
      setTeams(data.teams);
    }).catch((err) => {
      console.error("Error fetching teams:", err);
    }), (() => {
      var _el$68 = _tmpl$27(), _el$69 = _el$68.firstChild, _el$70 = _el$69.firstChild, _el$71 = _el$70.nextSibling, _el$72 = _el$69.nextSibling;
      insert(_el$71, createComponent(Button, {
        onClick: () => setPage("/"),
        children: "Back"
      }));
      insert(_el$72, (() => {
        var _c$14 = createMemo(() => allTeams().length > 0);
        return () => _c$14() ? [createComponent(TextFieldRoot, {
          get children() {
            return [createComponent(TextFieldLabel, {
              htmlFor: "team-search",
              children: "Search for a Team"
            }), createComponent(TextField, {
              id: "team-search",
              placeholder: "Enter team name or member name",
              name: "team-search",
              get value() {
                return searchTeam();
              },
              onInput: (e) => {
                setSearchTeam(e.target.value);
              }
            })];
          }
        }), createMemo(() => createMemo(() => !!teams().length)() ? teams().map((team) => createComponent(Card, {
          "class": "w-auto md:col-span-1 p-3",
          get children() {
            return [createComponent(CardHeader, {
              "class": "p-3",
              get children() {
                return [createComponent(CardTitle, {
                  get children() {
                    return team.name;
                  }
                }), createComponent(CardDescription, {
                  get children() {
                    return [createMemo(() => team.members.length), " member", createMemo(() => team.members.length == 1 ? "" : "s")];
                  }
                })];
              }
            }), createComponent(CardContent, {
              "class": "flex flex-col p-3",
              get children() {
                return [_tmpl$28(), createMemo(() => team.members.find((member) => member.id === team.leaderId).name)];
              }
            }), createComponent(CardFooter, {
              "class": "p-3",
              get children() {
                return createComponent(Button, {
                  onClick: () => {
                    setJoinRequest(team);
                  },
                  get disabled() {
                    return !!joinRequest();
                  },
                  "class": "w-full h-full",
                  children: "Request"
                });
              }
            })];
          }
        })) : _tmpl$29())] : _tmpl$29();
      })());
      return _el$68;
    })()),
    "/edit": () => (window.onbeforeunload = function() {
      return "Are you sure you want to leave? Your changes will not be saved.";
    }, (() => {
      var _el$76 = _tmpl$30(), _el$77 = _el$76.firstChild; _el$77.firstChild;
      insert(_el$77, createComponent(Button, {
        onClick: () => setPage("/team"),
        children: "Back"
      }), null);
      insert(_el$76, (() => {
        var _c$15 = createMemo(() => user().team.leaderId === user().id);
        return () => _c$15() ? (() => {
          var _el$79 = _tmpl$16(), _el$80 = _el$79.firstChild;
          _el$80.addEventListener("submit", (e) => {
            e.preventDefault();
            const formData = new FormData(e.currentTarget);
            formData.set("categories", JSON.stringify(categories()));
            formData.set("experience", experience()?.value || user().team.experience);
            formData.set("maxSize", memberCount()?.value || user().team.maxSize);
            const data = Object.fromEntries(formData.entries());
            fetch("/api/edit", {
              method: "POST",
              headers: {
                "Content-Type": "application/json"
              },
              body: JSON.stringify({
                ...data,
                id: user().team.id
              })
            }).then((res) => res.json()).then((data2) => {
              if (!data2.error) {
                window.onbeforeunload = null;
                location.reload();
              } else {
                alert(data2.error || "Error updating team");
              }
            }).catch((err) => {
              alert("Error updating team");
            });
          });
          insert(_el$80, createComponent(Card, {
            "class": "w-full",
            get children() {
              return [createComponent(CardHeader, {
                get children() {
                  return [createComponent(CardTitle, {
                    "class": "text-xl",
                    get children() {
                      return user().team.name;
                    }
                  }), createComponent(CardDescription, {
                    get children() {
                      return [createMemo(() => user().team.members.length), " out of ", createMemo(() => user().team.maxSize), " members"];
                    }
                  })];
                }
              }), createComponent(CardContent, {
                "class": "flex flex-col space-y-4",
                get children() {
                  return [createComponent(TextFieldRoot, {
                    "class": "flex items-start flex-col justify-center w-full",
                    get children() {
                      return [createComponent(TextFieldLabel, {
                        children: "Team Name"
                      }), createComponent(TextField, {
                        name: "name",
                        "class": "h-10 flex w-full p-3",
                        required: true,
                        get value() {
                          return user().team.name;
                        }
                      })];
                    }
                  }), createComponent(TextFieldRoot, {
                    "class": "flex items-start flex-col justify-center w-full",
                    get children() {
                      return [createComponent(TextFieldLabel, {
                        children: "Project Description"
                      }), createComponent(TextArea, {
                        name: "project",
                        "class": "h-20 flex w-full p-3",
                        required: true,
                        get value() {
                          return user().team.project;
                        }
                      })];
                    }
                  }), createComponent(Select, {
                    options: [{
                      value: "1",
                      label: "1 (Work Alone)"
                    }, {
                      value: "2",
                      label: "2"
                    }, {
                      value: "3",
                      label: "3"
                    }, {
                      value: "4",
                      label: "4"
                    }],
                    label: "Team Size",
                    optionValue: "value",
                    get value() {
                      return createMemo(() => !!memberCount()?.value)() ? memberCount() : {
                        value: user().team.maxSize
                      };
                    },
                    onChange: (checked) => {
                      if (checked) {
                        if (parseInt(checked.value) < user().team.members.length) {
                          alert(`You cannot set the team size to ${checked.value} because you have ${user().team.members.length} members.`);
                          return;
                        } else {
                          setMemberCount(checked);
                        }
                      } else {
                        setMemberCount(null);
                      }
                    },
                    "class": "w-full space-y-1",
                    optionTextValue: "label",
                    placeholder: "Select your team size",
                    itemComponent: (props) => createComponent(SelectItem, {
                      get item() {
                        return props.item;
                      },
                      get children() {
                        return props.item.rawValue.label;
                      }
                    }),
                    get children() {
                      return [_tmpl$14(), createComponent(SelectTrigger, {
                        id: "size",
                        get children() {
                          return createComponent(SelectValue, {
                            children: (state) => state.selectedOption()?.label
                          });
                        }
                      }), createComponent(SelectContent, {})];
                    }
                  }), createComponent(Select, {
                    options: [{
                      value: "beginner",
                      label: "Beginner (0-1 years)"
                    }, {
                      value: "intermediate",
                      label: "Intermediate (1-3 years)"
                    }, {
                      value: "advanced",
                      label: "Advanced (3+ years)"
                    }],
                    label: "Experience Level",
                    optionValue: "value",
                    get value() {
                      return createMemo(() => !!experience()?.value)() ? experience() : {
                        value: user().team.experience
                      };
                    },
                    onChange: (checked) => {
                      console.log(checked);
                      if (checked) {
                        setExperience(checked);
                      } else {
                        setExperience(null);
                      }
                    },
                    "class": "w-full space-y-1",
                    optionTextValue: "label",
                    placeholder: "Select your experience level",
                    itemComponent: (props) => createComponent(SelectItem, {
                      get item() {
                        return props.item;
                      },
                      get children() {
                        return props.item.rawValue.label;
                      }
                    }),
                    get children() {
                      return [_tmpl$15(), createComponent(SelectTrigger, {
                        id: "experience",
                        get children() {
                          return createComponent(SelectValue, {
                            children: (state) => state.selectedOption()?.label
                          });
                        }
                      }), createComponent(SelectContent, {})];
                    }
                  }), createComponent(CategoryPicker, {
                    get categories() {
                      return availableCategories();
                    },
                    get selected() {
                      return categories();
                    },
                    onChange: setCategories
                  })];
                }
              }), createComponent(CardFooter, {
                "class": "pt-4",
                get children() {
                  return createComponent(Button, {
                    "class": "w-full h-full",
                    type: "submit",
                    children: "Save"
                  });
                }
              })];
            }
          }));
          return _el$79;
        })() : _tmpl$31();
      })(), null);
      return _el$76;
    })()),
    "/manage": () => (window.onbeforeunload = function() {
      return "Are you sure you want to leave? Your changes will not be saved.";
    }, (() => {
      var _el$84 = _tmpl$36(), _el$85 = _el$84.firstChild, _el$86 = _el$85.firstChild, _el$87 = _el$86.nextSibling, _el$88 = _el$85.nextSibling, _el$89 = _el$88.firstChild;
      insert(_el$87, createComponent(Button, {
        variant: "outline",
        onClick: () => {
          if (!confirm("Are you sure you want to delete your account? This action cannot be undone.")) {
            return;
          }
          fetch("/api/delete", {
            method: "POST",
            headers: {
              "Content-Type": "application/json"
            },
            body: JSON.stringify({
              id: user().id
            })
          }).then((res) => res.json()).then((data) => {
            if (!data.error) {
              alert("Your account has been deleted successfully.");
              location.href = "/";
            } else {
              alert("Error deleting account");
            }
          }).catch((err) => {
            alert("Error deleting account");
          });
        },
        children: "Delete Account"
      }), null);
      insert(_el$87, createComponent(Button, {
        onClick: () => setPage("/"),
        children: "Back"
      }), null);
      _el$89.addEventListener("submit", (e) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        formData.set("categories", JSON.stringify(categories()));
        formData.set("experience", experience()?.value || user().team.experience);
        formData.set("maxSize", memberCount()?.value || user().team.maxSize);
        const data = Object.fromEntries(formData.entries());
        fetch("/api/edit", {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
            ...data,
            id: user().team.id
          })
        }).then((res) => res.json()).then((data2) => {
          if (!data2.error) {
            window.onbeforeunload = null;
            location.reload();
          } else {
            alert(data2.error || "Error updating team");
          }
        }).catch((err) => {
          alert("Error updating team");
        });
      });
      insert(_el$89, createComponent(Card, {
        "class": "w-full",
        get children() {
          return [createComponent(CardHeader, {
            get children() {
              return createComponent(CardTitle, {
                "class": "text-xl",
                get children() {
                  return user().name;
                }
              });
            }
          }), createComponent(CardContent, {
            "class": "flex flex-col space-y-4",
            get children() {
              return [(() => {
                var _el$90 = _tmpl$32();
                insert(_el$90, createComponent(TextFieldRoot, {
                  "class": "flex items-start flex-col justify-center w-full",
                  get children() {
                    return [createComponent(TextFieldLabel, {
                      children: "First Name"
                    }), createComponent(TextField, {
                      name: "name",
                      "class": "h-10 flex w-full p-3",
                      required: true,
                      get value() {
                        return user().fname;
                      }
                    })];
                  }
                }), null);
                insert(_el$90, createComponent(TextFieldRoot, {
                  "class": "flex items-start flex-col justify-center w-full",
                  get children() {
                    return [createComponent(TextFieldLabel, {
                      children: "Last Name"
                    }), createComponent(TextField, {
                      name: "name",
                      "class": "h-10 flex w-full p-3",
                      required: true,
                      get value() {
                        return user().lname;
                      }
                    })];
                  }
                }), null);
                return _el$90;
              })(), createComponent(TextFieldRoot, {
                "class": "flex items-start flex-col justify-center w-full",
                get children() {
                  return [createComponent(TextFieldLabel, {
                    children: "Email"
                  }), createComponent(TextField, {
                    name: "name",
                    "class": "h-10 flex w-full p-3",
                    required: true,
                    get value() {
                      return user().email;
                    }
                  })];
                }
              }), createComponent(TextFieldRoot, {
                "class": "flex items-start flex-col justify-center w-full",
                get children() {
                  return [createComponent(TextFieldLabel, {
                    children: "Phone Number"
                  }), createComponent(TextField, {
                    id: "phone",
                    type: "tel",
                    name: "phone",
                    get value() {
                      return user().phone;
                    },
                    placeholder: "+1 (201) 555-0123",
                    "on:keydown": (e) => {
                      if (e.key === "ArrowRight" || e.key === "ArrowLeft") {
                        return;
                      }
                      e.preventDefault();
                      let val = e.target._value || "";
                      if (!e.target._value) {
                        e.target._value = "";
                      }
                      let pos = ((oField) => {
                        var iCaretPos = 0;
                        if (document.selection) {
                          oField.focus();
                          var oSel = document.selection.createRange();
                          oSel.moveStart("character", -oField.value.length);
                          iCaretPos = oSel.text.length;
                        } else if (oField.selectionStart || oField.selectionStart == "0") iCaretPos = oField.selectionDirection == "backward" ? oField.selectionStart : oField.selectionEnd;
                        return iCaretPos;
                      })(e.target);
                      console.log("pos", pos);
                      let _pos = pos;
                      if (pos <= 4) {
                        console.log("in the region code");
                        pos = 0;
                        _pos = 4;
                      } else if (pos > 4 && pos < (5 + val.length > 8 ? 8 : 5 + val.length)) {
                        console.log("deleting region code");
                        pos = pos - 4;
                      } else if (pos == 5 + (val.length > 3 ? 3 : val.length) || pos == (val.length > 3 ? 9 : 6 + val.length)) {
                        if (val.length < 3) {
                          console.log("area after region code, short");
                          pos = val.length - 1 || 1;
                        } else {
                          console.log("area after region code");
                          pos = 3;
                        }
                      } else if (pos > 9 && pos < 13) {
                        console.log("second part of number");
                        pos = pos - 6;
                      } else if (pos == 13) {
                        console.log("area after second part of number");
                        pos = 6;
                      } else if (pos > 13 && pos < 18) {
                        console.log("third part of number");
                        pos = pos - 7;
                      } else if (pos > 18) {
                        console.log("area after fourth part of number");
                        pos = pos - 8;
                      } else if (e.key === " ") {
                        return;
                      }
                      console.log("new pos", pos, _pos);
                      if (e.key.match(/[0-9]/)) {
                        if (val.length === 10) {
                          return;
                        }
                        if (val.length === 0 && _pos === 0) {
                          _pos += 5;
                        } else {
                          _pos += 1;
                        }
                        val = val.slice(0, pos) + e.key + val.slice(pos);
                        if (val.length >= 3 && _pos === 7) {
                          _pos += 2;
                        }
                        if (val.length >= 6 && _pos === 11) {
                          _pos += 1;
                        }
                        if (val.length === 7) {
                          _pos += 1;
                        }
                        e.target._value = val;
                        e.target.value = val.replace(/^([0-9]{1,3})([0-9]{1,3})?([0-9]{1,4})?$/, (match, p1, p2, p3) => {
                          let final = "";
                          if (p1) final += `+1 (${p1}) `;
                          if (p2) final += `${p2}`;
                          if (p3) final += `-${p3}`;
                          return final;
                        });
                      }
                      if (e.key === "Backspace") {
                        if (pos === 0) {
                          return;
                        }
                        if (val.length > 3 && _pos === 9) {
                          _pos -= 2;
                        } else if (val.length > 3 && _pos === 8) {
                          _pos -= 1;
                        }
                        if (val.length > 6 && _pos === 13) {
                          _pos -= 1;
                        }
                        val = val.slice(0, pos - 1) + val.slice(pos);
                        _pos -= 1;
                        e.target._value = val;
                        e.target.value = val.replace(/^([0-9]{1,3})([0-9]{1,3})?([0-9]{1,4})?$/, (match, p1, p2, p3) => {
                          let final = "";
                          if (p1) final += `+1 (${p1})`;
                          if (p2) final += ` ${p2}`;
                          if (p3) final += `-${p3}`;
                          return final;
                        });
                      }
                      if (e.key === "Delete") {
                        val = val.slice(0, pos) + val.slice(pos + 1);
                        _pos = _pos;
                        e.target._value = val;
                        e.target.value = val.replace(/^([0-9]{1,3})([0-9]{1,3})?([0-9]{1,4})?$/, (match, p1, p2, p3) => {
                          let final = "";
                          if (p1) final += `+1 (${p1})`;
                          if (p2) final += ` ${p2}`;
                          if (p3) final += `-${p3}`;
                          return final;
                        });
                      }
                      e.target.setSelectionRange(_pos, _pos);
                      e.target.focus();
                    }
                  })];
                }
              }), (() => {
                var _el$91 = _tmpl$32();
                insert(_el$91, createComponent(Select, {
                  required: true,
                  get options() {
                    return schools();
                  },
                  label: "School",
                  "class": "flex-1",
                  optionValue: "value",
                  optionTextValue: "label",
                  placeholder: "Select your school",
                  itemComponent: (props) => createComponent(SelectItem, {
                    get item() {
                      return props.item;
                    },
                    get children() {
                      return props.item.rawValue.label;
                    }
                  }),
                  get value() {
                    return createMemo(() => !!school())() ? {
                      value: school()
                    } : null;
                  },
                  onChange: (checked) => {
                    if (checked) {
                      setSchool(checked.value);
                    } else {
                      setSchool(null);
                    }
                  },
                  get children() {
                    return [_tmpl$33(), createComponent(SelectTrigger, {
                      id: "experience",
                      get children() {
                        return createComponent(SelectValue, {
                          children: (state) => state.selectedOption()?.label
                        });
                      }
                    }), createComponent(SelectContent, {})];
                  }
                }), null);
                insert(_el$91, createComponent(Select, {
                  required: true,
                  get options() {
                    return allMajors()[school()] || [];
                  },
                  get disabled() {
                    return !school();
                  },
                  get value() {
                    return createMemo(() => !!major())() ? {
                      value: major()
                    } : null;
                  },
                  label: "Major",
                  "class": "flex-1",
                  optionValue: "value",
                  optionTextValue: "label",
                  placeholder: "Select your major",
                  itemComponent: (props) => createComponent(SelectItem, {
                    get item() {
                      return props.item;
                    },
                    get children() {
                      return props.item.rawValue.label;
                    }
                  }),
                  onChange: (checked) => {
                    if (checked) {
                      setMajor(checked.value);
                    } else {
                      setMajor(null);
                    }
                  },
                  get children() {
                    return [_tmpl$34(), createComponent(SelectTrigger, {
                      id: "experience",
                      get children() {
                        return createComponent(SelectValue, {
                          children: (state) => state.selectedOption()?.label
                        });
                      }
                    }), createComponent(SelectContent, {})];
                  }
                }), null);
                return _el$91;
              })(), createComponent(Select, {
                options: [{
                  value: "9",
                  label: "Freshman"
                }, {
                  value: "10",
                  label: "Sophomore"
                }, {
                  value: "11",
                  label: "Junior"
                }, {
                  value: "12",
                  label: "Senior"
                }],
                "class": "w-full space-y-1",
                label: "Grade",
                get disabled() {
                  return !school();
                },
                optionValue: "value",
                get value() {
                  return createMemo(() => !!grade())() ? {
                    value: grade()
                  } : null;
                },
                onChange: (checked) => {
                  if (checked) {
                    setGrade(checked.value);
                  } else {
                    setGrade(null);
                  }
                },
                optionTextValue: "label",
                placeholder: "Select your grade",
                itemComponent: (props) => createComponent(SelectItem, {
                  get item() {
                    return props.item;
                  },
                  get children() {
                    return props.item.rawValue.label;
                  }
                }),
                get children() {
                  return [_tmpl$35(), createComponent(SelectTrigger, {
                    id: "size",
                    get children() {
                      return createComponent(SelectValue, {
                        children: (state) => state.selectedOption()?.label
                      });
                    }
                  }), createComponent(SelectContent, {})];
                }
              })];
            }
          }), createComponent(CardFooter, {
            "class": "pt-4",
            get children() {
              return createComponent(Button, {
                "class": "w-full h-full",
                type: "submit",
                children: "Save"
              });
            }
          })];
        }
      }));
      return _el$84;
    })()),
    "/requests": () => createComponent(Show, {
      get when() {
        return user().team.isLeader;
      },
      get fallback() {
        return (() => {
          var _el$99 = _tmpl$38(), _el$100 = _el$99.firstChild; _el$100.nextSibling;
          insert(_el$99, createComponent(Button, {
            onClick: () => setPage("/team"),
            children: "Back"
          }), null);
          return _el$99;
        })();
      },
      get children() {
        var _el$95 = _tmpl$37(), _el$96 = _el$95.firstChild; _el$96.firstChild; var _el$98 = _el$96.nextSibling;
        insert(_el$96, createComponent(Button, {
          onClick: () => setPage("/team"),
          children: "Back"
        }), null);
        insert(_el$98, (() => {
          var _c$16 = createMemo(() => !!user().team.requests?.length);
          return () => _c$16() ? user().team.requests.map((request) => createComponent(Card, {
            "class": "w-auto md:col-span-1",
            get children() {
              return [createComponent(CardHeader, {
                get children() {
                  return [createComponent(CardTitle, {
                    get children() {
                      return request.user.name;
                    }
                  }), createComponent(CardDescription, {
                    "class": "break-words",
                    get children() {
                      return request.user.email;
                    }
                  })];
                }
              }), createMemo(() => createMemo(() => !!request.message)() && createComponent(CardContent, {
                "class": "flex flex-col",
                get children() {
                  return [_tmpl$39(), createMemo(() => request.project)];
                }
              })), createComponent(CardFooter, {
                "class": "pt-6 space-x-4",
                get children() {
                  return [createComponent(Button, {
                    "class": "w-full h-full",
                    onClick: () => {
                      fetch("/api/accept", {
                        method: "POST",
                        headers: {
                          "Content-Type": "application/json"
                        },
                        body: JSON.stringify({
                          id: request.id
                        })
                      }).then((res) => res.json()).then((data) => {
                        if (data.error) {
                          alert(data.error);
                          return;
                        }
                        setPage("/team");
                        location.reload();
                      }).catch((err) => {
                        alert("Error accepting request");
                      });
                    },
                    children: "Accept"
                  }), createComponent(Button, {
                    type: "outline",
                    "class": "w-full h-full",
                    onClick: () => {
                      if (!confirm(`Are you sure you want to reject ${request.user.name}'s request?`)) {
                        return;
                      }
                      fetch("/api/reject", {
                        method: "POST",
                        headers: {
                          "Content-Type": "application/json"
                        },
                        body: JSON.stringify({
                          id: request.id
                        })
                      }).then((res) => res.json()).then((data) => {
                        if (data.error) {
                          alert(data.error);
                          return;
                        }
                        setPage("/team");
                        location.reload();
                      }).catch((err) => {
                        alert("Error rejecting request");
                      });
                    },
                    children: "Reject"
                  })];
                }
              })];
            }
          })) : _tmpl$40();
        })());
        return _el$95;
      }
    })
  };
  return createComponent(Ui, {
    get children() {
      var _el$104 = _tmpl$42(), _el$105 = _el$104.firstChild;
      insert(_el$104, (() => {
        var _c$17 = createMemo(() => !!verified());
        return () => _c$17() ? createComponent(Card, {
          get ["class"]() {
            return "mx-auto overflow-hidden" + (page() === "/admin/viewer" ? " max-w-6xl" : " max-w-4xl");
          },
          get children() {
            return [createComponent(CardHeader, {
              "class": "bg-[#1a2533] text-white",
              get children() {
                return createComponent(CardTitle, {
                  "class": "flex flex-row items-center py-0 gap-2",
                  get children() {
                    return [createMemo(() => createMemo(() => page() === "/reset")() ? "Reset Password" : ["Welcome Back, ", createMemo(() => user().name), "!"]), createComponent(Button, {
                      variant: "outline",
                      "class": "ml-auto",
                      onClick: () => {
                        location.href = "/";
                      },
                      children: "Home"
                    }), createComponent(Button, {
                      variant: "outline",
                      "class": "",
                      onClick: () => {
                        fetch("/api/logout").then(() => location.href = "/signup");
                      },
                      children: "Logout"
                    })];
                  }
                });
              }
            }), createComponent(CardContent, {
              "class": "pt-6",
              get children() {
                return (() => {
                  const restricted = ["/create", "/join"];
                  if (restricted.includes(page()) && (user().team || user().registration?.teamId)) {
                    setPage("/");
                    return pages["/"]();
                  }
                  return pages[page()]();
                })();
              }
            })];
          }
        }) : createComponent(Card, {
          "class": "max-w-4xl mx-auto overflow-hidden",
          get children() {
            return [createComponent(CardHeader, {
              "class": "bg-[#1a2533] text-white",
              get children() {
                return createComponent(CardTitle, {
                  children: "Account Verification Required"
                });
              }
            }), createComponent(CardContent, {
              "class": "pt-6 flex flex-col items-center",
              get children() {
                return [_tmpl$43(), _tmpl$44(), (() => {
                  var _el$114 = _tmpl$45();
                  _el$114.$$keydown = (e) => {
                    if (e.target.selectionStart === 1 && "1234567890".split("").includes(e.key)) {
                      e.preventDefault();
                      const index = e.target.name.split("-")[1];
                      const nextInput = document.querySelector(`input[name="code-${parseInt(index) + 1}"]`);
                      if (nextInput) {
                        nextInput.value = e.key;
                        nextInput.focus();
                      }
                      return;
                    }
                    if (e.target.selectionStart === 0 && "1234567890".split("").includes(e.key)) {
                      e.preventDefault();
                      e.target.value = e.key;
                      e.target.focus();
                      return;
                    }
                    if (e.key === "Backspace" && e.target.selectionStart === 0) {
                      e.preventDefault();
                      e.target.value.length;
                      const index = e.target.name.split("-")[1];
                      const prevInput = document.querySelector(`input[name="code-${parseInt(index) - 1}"]`);
                      if (prevInput) {
                        prevInput.value = "";
                        prevInput.focus();
                      }
                    }
                    if (e.key === "Enter") {
                      e.preventDefault();
                      const code = [...Array(6).keys()].map((i) => document.querySelector(`input[name="code-${i}"]`).value).join("");
                      fetch("/api/verify", {
                        method: "POST",
                        headers: {
                          "Content-Type": "application/json"
                        },
                        body: JSON.stringify({
                          code
                        })
                      }).then((res) => res.json()).then((data) => {
                        if (!data.error) {
                          location.href = "/signup/dashboard";
                        } else {
                          alert("Invalid code");
                        }
                      }).catch((err) => {
                        alert("Error verifying code");
                      });
                    }
                    if (e.key === "ArrowLeft") {
                      const index = e.target.name.split("-")[1];
                      if (index > 0) {
                        e.preventDefault();
                        const prevInput = document.querySelector(`input[name="code-${parseInt(index) - 1}"]`);
                        if (prevInput) {
                          prevInput.focus();
                          prevInput.setSelectionRange(1, 1);
                        }
                      }
                    }
                    if (e.key === "ArrowRight") {
                      e.preventDefault();
                      const index = e.target.name.split("-")[1];
                      if (index < 5) {
                        const nextInput = document.querySelector(`input[name="code-${parseInt(index) + 1}"]`);
                        if (nextInput) {
                          nextInput.focus();
                          nextInput.setSelectionRange(1, 1);
                        }
                      }
                    }
                  };
                  _el$114.$$keyup = (e) => {
                    if (e.target.value.length === 1 && e.target.name.split("-")[1] == 5) {
                      const code = [...Array(6).keys()].map((i) => document.querySelector(`input[name="code-${i}"]`).value).join("");
                      fetch("/api/verify", {
                        method: "POST",
                        headers: {
                          "Content-Type": "application/json"
                        },
                        body: JSON.stringify({
                          code
                        })
                      }).then((res) => res.json()).then((data) => {
                        if (!data.error) {
                          location.href = "/signup/dashboard";
                        } else {
                          alert("Invalid code");
                        }
                      }).catch((err) => {
                        alert("Error verifying code");
                      });
                    }
                  };
                  _el$114.addEventListener("paste", (e) => {
                    e.preventDefault();
                    const data = e.clipboardData.getData("text/plain");
                    console.log(data);
                    if (data.length === 6) {
                      [...Array(6).keys()].forEach((i) => {
                        const input = document.querySelector(`input[name="code-${i}"]`);
                        input.value = data[i];
                      });
                      const code = [...Array(6).keys()].map((i) => document.querySelector(`input[name="code-${i}"]`).value).join("");
                      fetch("/api/verify", {
                        method: "POST",
                        headers: {
                          "Content-Type": "application/json"
                        },
                        body: JSON.stringify({
                          code
                        })
                      }).then((res) => res.json()).then((data2) => {
                        if (!data2.error) {
                          location.href = "/signup/dashboard";
                        } else {
                          alert("Invalid code");
                        }
                      }).catch((err) => {
                        alert("Error verifying code");
                      });
                    }
                  });
                  insert(_el$114, () => [...Array(6).keys()].map((_, i) => createComponent(TextFieldRoot, {
                    "class": "flex items-center justify-center",
                    get children() {
                      return createComponent(TextField, {
                        name: `code-${i}`,
                        "class": "h-20 flex w-full text-xl p-0 text-center",
                        required: true,
                        maxLength: 1
                      });
                    }
                  })));
                  return _el$114;
                })(), (() => {
                  var _el$115 = _tmpl$46(), _el$116 = _el$115.firstChild;
                  _el$116.$$click = resend;
                  insert(_el$116, (() => {
                    var _c$19 = createMemo(() => !!resent());
                    return () => _c$19() ? `Resend in ${countdown()}s` : "Resend code";
                  })());
                  createRenderEffect(() => _el$116.className = resent() ? " text-[#DBCA94]" : " text-[#f5b700] hover:underline");
                  return _el$115;
                })()];
              }
            })];
          }
        });
      })(), _el$105);
      insert(_el$104, createComponent(Show, {
        get when() {
          return categoryInfoOpen();
        },
        get children() {
          return createComponent(Portal, {
            get children() {
              var _el$106 = _tmpl$41(), _el$107 = _el$106.firstChild, _el$108 = _el$107.nextSibling, _el$109 = _el$108.firstChild, _el$110 = _el$109.nextSibling, _el$111 = _el$110.nextSibling;
              _el$106.$$click = () => setCategoryInfoOpen(false);
              _el$108.$$click = (e) => e.stopPropagation();
              _el$109.$$click = () => setCategoryInfoOpen(false);
              insert(_el$110, () => categoryInfoData()?.label);
              insert(_el$108, (() => {
                var _c$18 = createMemo(() => categoryInfoData()?.prize > 0);
                return () => _c$18() && (() => {
                  var _el$117 = _tmpl$47(); _el$117.firstChild;
                  insert(_el$117, () => categoryInfoData()?.prize?.toLocaleString(), null);
                  return _el$117;
                })();
              })(), _el$111);
              insert(_el$111, () => categoryInfoData()?.description);
              return _el$106;
            }
          });
        }
      }), null);
      return _el$104;
    }
  });
};
delegateEvents(["click", "keyup", "keydown"]);

render(() => {
  if (location.pathname.startsWith("/signup/dashboard") || location.pathname.startsWith("/signup/dashboard/reset")) {
    return createComponent(Dashboard, {});
  } else {
    return createComponent(App, {});
  }
}, document.getElementById("root"));
