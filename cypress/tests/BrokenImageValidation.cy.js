/// <reference types="cypress" />

import homepage from "../pages/homePage"
import baseFunc from "../pages/functions"

import credUtils from "../support/credentialUtils"

describe("Incorrect Login Validation", () => {
	it("Navigating to the website", () => {
		cy.visit("/")
	})

	it("Homepage navigation verification", () => {
		cy.validUrl("exercise", credUtils.homePage)
		baseFunc.ValidatePageTitle("Automation Exercise")
	})
})
