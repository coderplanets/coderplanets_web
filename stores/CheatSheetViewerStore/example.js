const md = `

## basic types

{{ ::cards-header:: }}

### snippet var

 \`\`\`go
package main

import "fmt"
 \`\`\`

{{ ::card-item:: }}

### snippet if
 \`\`\`go
package main

import "if"
import "if"
import "if"
import "if"
import "if"
import "if"
import "if"
import "if"

 \`\`\`

{{ ::card-item:: }}

### snippet if2
example header
 \`\`\`go
package main

import "if"
import "if"
import "if"
import "if"
import "if"
import "if"
import "if"
import "if"

 \`\`\`

 example code

{{ ::card-item:: }}

### snippet for
 \`\`\`go
package main

import "for"
 \`\`\`


{{ ::group:: }}

## flow control

{{ ::cards-header:: }}

### snippet elixir

\`\`\`elixir
defmodule Greeter do
  def greet(name) do
    message = "Hello, " <> name <> "!"
    IO.puts message
  end
end
\`\`\`

{{ ::card-item:: }}

### snippet 2

\`\`\`elixir
Greeter.greet("world")
\`\`\`

`
export default md
