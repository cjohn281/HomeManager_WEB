<script></script>

<template>
  <header>
    <nav class="navbar navbar-expand-sm navbar-toggleable-sm navbar-light border-bottom box-shadow mb-3" style="background-color: #e3f2fd;">
      <div class="container-fluid">
          <a class="navbar-brand" asp-area="" asp-controller="Home" asp-action="Index">Home Manager</a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target=".navbar-collapse" aria-controls="navbarSupportedContent"
                  aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
          </button>
          <div class="navbar-collapse collapse d-sm-inline-flex justify-content-between">
              <ul class="navbar-nav flex-grow-1">
                  <li class="nav-item">
                      <form style="padding: 0;">
                          <button type="submit" class="nav-link text-dark btn btn-link" style="background:none; border:none; padding: 0.5rem 0.5rem;">Logout</button>
                      </form>
                  </li>
              </ul>
          </div>
      </div>
    </nav>
  </header>
  <body>
    <div class="container">
      <div class="text-center">
        <h1 class="display-4">Apps</h1>
        <router-link to="/BudgetManager/persons">Budget Manager</router-link>
      </div>
    </div>
  </body>
  <footer class="border-top footer text-muted">
    <div class="container">
      &copy; 2026 - Home Manager
    </div>
  </footer> 
</template>