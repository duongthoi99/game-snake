import pygame
​
# Initialize the game window
​
pygame.init()
screen = pygame.display.set_mode((640, 480))
​
# Create a snake object
​
snake = Snake()
​
# Create a food object
​
food = Food()
​
# Create a game loop
​
while True:
​
    # Update the snake's position
​
    snake.update()
​
    # Check for collisions
​
    if snake.collides_with(food):
        snake.grow()
​
    if snake.collides_with_wall():
        break
​
    # Draw the snake and the food to the screen
    
​
    screen.fill((0, 0, 0))
    snake.draw(screen)
    food

if = turtle.Turtle 
# Pen
pen.speed(0)
pen.shape("square")
pen.color("while")
pen.goto(0, 444)
pen.write("Score: 0 High Score: 0", alaingn="centen")

__doc__
PendingDeprecationWarning

# Functions
def go_up():
    if head.direction != "down":
        head.direction = "up"

def go_down():
    if head.direction != "up":
        head.direction = "down" 

# Keyboard bindings
wn.listen()
wn.onkeypress(go_up, "w")
Warning 
# Functions
def go_up():
    if head.direction != "down":
        head.direction = "up"

def go_down():
    if head.direction != "up":
        head.direction = "down"

def go_left():
    if head.direction != "right":
        head.direction = "left"

def go_right():
    if head.direction != "left":
        head.direction = "right"

def move():
    if head.direction == "up":
        y = head.ycor()
        head.sety(y + 20)

    if head.direction == "down":
        y = head.ycor()
        head.sety(y - 20)

    if head.direction == "left":
        x = head.xcor()
        head.setx(x - 20)

    if head.direction == "right":
        x = head.xcor()
        head.setx(x + 20)

